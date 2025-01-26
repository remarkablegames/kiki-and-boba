import { Sound } from '../constants'
import { addBubble } from '../gameobjects'
import { Time } from '../helpers'
import type { Player } from '../types'

export function addAttack(player: Player) {
  const time = new Time()

  onClick(() => {
    if (time.passedDelay()) {
      play(Sound.Hit, { detune: rand(-100, 100) })
      addBubble(player)
      time.setUpdatedAt()
    }
  })
}
