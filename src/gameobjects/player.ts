import { Tag } from '../constants'
import { addCursorKeys } from '../events'
import { bean } from '../sprites'
import { addBullet } from './bullet'

export function addPlayer(x = center().x, y = center().y) {
  const player = add([bean, pos(x, y), rotate(0), anchor('center'), Tag.player])

  addCursorKeys(player)

  onClick(() => {
    addBullet(player)
  })

  return player
}

export type Player = ReturnType<typeof addPlayer>
