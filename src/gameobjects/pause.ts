import type { TweenController } from 'kaplay'

import { Scene } from '../constants'
import { addButton, game, stopMusic } from '.'

export function addPause() {
  let currentTween: TweenController
  const { x, y } = center()

  onKeyPress((key) => {
    if (['escape', 'p'].includes(key)) {
      togglePause()
    }
  })

  const pauseMenu = add([
    rect(340, 300),
    color(255, 255, 255),
    outline(4),
    anchor('center'),
    pos(x, y + 700),
  ])

  pauseMenu.hidden = true

  addButton({
    width: 200,
    height: 80,
    radius: 8,
    x: 0,
    y: -50,
    text: 'Resume',
    onClick: togglePause,
    parent: pauseMenu,
  })

  addButton({
    width: 200,
    height: 80,
    radius: 8,
    x: 0,
    y: 50,
    text: 'Exit',
    onClick() {
      go(Scene.Title)
      stopMusic()
    },
    parent: pauseMenu,
  })

  function togglePause() {
    game.paused = !game.paused

    if (currentTween) {
      currentTween.cancel()
    }

    currentTween = tween(
      pauseMenu.pos,
      game.paused ? center() : center().add(0, 700),
      1,
      (position) => (pauseMenu.pos = position),
      easings.easeOutElastic,
    )

    if (game.paused) {
      pauseMenu.hidden = false
    } else {
      currentTween.onEnd(() => {
        pauseMenu.hidden = true
      })
    }
  }
}
