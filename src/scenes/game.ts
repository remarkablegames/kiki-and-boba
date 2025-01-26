import { Scene, Time } from '../constants'
import {
  addEnemy,
  addHealth,
  addHole,
  addPlayer,
  addScore,
  playMusic,
} from '../gameobjects'
import { multiplier } from '../helpers'

scene(Scene.Game, () => {
  multiplier.reset()

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

  loop(5, addEnemy, Time.Minute / 5, true)
  loop(10, addHole, Time.Minute / 10, true)

  wait(Time.Minute, () => {
    multiplier.set(1.5)
    loop(2.5, addEnemy, undefined, true)
    loop(15, addHole, undefined, true)
  })
})
