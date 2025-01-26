import { Scene, Sound } from '../constants'
import { addButton } from '../gameobjects'

scene(Scene.Title, () => {
  const { x, y } = center()
  const buttonHeight = 80

  const textbox = add([
    rect(400, 100),
    pos(x, y - buttonHeight * 2),
    anchor('center'),
    color(255, 255, 255),
  ])

  textbox.add([
    text('Bubble Gun', { size: 48 }),
    anchor('center'),
    color(0, 0, 0),
  ])

  addButton({
    width: 220,
    height: buttonHeight,
    radius: 8,
    x,
    y: y + buttonHeight,
    text: 'Play',
    onClick() {
      play(Sound.Hit)
      go(Scene.Game)
    },
  })

  addButton({
    width: 220,
    height: buttonHeight,
    radius: 8,
    x,
    y: y + buttonHeight * 2 + 20,
    text: 'Tutorial',
    onClick() {
      play(Sound.Hit)
      go(Scene.Tutorial)
    },
  })
})
