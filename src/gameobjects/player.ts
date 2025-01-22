import { Sprite, Tag } from '../constants'
import { addCursorKeys } from '../events'
import { addBullet } from './bullet'

export function addPlayer(x = center().x, y = center().y) {
  const player = add([
    sprite(Sprite.Bean),
    pos(x, y),
    rotate(0),
    anchor('center'),
    area(),
    Tag.Player,
  ])

  player.onUpdate(() => {
    setCamPos(player.worldPos()!)
  })

  addCursorKeys(player)

  onClick(() => {
    addBullet(player)
  })

  return player
}
