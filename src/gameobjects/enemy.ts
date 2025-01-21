import { Sprite, Tag } from '../constants'
import type { Player } from '../types'

const ENEMY_SPEED = 200

export function addEnemy(x: number, y: number, player: Player) {
  const enemy = add([
    sprite(Sprite.ghosty),
    pos(x, y),
    anchor('center'),
    health(100),
    opacity(1),
    area(),
    Tag.enemy,
  ])

  enemy.onUpdate(() => {
    const dir = player.pos.sub(enemy.pos).unit()
    enemy.move(dir.scale(ENEMY_SPEED))
  })

  enemy.onHurt(() => {
    enemy.opacity = enemy.hp() / 100
  })

  enemy.onDeath(() => {
    enemy.destroy()
    addKaboom(enemy.pos)
  })

  return enemy
}
