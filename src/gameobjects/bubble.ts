import { Sound, Sprite, Tag } from '../constants'
import { getDirection } from '../helpers'
import type { Bubble, Enemy, Player } from '../types'

const SPEED = 200

export function addBubble(player: Player) {
  const bubble = add([
    sprite(Sprite.BubbleGood),
    pos(player.pos),
    move(getDirection(player.screenPos()!, mousePos()), SPEED),
    area({ scale: 0.7 }),
    offscreen({ destroy: true }),
    anchor('center'),
    scale(0.1),
    Tag.Bubble,
    { damage: 20 },
  ])

  bubble.onCollide(Tag.Enemy, (enemy) => {
    play(Sound.Pop, { detune: rand(-100, 100) })
    bubble.destroy()

    const currentEnemy = enemy as Enemy
    currentEnemy.hurt(bubble.damage)

    if (hasBubble(currentEnemy)) {
      const childBubble = currentEnemy.get(Tag.Bubbled)[0] as Bubble
      childBubble.scaleBy(1.1)
    } else {
      currentEnemy.add([
        sprite(Sprite.BubbleGood),
        anchor('center'),
        scale(0.18),
        Tag.Bubbled,
      ])
      currentEnemy.bubble = true
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

export function hasBubble(enemy: Enemy) {
  return Boolean(enemy.get(Tag.Bubbled).length)
}
