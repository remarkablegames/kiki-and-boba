import { coinflip } from './chance'

/**
 * Generate random coordinates outside the camera view.
 */
export function outsideCoordinates(x: number, y: number) {
  const halfWidth = width() / 2
  const halfHeight = height() / 2
  const multiplier = coinflip() ? 1 : -1
  return {
    x: x + halfWidth * multiplier,
    y: y + halfHeight * multiplier,
  }
}
