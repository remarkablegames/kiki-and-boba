import { Tag } from '../constants'
import { ghosty } from '../sprites'
import type { Player } from './player'

const ENEMY_SPEED = 200

export function addEnemy(x: number, y: number, player: Player) {
  const enemy = add([ghosty, pos(x, y), anchor('center'), Tag.enemy])

  enemy.onUpdate(() => {
    const dir = player.pos.sub(enemy.pos).unit()
    enemy.move(dir.scale(ENEMY_SPEED))
  })

  return enemy
}
