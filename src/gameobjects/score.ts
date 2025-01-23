type Score = ReturnType<typeof addScore>

let score: Score

export function addScore() {
  const textbox = add([
    rect(70, 70),
    pos(50, 50),
    anchor('center'),
    color(255, 255, 255),
    layer('ui'),
    fixed(),
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

export function incrementScore(amount = 1) {
  score.text = String(parseInt(score.text, 10) + amount)
}
