import { Scene, Sound, Sprite, Tag } from '../constants'
import { addAttack, addCursorKeys } from '../events'
import { stopMusic } from '../gameobjects'
import type { Player } from '../types'

const HEALTH = 100

export function addPlayer(x = center().x, y = center().y) {
  const player = add([
    sprite(Sprite.Bean),
    pos(x, y),
    rotate(0),
    anchor('center'),
    area(),
    body(),
    health(HEALTH, HEALTH),
    Tag.Player,
  ])

  addCursorKeys(player)
  addAttack(player)

  player.onUpdate(() => {
    setCamPos(player.worldPos()!)
  })

  player.onHurt(() => {
    play(Sound.Hit)

    if (player.hp() <= 0) {
      stopMusic()
      play(Sound.Whoosh)
      go(Scene.Lose)
    }
  })

  return player
}

export function getPlayer() {
  return get(Tag.Player)[0] as Player | undefined
}
