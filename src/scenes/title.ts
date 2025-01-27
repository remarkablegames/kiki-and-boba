import { Scene, Sound } from '../constants'
import { addButton, addText } from '../gameobjects'

scene(Scene.Title, () => {
  const { x, y } = center()
  const buttonHeight = 80

  addText({
    width: 400,
    height: 100,
    x,
    y: y - buttonHeight * 2,
    text: 'Bubble Gun',
    fontSize: 48,
  })

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
