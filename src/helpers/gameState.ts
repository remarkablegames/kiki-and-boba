import { Sprite } from '../constants'

class GameState {
  enemyDamageMultiplier = 1
  enemyHealthMultiplier = 1
  enemySpeedMultiplier = 1
  enemySprites: Sprite[] = []

  init() {
    this.enemyDamageMultiplier = 1
    this.enemyHealthMultiplier = 1
    this.enemySpeedMultiplier = 1
    this.enemySprites = []
  }
}

export const gameState = new GameState()
