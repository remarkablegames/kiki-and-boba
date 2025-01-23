import { Scene, Sound } from '../constants'

scene(Scene.Title, () => {
  const { x, y } = center()
  const margin = 100

  const textbox = add([
    rect(400, 100),
    pos(x, y - margin),
    anchor('center'),
    color(255, 255, 255),
  ])

  textbox.add([
    text('Kiki & Boba', { size: 48 }),
    anchor('center'),
    color(0, 0, 0),
  ])

  const button = add([
    rect(220, 80, { radius: 8 }),
    pos(x, y + margin),
    area(),
    scale(1),
    anchor('center'),
    outline(4),
    color(255, 255, 255),
  ])

  button.add([text('Play'), anchor('center'), color(0, 0, 0)])

  button.onHover(() => {
    button.scaleTo(1.1)
  })

  button.onHoverEnd(() => {
    button.scaleTo(1)
  })

  button.onClick(() => {
    play(Sound.Hit)
    go(Scene.Game)
  })
})
