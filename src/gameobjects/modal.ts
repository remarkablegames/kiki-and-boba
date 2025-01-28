export function addModal({ hidden = false }) {
  const modal = add([
    rect(width(), height()),
    color(0, 0, 0),
    opacity(0.5),
    fixed(),
  ])

  modal.hidden = hidden

  return modal
}
