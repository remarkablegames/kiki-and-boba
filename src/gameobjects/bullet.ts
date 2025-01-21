import { Tag } from '../constants'
import type { Player } from './player'

const BULLET_SPEED = 600

export function addBullet(player: Player) {
  const bullet = add([
    pos(player.pos),
    move(getBulletDir(player), BULLET_SPEED),
    circle(6),
    area(),
    offscreen({ destroy: true }),
    anchor('center'),
    color(0, 0, 255),
    Tag.bullet,
  ])

  return bullet
}

function getBulletDir(player: Player) {
  const mousePosition = mousePos()
  const angle = Math.atan2(
    mousePosition.y - player.pos.y,
    mousePosition.x - player.pos.x,
  )
  const degrees = (angle * 180) / Math.PI
  return degrees
}
