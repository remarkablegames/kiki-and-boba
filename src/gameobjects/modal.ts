interface Options {
  hidden?: boolean
}

export function addModal(options?: Options) {
  const modal = add([
    rect(width(), height()),
    color(0, 0, 0),
    opacity(0.5),
    fixed(),
  ])

  if (typeof options?.hidden === 'boolean') {
    modal.hidden = options.hidden
  }

  return modal
}
