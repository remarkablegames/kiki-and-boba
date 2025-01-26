import { Scene, Sound } from '../constants'
import { addPlayer } from '../gameobjects'
import { addButton } from '../gameobjects'

scene(Scene.Tutorial, () => {
  const { x } = center()

  const textbox = add([
    rect(600, 100),
    pos(x, 80),
    anchor('center'),
    color(255, 255, 255),
  ])

  textbox.add([
    text('WASD or arrow keys to move\nLeft click to shoot'),
    anchor('center'),
    color(0, 0, 0),
  ])

  addPlayer()

  addButton({
    width: 220,
    height: 80,
    radius: 8,
    x,
    y: height() - 80,
    text: 'Play',
    onClick() {
      play(Sound.Hit)
      go(Scene.Game)
    },
  })
})
