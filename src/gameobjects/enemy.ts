import { Tag } from '../constants'
import { ghosty } from '../sprites'

const ENEMY_SPEED = 200

export function addEnemy(x: number, y: number) {
  const enemy = add([ghosty, pos(x, y), anchor('center')])

  enemy.onUpdate(() => {
    const player = get(Tag.player)[0]

    if (!player) {
      return
    }

    const dir = player.pos.sub(enemy.pos).unit()
    enemy.move(dir.scale(ENEMY_SPEED))
  })

  return enemy
}
