import { Scene } from '../constants'
import { addEnemy, addHealth, addPlayer, playMusic } from '../gameobjects'
import { outsideCoordinates } from '../helpers'

scene(Scene.Game, () => {
  const textbox = add([
    rect(580, 80),
    pos(center().x - 580 / 2, 12),
    color(255, 255, 255),
  ])

  textbox.add([
    text('WASD or arrow keys to move\nLeft click to shoot', {
      width: width() / 2,
    }),
    pos(4, 4),
    color(0, 0, 0),
  ])

  playMusic()

  const player = addPlayer()
  addHealth(player)

  loop(5, () => {
    const { x, y } = outsideCoordinates(player.pos.x, player.pos.y)
    addEnemy(x, y, player)
  })
})
