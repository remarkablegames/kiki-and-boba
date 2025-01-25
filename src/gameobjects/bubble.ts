import { Sound, Sprite, Tag } from '../constants'
import { getDirection } from '../helpers'
import type { Bubble, Enemy, Player } from '../types'

const SPEED = 200
const DAMAGE = 20

export function addBubble(player: Player) {
  const bubble = add([
    sprite(Sprite.BubbleGood),
    pos(player.pos),
    move(getDirection(player.screenPos()!, mousePos()), SPEED),
    area(),
    offscreen({ destroy: true }),
    anchor('center'),
    scale(0.1),
    Tag.Bubble,
  ])

  bubble.onCollide(Tag.Enemy, (enemy) => {
    play(Sound.Hit)
    bubble.destroy()
    const currentEnemy = enemy as Enemy
    currentEnemy.hurt(DAMAGE)

    if (hasBubble(currentEnemy)) {
      const childBubble = currentEnemy.get(Tag.Bubbled)[0] as Bubble
      childBubble.scaleTo(childBubble.scale.x * 1.1)
    } else {
      currentEnemy.add([
        sprite(Sprite.BubbleGood),
        anchor('center'),
        scale(0.2),
        Tag.Bubbled,
      ])
      currentEnemy.bubble = true
    }
  })

  bubble.onCollide(Tag.Projectile, () => {
    play(Sound.Hit)
    bubble.destroy()
  })

  return bubble
}

export function hasBubble(enemy: Enemy) {
  return Boolean(enemy.get(Tag.Bubbled).length)
}
