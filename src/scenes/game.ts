import { Scene } from '../constants'
import {
  addAvatar,
  addDrain,
  addEnemy,
  addGame,
  addHealth,
  addMusic,
  addPause,
  addPlayer,
  addScore,
  addText,
  game,
  music,
} from '../gameobjects'
import { gameState, levels } from '../helpers'

scene(Scene.Game, () => {
  gameState.init()

  addMusic()
  music.play()

  addText({
    width: 600,
    height: 100,
    x: center().x,
    y: 80,
    text: 'WASD or arrow keys to move\nLeft click to shoot',
  })

  addScore()
  addGame()
  addPause()

  addPlayer()
  addHealth()
  addAvatar()

  levels.forEach((level) => {
    game.wait(level.start, () => {
      gameState.enemy.multiplier.damage = level.multiplier.damage
      gameState.enemy.multiplier.health = level.multiplier.health
      gameState.enemy.multiplier.speed = level.multiplier.speed
      gameState.enemy.sprites = level.enemies
      const duration = level.end && level.end - level.start

      game.loop(
        level.loop.enemy,
        addEnemy,
        duration && duration / level.loop.enemy,
        true,
      )

      game.loop(
        level.loop.enemy,
        addDrain,
        duration && duration / level.loop.drain,
        true,
      )
    })
  })
})
