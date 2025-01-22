import { Tag } from '../constants'
import type { Enemy, Player } from '../types'

const BULLET_SPEED = 200
const BULLET_DAMAGE = 20

export function addBullet(player: Player) {
  const bullet = add([
    pos(player.pos),
    move(getBulletDir(player), BULLET_SPEED),
    circle(30),
    area(),
    offscreen({ destroy: true }),
    anchor('center'),
    color(0, 0, 255),
    Tag.Bullet,
  ])

  bullet.onCollide(Tag.Enemy, (enemy) => {
    bullet.destroy()
    const currentEnemy = enemy as Enemy
    currentEnemy.hurt(BULLET_DAMAGE)
  })

  return bullet
}

function getBulletDir(player: Player) {
  const mousePosition = mousePos()
  const playerPosition = player.screenPos()
  const angle = Math.atan2(
    mousePosition.y - playerPosition!.y,
    mousePosition.x - playerPosition!.x,
  )
  const degrees = (angle * 180) / Math.PI
  return degrees
}
