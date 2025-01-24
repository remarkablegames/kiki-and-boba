import { Sound, Tag } from '../constants'
import { getDirection } from '../helpers'
import type { Enemy, Player } from '../types'

const BULLET_SPEED = 200
const BULLET_DAMAGE = 20

export function addBullet(player: Player) {
  const bullet = add([
    pos(player.pos),
    move(getDirection(player.screenPos()!, mousePos()), BULLET_SPEED),
    circle(30),
    area(),
    offscreen({ destroy: true }),
    anchor('center'),
    color(0, 0, 255),
    Tag.Bullet,
  ])

  bullet.onCollide(Tag.Enemy, (enemy) => {
    play(Sound.Hit)
    bullet.destroy()
    const currentEnemy = enemy as Enemy
    currentEnemy.hurt(BULLET_DAMAGE)
  })

  return bullet
}
