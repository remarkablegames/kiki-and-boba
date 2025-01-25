import { Sound } from '../constants'
import { addBubble } from '../gameobjects'
import type { Player } from '../types'

export function addAttack(player: Player) {
  const attack = new Attack()

  onClick(() => {
    if (attack.canAttack()) {
      play(Sound.Hit, { detune: rand(-100, 100) })
      addBubble(player)
      attack.update()
    }
  })
}

class Attack {
  private attackDelay
  private lastAttacked

  constructor(attackDelay = 1, lastAttacked = 0) {
    this.attackDelay = attackDelay
    this.lastAttacked = lastAttacked
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
