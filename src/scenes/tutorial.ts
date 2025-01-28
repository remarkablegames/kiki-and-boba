import { Scene, Sound } from '../constants'
import { addButton, addGame, addPlayer, addText } from '../gameobjects'

scene(Scene.Tutorial, () => {
  addGame()

  const { x } = center()

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
    fixed: true,
  })

  addText({
    width: 600,
    height: 60,
    x,
    y: 80,
    text: 'WASD or arrow keys to move',
  })

  addText({
    width: 600,
    height: 60,
    x,
    y: 160,
    text: 'Left click to shoot',
  })

  addPlayer()
})
