import { Scene } from '../constants'
import {
  addAvatar,
  addDrain,
  addEnemy,
  addHealth,
  addPlayer,
  addScore,
  addText,
  playMusic,
} from '../gameobjects'
import { gameState, levels } from '../helpers'

scene(Scene.Game, () => {
  gameState.init()

  addText({
    width: 600,
    height: 100,
    x: center().x,
    y: 80,
    text: 'WASD or arrow keys to move\nLeft click to shoot',
  })

  addScore()
  playMusic()

  const player = addPlayer()
  addHealth(player)
  addAvatar()

  levels.forEach((level) => {
    wait(level.start, () => {
      gameState.enemyDamageMultiplier = level.multiplier.damage
      gameState.enemyHealthMultiplier = level.multiplier.health
      gameState.enemySpeedMultiplier = level.multiplier.speed
      gameState.enemySprites = level.enemies
      const duration = level.end && level.end - level.start

      loop(
        level.loop.enemy,
        addEnemy,
        duration && duration / level.loop.enemy,
        true,
      )

      loop(
        level.loop.enemy,
        addDrain,
        duration && duration / level.loop.drain,
        true,
      )
    })
  })
})
