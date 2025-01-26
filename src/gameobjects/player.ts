import { Scene, Sound, Sprite, Tag } from '../constants'
import { addAttack, addCursorKeys } from '../events'
import { stopMusic } from '../gameobjects'
import type { Player } from '../types'

const HEALTH = 100

export function addPlayer(x = center().x, y = center().y) {
  const player = add([
    sprite(Sprite.Kiki),
    pos(x, y),
    rotate(0),
    anchor('center'),
    area({ scale: 0.7 }),
    body(),
    scale(0.75),
    health(HEALTH, HEALTH),
    Tag.Player,
  ])

  addCursorKeys(player)
  addAttack(player)

  player.onUpdate(() => {
    setCamPos(player.worldPos()!)
    player.flipX = !(mousePos().x > player.screenPos()!.x)
  })

  player.onCollide(Tag.Enemy, () => {
    play(Sound.Pop, { detune: rand(-100, 100) })
  })

  player.onCollide(Tag.Projectile, () => {
    play(Sound.Pop, { detune: rand(-100, 100) })
  })

  player.onDeath(() => {
    stopMusic()
    play(Sound.Whoosh)
    go(Scene.Lose)
  })

  return player
}

export function getPlayer() {
  return get(Tag.Player)[0] as Player | undefined
}
