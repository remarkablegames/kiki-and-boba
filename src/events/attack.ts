import { Sound } from '../constants'
import { addBubble } from '../gameobjects'
import type { Player } from '../types'

export function addAttack(player: Player) {
  const attack = new Attack(player)

  onClick(() => {
    if (attack.canAttack()) {
      attack.update()
      play(Sound.Shoot, { detune: rand(-100, 100) })
      addBubble(player)
    }
  })
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
