import { Scene } from '../constants'
import {
  addDrain,
  addEnemy,
  addHealth,
  addPlayer,
  addScore,
  playMusic,
} from '../gameobjects'
import { gameState } from '../helpers'

const MINUTE = 60

scene(Scene.Game, () => {
  gameState.init()

  const textbox = add([
    rect(600, 100),
    pos(center().x, 80),
    anchor('center'),
    color(255, 255, 255),
  ])

  textbox.add([
    text('WASD or arrow keys to move\nLeft click to shoot'),
    anchor('center'),
    color(0, 0, 0),
  ])

  addScore()
  playMusic()

  const player = addPlayer()
  addHealth(player)

  // 0-1
  wait(0, () => {
    const level = MINUTE
    const enemy = 5
    const drain = 10
    loop(enemy, addEnemy, level / enemy, true)
    loop(drain, addDrain, level / drain, true)
  })

  // 1-3
  wait(MINUTE, () => {
    gameState.enemyDamageMultiplier = 1.5
    gameState.enemyHealthMultiplier = 1.5
    gameState.enemySpeedMultiplier = 1.5

    const level = 3 * MINUTE
    const enemy = 3
    const drain = 15
    loop(enemy, addEnemy, level / enemy, true)
    loop(drain, addDrain, level / drain, true)
  })

  // 3-∞
  wait(3 * MINUTE, () => {
    gameState.enemyDamageMultiplier = 2
    gameState.enemyHealthMultiplier = 2
    gameState.enemySpeedMultiplier = 2

    loop(1, addEnemy, undefined, true)
    loop(20, addDrain, undefined, true)
  })
})
