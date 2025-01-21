import { Scene } from '../constants'
import { addEnemy, addPlayer } from '../gameobjects'

scene(Scene.game, () => {
  const player = addPlayer()

  add([text('Press arrow keys', { width: width() / 2 }), pos(12, 12)])

  loop(5, () => {
    const x = rand(0, width())
    const y = rand(0, height())
    addEnemy(x, y, player)
  })
})
