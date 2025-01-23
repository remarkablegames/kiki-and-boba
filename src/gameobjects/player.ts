import { Sprite, Tag } from '../constants'
import { addAttack, addCursorKeys } from '../events'
import type { Enemy } from '../types'

const HEALTH = 100

export function addPlayer(x = center().x, y = center().y) {
  const player = add([
    sprite(Sprite.Bean),
    pos(x, y),
    rotate(0),
    anchor('center'),
    area(),
    health(HEALTH, HEALTH),
    Tag.Player,
  ])

  addCursorKeys(player)
  addAttack(player)

  player.onCollide(Tag.Enemy, (enemy) => {
    const currentEnemy = enemy as Enemy
    player.hurt(currentEnemy.damage)
  })

  return player
}
