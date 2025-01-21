import { Sprite, Tag } from '../constants'
import { addCursorKeys } from '../events'
import { addBullet } from './bullet'

export function addPlayer(x = center().x, y = center().y) {
  const player = add([
    sprite(Sprite.bean),
    pos(x, y),
    rotate(0),
    anchor('center'),
    area(),
    Tag.player,
  ])

  addCursorKeys(player)

  onClick(() => {
    addBullet(player)
  })

  return player
}
