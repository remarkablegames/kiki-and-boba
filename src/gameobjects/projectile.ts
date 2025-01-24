import { Sound, Sprite, Tag } from '../constants'
import { getDirection } from '../helpers'
import type { Enemy, Player } from '../types'

const SPEED = 500
const DAMAGE = 5

export function addProjectile(enemy: Enemy, player: Player) {
  const projectile = add([
    sprite(Sprite.Projectile),
    pos(enemy.pos),
    move(getDirection(enemy.screenPos()!, player.screenPos()!), SPEED),
    area(),
    offscreen({ destroy: true }),
    anchor('center'),
    scale(0.2),
    Tag.Projectile,
  ])

  projectile.onCollide(Tag.Player, (player) => {
    play(Sound.Hit)
    projectile.destroy()
    const currentPlayer = player as Player
    currentPlayer.hurt(DAMAGE)
  })

  return projectile
}
