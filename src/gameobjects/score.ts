import { Layer } from '../constants'
import { gameState } from '../helpers'
import type { Score } from '../types'
import { addReward } from '.'

let score: Score

export function addScore() {
  const textbox = add([
    rect(70, 70),
    pos(50, 50),
    anchor('center'),
    color(255, 255, 255),
    fixed(),
    z(Layer.Foreground),
  ])

  const score = textbox.add([
    text('0', { size: 48 }),
    anchor('center'),
    color(0, 0, 0),
  ])

  setScore(score)

  return score
}

function setScore(currentScore: Score) {
  score = currentScore
}

export function getScore() {
  return score
}

export function incrementScore(value = 1) {
  const newScore = parseInt(score.text, 10) + value
  score.text = newScore.toString()

  if (newScore === gameState.reward.score) {
    gameState.reward.increment += 1
    gameState.reward.score += gameState.reward.increment
    addReward()
  }
}
