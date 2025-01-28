import { Scene } from '../constants'
import {
  addAvatar,
  addDrain,
  addEnemy,
  addGame,
  addHealth,
  addPlayer,
  addScore,
  addText,
  playMusic,
} from '../gameobjects'
import { gameState, levels } from '../helpers'

scene(Scene.Game, () => {
  addGame()
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
      gameState.enemy.multiplier.damage = level.multiplier.damage
      gameState.enemy.multiplier.health = level.multiplier.health
      gameState.enemy.multiplier.speed = level.multiplier.speed
      gameState.enemy.sprites = level.enemies
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
