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

  init() {
    this.enemy.multiplier.damage = 1
    this.enemy.multiplier.health = 1
    this.enemy.multiplier.speed = 1
    this.enemy.sprites = []
  }
}

export const gameState = new GameState()
