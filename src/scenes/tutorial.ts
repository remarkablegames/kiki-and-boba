import { Scene, Sound, Sprite } from '../constants'
import {
  addAvatar,
  addButton,
  addDrain,
  addEnemy,
  addGame,
  addHealth,
  addPause,
  addPlayer,
  addReward,
  addScore,
  addText,
} from '../gameobjects'
import { gameState } from '../helpers'

const instructions = [
  {
    start: 2,
    text: 'WASD or arrow keys to move',
    action() {},
  },

  {
    start: 4,
    text: 'Left click to shoot',
    action() {},
  },

  {
    start: 6,
    text: 'Press P or ESC to pause',
    action() {
      addPause()
    },
  },

  {
    start: 8,
    text: 'Score is at the top left',
    action() {
      addScore()
    },
  },

  {
    start: 10,
    text: 'Health is at the bottom left',
    action() {
      addHealth()
      addAvatar()
    },
  },

  {
    start: 12,
    text: 'Shoot bubbles at enemies',
    action() {
      gameState.enemy.sprites = [Sprite.Spiny]
      addEnemy()
    },
  },

  {
    start: 22,
    text: 'Enemies in a bubble will fall down the drain',
    action() {
      gameState.enemy.sprites = [Sprite.Spiny]
      addEnemy()
      addDrain()
    },
  },

  {
    start: 32,
    text: 'Avoid enemies & projectiles',
    action() {
      gameState.enemy.sprites = [Sprite.Bubbie, Sprite.Pokey]
      addEnemy()
    },
  },

  {
    start: 42,
    text: 'Upgrade when you reach a certain score',
    action() {
      addReward()
    },
  },

  {
    start: 52,
    text: 'Aim for a high score & have fun!',
    action() {},
  },
]

scene(Scene.Tutorial, () => {
  addGame()
  addPlayer()

  const { x } = center()
  const margin = 100

  addButton({
    width: 220,
    height: 80,
    radius: 8,
    x,
    y: height() - margin,
    text: 'Play',
    onClick() {
      play(Sound.Shoot)
      go(Scene.Game)
    },
    fixed: true,
  })

  instructions.forEach((instruction, index) => {
    wait(instruction.start, () => {
      play(Sound.Shoot, { detune: index * 100 })
      instruction.action()

      addText({
        ...getWidthAndHeight(instruction.text),
        x,
        y: margin * (index + 1),
        text: instruction.text,
      }).fadeIn(1)
    })
  })
})

function getWidthAndHeight(text: string) {
  return {
    width: 25 * text.length,
    height: 60,
  }
}
