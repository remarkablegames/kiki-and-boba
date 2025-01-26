import { Tag } from '../constants'
import { insideCoordinates } from '../helpers'
import type { Enemy } from '../types'

enum Lifespan {
  Min = 5,
  Max = 15,
}

export function addDrain() {
  const drain = add([
    circle(rand(20, 40)),
    color(0, 0, 0),
    pos(insideCoordinates()),
    area(),
    body({ isStatic: true }),
    anchor('center'),
    lifespan(rand(Lifespan.Min, Lifespan.Max), { fade: 0.5 }),
    opacity(1),
    Tag.Drain,
  ])

  drain.onCollide(Tag.Enemy, (enemy) => {
    const currentEnemy = enemy as Enemy
    if (currentEnemy.bubble) {
      currentEnemy.hurt(9999)
    }
  })

  return drain
}
