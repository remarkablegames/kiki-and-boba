import { Scene, Sound } from '../constants'
import { addButton } from '../gameobjects'

scene(Scene.Lose, () => {
  const { x, y } = center()
  const margin = 100

  const textbox = add([
    rect(400, 100),
    pos(x, y - margin),
    anchor('center'),
    color(255, 255, 255),
  ])

  textbox.add([
    text('Game Over', { size: 48 }),
    anchor('center'),
    color(0, 0, 0),
  ])

  addButton({
    width: 220,
    height: 80,
    radius: 8,
    x,
    y: y + margin,
    text: 'Restart',
    onClick() {
      play(Sound.Hit)
      go(Scene.Game)
    },
  })
})
