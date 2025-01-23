import { Scene } from '../constants'
import { addEnemy, addHealth, addPlayer } from '../gameobjects'
import { outsideCoordinates } from '../helpers'

scene(Scene.Game, () => {
  const player = addPlayer()

  add([text('Press arrow keys', { width: width() / 2 }), pos(12, 12)])

  addHealth(player)

  loop(5, () => {
    const { x, y } = outsideCoordinates(player.pos.x, player.pos.y)
    addEnemy(x, y, player)
  })
})
