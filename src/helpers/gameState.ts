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

  init() {
    this.enemy.multiplier.damage = 1
    this.enemy.multiplier.health = 1
    this.enemy.multiplier.speed = 1
    this.enemy.sprites = []

    this.reward.score = 5
    this.reward.increment = 5
  }
}

export const gameState = new GameState()
