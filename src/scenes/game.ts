import { Scene } from '../constants'
import {
  addEnemy,
  addHealth,
  addPlayer,
  addScore,
  playMusic,
} from '../gameobjects'
import { outsideCoordinates } from '../helpers'

scene(Scene.Game, () => {
  const textbox = add([
    rect(600, 100),
    pos(center().x, 80),
    anchor('center'),
    color(255, 255, 255),
  ])

  textbox.add([
    text('WASD or arrow keys to move\nLeft click to shoot'),
    anchor('center'),
    color(0, 0, 0),
  ])

  addScore()
  playMusic()

  const player = addPlayer()
  addHealth(player)

  loop(5, () => {
    const { x, y } = outsideCoordinates(player.pos.x, player.pos.y)
    addEnemy(x, y)
  })
})
