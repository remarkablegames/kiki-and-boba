import { Tag } from '../constants'
import { insideCoordinates } from '../helpers'
import type { Enemy } from '../types'

enum Lifespan {
  Min = 5,
  Max = 15,
}

export function addHole() {
  const hole = add([
    circle(rand(20, 40)),
    color(0, 0, 0),
    pos(insideCoordinates()),
    area(),
    body({ isStatic: true }),
    anchor('center'),
    lifespan(rand(Lifespan.Min, Lifespan.Max), { fade: 0.5 }),
    opacity(1),
    Tag.Hole,
  ])

  hole.onCollide(Tag.Enemy, (enemy) => {
    const currentEnemy = enemy as Enemy
    if (currentEnemy.get(Tag.EnemyBubble).length) {
      currentEnemy.hurt(100)
    }
  })

  return hole
}
