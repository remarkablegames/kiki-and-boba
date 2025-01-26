import { Sound, Sprite, Tag } from '../constants'
import { getDirection, multiplier } from '../helpers'
import type { Enemy, Player } from '../types'
import { getPlayer } from './player'

const SPEED = 500
const DAMAGE = 5

export function addProjectile(enemy: Enemy) {
  play(Sound.Sneeze, { detune: rand(-100, 100) })
  const direction = getDirection(enemy.screenPos()!, getPlayer()!.screenPos()!)

  const projectile = add([
    sprite(Sprite.Projectile),
    pos(enemy.pos),
    move(direction, SPEED),
    area(),
    offscreen({ destroy: true }),
    anchor('center'),
    scale(0.2),
    rotate(direction.angle()),
    Tag.Projectile,
  ])

  projectile.onCollide(Tag.Player, (player) => {
    play(Sound.Pop, { detune: rand(-100, 100) })
    projectile.destroy()
    const currentPlayer = player as Player
    currentPlayer.hurt(DAMAGE * multiplier.value)
  })

  projectile.onCollide(Tag.Enemy, (enemy) => {
    play(Sound.Pop, { detune: rand(-100, 100) })
    enemy.removeAll(Tag.ChildBubble)
    enemy.bubble = false
  })

  return projectile
}
