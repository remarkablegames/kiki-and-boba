import type { Player } from '../types'

// pixels per second
const SPEED = 320

export function addCursorKeys(player: Player) {
  onKeyDown((key) => {
    switch (key) {
      case 'left':
      case 'a':
        player.move(-SPEED, 0)
        setCameraPosition(player)
        break

      case 'right':
      case 'd':
        player.move(SPEED, 0)
        setCameraPosition(player)
        break

      case 'up':
      case 'w':
        player.move(0, -SPEED)
        setCameraPosition(player)
        break

      case 'down':
      case 's':
        player.move(0, SPEED)
        setCameraPosition(player)
        break
    }
  })
}

function setCameraPosition(player: Player) {
  setCamPos(player.worldPos()!)
}
