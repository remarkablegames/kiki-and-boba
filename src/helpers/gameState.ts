import { Sprite } from '../constants'

class GameState {
  enemy = {
    multiplier: {
      damage: 1,
      health: 1,
      speed: 1,
    },
    sprites: [] as Sprite[],
  }

  reward = {
    score: 5,
    increment: 5,
  }
}

export let gameState = new GameState()

export function resetGameState() {
  gameState = new GameState()
}
