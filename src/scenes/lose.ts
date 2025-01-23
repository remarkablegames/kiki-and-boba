import { Scene } from '../constants'

scene(Scene.Lose, () => {
  const { x, y } = center()
  const margin = 100

  add([text('Game Over', { size: 48 }), pos(x, y - margin), anchor('center')])

  const button = add([
    rect(220, 80, { radius: 8 }),
    pos(x, y + margin),
    area(),
    scale(1),
    anchor('center'),
    outline(4),
    color(255, 255, 255),
  ])

  button.add([text('Restart'), anchor('center'), color(0, 0, 0)])

  button.onHover(() => {
    button.scaleTo(1.1)
  })

  button.onHoverEnd(() => {
    button.scaleTo(1)
  })

  button.onClick(() => {
    go(Scene.Game)
  })
})
