import { Scene } from '../constants'
import { addEnemy, addPlayer } from '../gameobjects'

scene(Scene.Game, () => {
  const player = addPlayer()

  add([text('Press arrow keys', { width: width() / 2 }), pos(12, 12)])

  loop(5, () => {
    if (coinflip()) {
      // right
      addEnemy(width(), rand(0, height()), player)
    }

    if (coinflip()) {
      // left
      addEnemy(-32, rand(0, height()), player)
    }

    if (coinflip()) {
      // top
      addEnemy(rand(0, width()), height(), player)
    }

    if (coinflip()) {
      // bottom
      addEnemy(rand(0, width()), -32, player)
    }
  })
})

function coinflip() {
  return Boolean(randi(2))
}
