import { Sound } from '../constants'
import { addBubble, game } from '../gameobjects'
import { Time } from '../helpers'
import type { Player } from '../types'

export function addAttack(player: Player) {
  const time = new Time()

  onClick(() => {
    if (game.paused || !time.passedDelay()) {
      return
    }

    play(Sound.Hit, { detune: rand(-100, 100) })
    addBubble(player)
    time.setUpdatedAt()
  })
}
