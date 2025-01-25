import { Sound, Sprite, Tag } from '../constants'
import { getDirection } from '../helpers'
import type { Enemy, Player } from '../types'

const SPEED = 500
const DAMAGE = 5

export function addProjectile(enemy: Enemy, player: Player) {
  const direction = getDirection(enemy.screenPos()!, player.screenPos()!)

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
    play(Sound.Hit)
    projectile.destroy()
    const currentPlayer = player as Player
    currentPlayer.hurt(DAMAGE)
  })

  projectile.onCollide(Tag.Enemy, (enemy) => {
    play(Sound.Hit)
    enemy.removeAll(Tag.EnemyBubble)
  })

  return projectile
}
