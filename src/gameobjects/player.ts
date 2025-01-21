import { Tag } from '../constants'
import { addCursorKeys } from '../events'
import { bean } from '../sprites'

export function addPlayer(x = center().x, y = center().y) {
  const player = add([bean, pos(x, y), rotate(0), anchor('center'), Tag.player])

  player.onUpdate(() => {
    player.angle += 120 * dt()
  })

  addCursorKeys(player)

  return player
}
