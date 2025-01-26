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

    this.enemySprites = [
      Sprite.Bubbie,
      Sprite.Gooba,
      Sprite.Shellie,
      Sprite.Spiny,
      Sprite.Pokey,
    ]
  }
}

export const gameState = new GameState()
