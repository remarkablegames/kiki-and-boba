interface Props {
  width: number
  height: number
  x: number
  y: number
  text: string
  fontSize?: number
}

export function addText(props: Props) {
  const box = add([
    rect(props.width, props.height),
    pos(props.x, props.y),
    anchor('center'),
    color(255, 255, 255),
  ])

  return box.add([
    text(props.text, { size: props.fontSize }),
    anchor('center'),
    color(0, 0, 0),
  ])
}
