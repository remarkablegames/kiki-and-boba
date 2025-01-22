import { Sprite, Tag } from '../constants'
import type { Player } from '../types'

export function addEnemy(x: number, y: number, player: Player) {
  const speed = rand(100, 300)
  const sprites = [Sprite.Bubbie, Sprite.Pokey]

  const enemy = add([
    sprite(sprites[randi(sprites.length)]),
    pos(x, y),
    anchor('center'),
    health(randi(20, 100)),
    opacity(1),
    area(),
    Tag.Enemy,
    { speed },
  ])

  enemy.onUpdate(() => {
    const direction = player.pos.sub(enemy.pos).unit()
    enemy.move(direction.scale(enemy.speed))
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
