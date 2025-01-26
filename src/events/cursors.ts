import type { Player } from '../types'

export function addCursorKeys(player: Player) {
  onKeyDown((key) => {
    switch (key) {
      case 'left':
      case 'a':
        player.move(-player.speed, 0)
        break

      case 'right':
      case 'd':
        player.move(player.speed, 0)
        break

      case 'up':
      case 'w':
        player.move(0, -player.speed)
        break

      case 'down':
      case 's':
        player.move(0, player.speed)
        break
    }
  })
}
