import { Scene } from '../constants'
import { addEnemy, addPlayer } from '../gameobjects'

scene(Scene.Game, () => {
  const player = addPlayer()

  add([text('Press arrow keys', { width: width() / 2 }), pos(12, 12)])

  loop(5, () => {
    const { x, y } = coordinates(player.pos.x, player.pos.y)
    addEnemy(x, y, player)
  })
})

/**
 * Random coordinates outside the camera view.
 */
function coordinates(x: number, y: number) {
  const halfWidth = width() / 2
  const halfHeight = height() / 2
  const multiplier = coinflip() ? 1 : -1
  return {
    x: x + halfWidth * multiplier,
    y: y + halfHeight * multiplier,
  }
}

function coinflip() {
  return Boolean(randi(2))
}
