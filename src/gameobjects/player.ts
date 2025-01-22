import { Sprite, Tag } from '../constants'
import { addCursorKeys } from '../events'
import type { Player } from '../types'
import { addBullet } from './bullet'

export function addPlayer(x = center().x, y = center().y) {
  const player = add([
    sprite(Sprite.Bean),
    pos(x, y),
    rotate(0),
    anchor('center'),
    area(),
    Tag.Player,
  ])

  player.onUpdate(() => {
    setCamPos(player.worldPos()!)
  })

  addCursorKeys(player)

  const attack = new Attack(player)

  onClick(() => {
    if (attack.canAttack()) {
      attack.update()
      addBullet(player)
    }
  })

  return player
}

class Attack {
  private attackDelay = 1
  private lastAttacked = 0
  private player

  constructor(player: Player) {
    this.player = player
  }

  update() {
    this.lastAttacked = time()
  }

  canAttack() {
    return !this.lastAttacked
      ? true
      : this.lastAttacked + this.attackDelay < time()
  }
}
