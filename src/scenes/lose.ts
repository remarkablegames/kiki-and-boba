import { Scene, Sound } from '../constants'
import { addButton, addText } from '../gameobjects'

scene(Scene.Lose, () => {
  const { x, y } = center()
  const margin = 100

  addText({
    width: 400,
    height: 100,
    x,
    y: y - margin,
    text: 'Game Over',
    fontSize: 48,
  })

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
