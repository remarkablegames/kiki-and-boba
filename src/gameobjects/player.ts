import { Sprite, Tag } from '../constants'
import { addAttack, addCursorKeys } from '../events'

export function addPlayer(x = center().x, y = center().y) {
  const player = add([
    sprite(Sprite.Bean),
    pos(x, y),
    rotate(0),
    anchor('center'),
    area(),
    Tag.Player,
  ])

  addCursorKeys(player)
  addAttack(player)

  return player
}
