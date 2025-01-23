import { Sprite, Tag } from '../constants'
import type { Player } from '../types'

enum Health {
  Min = 20,
  Max = 100,
}

export function addEnemy(x: number, y: number, player: Player) {
  const sprites = [Sprite.Bubbie, Sprite.Pokey]
  const speed = rand(100, 300)
  const damage = rand(1, 10)
  const hp = randi(Health.Min, Health.Max)

  const enemy = add([
    sprite(sprites[randi(sprites.length)]),
    pos(x, y),
    anchor('center'),
    health(hp, hp),
    opacity(1),
    area(),
    scale(0.75),
    Tag.Enemy,
    { damage, speed },
  ])

  enemy.onUpdate(() => {
    const direction = player.pos.sub(enemy.pos).unit()
    enemy.move(direction.scale(enemy.speed))
  })

  enemy.onHurt(() => {
    enemy.opacity = enemy.hp() / enemy.maxHP()!
  })

  enemy.onDeath(() => {
    enemy.destroy()
    addKaboom(enemy.pos)
  })

  return enemy
}
