import type { GameObj } from 'kaplay'

import { Sound, Sprite, Tag } from '../constants'
import { getDirection } from '../helpers'
import type { Bubble, ChildBubble, Enemy, Player } from '../types'
import { game } from '.'

export function addBubble(player: Player) {
  const bubble = game.add([
    sprite(Sprite.Bubble),
    pos(player.pos),
    move(
      getDirection(player.screenPos()!, mousePos()),
      player.attack.bubbleSpeed,
    ),
    area({ scale: 0.7 }),
    offscreen({ destroy: true }),
    anchor('center'),
    scale(0.1 * player.attack.bubbleSize),
    Tag.Bubble,
    { damage: player.attack.bubbleDamage },
  ])

  bubble.onCollide(Tag.Enemy, (enemy) => {
    play(Sound.Pop, { detune: rand(-100, 100) })
    bubble.destroy()

    const currentEnemy = enemy as Enemy
    currentEnemy.hurt(bubble.damage)
    currentEnemy.bubble += 1
    const childBubble = getChildBubble(currentEnemy)

    if (childBubble) {
      childBubble.scaleBy(1.1)
    } else {
      currentEnemy.add([
        sprite(Sprite.Bubble),
        anchor('center'),
        scale(0.18),
        Tag.ChildBubble,
      ])
    }
  })

  bubble.onCollide(Tag.Bubble, (otherBubble) => {
    let currentBubble: Bubble

    if (bubble.scale.x >= (otherBubble as Bubble).scale.x) {
      currentBubble = bubble
      otherBubble.destroy()
    } else {
      currentBubble = otherBubble as Bubble
      bubble.destroy()
    }

    if (currentBubble.scale.x > 0.2) {
      currentBubble.destroy()
    } else {
      currentBubble.scaleBy(1.1)
      currentBubble.damage *= 1.5
    }
  })

  bubble.onCollide(Tag.Projectile, () => {
    play(Sound.Pop, { detune: rand(-100, 100) })
    bubble.destroy()
  })

  return bubble
}

export function getChildBubble(gameobject: GameObj) {
  return gameobject.get(Tag.ChildBubble)[0] as ChildBubble | undefined
}
