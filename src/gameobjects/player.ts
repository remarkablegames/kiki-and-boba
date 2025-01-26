import { Expression, Scene, Sound, Sprite, Tag } from '../constants'
import { addAttack, addCursorKeys } from '../events'
import { getChildBubble, stopMusic } from '../gameobjects'
import type { Player } from '../types'

const HEALTH = 100

export function addPlayer(x = center().x, y = center().y) {
  const player = add([
    sprite(Sprite.Kiki),
    pos(x, y),
    anchor('center'),
    area({ scale: 0.7 }),
    body(),
    scale(0.75),
    health(HEALTH, HEALTH),
    Tag.Player,
    { bubble: false },
  ])

  addCursorKeys(player)
  addAttack(player)

  player.onUpdate(() => {
    setCamPos(player.worldPos()!)
    player.flipX = !(mousePos().x > player.screenPos()!.x)
  })

  player.onCollide(Tag.Enemy, onHit(player))

  player.onCollide(Tag.Projectile, onHit(player))

  player.onDeath(() => {
    const deadPlayer = add([
      sprite(Sprite.Kiki),
      pos(player.pos),
      anchor('center'),
      scale(0.75),
      lifespan(1, { fade: 1 }),
      opacity(1),
    ])

    deadPlayer.play(Expression.Dead)
    player.destroy()

    wait(3, () => {
      stopMusic()
      play(Sound.Whoosh)
      go(Scene.Lose)
    })
  })

  return player
}

export function getPlayer() {
  return get(Tag.Player)[0] as Player | undefined
}

function onHit(player: Player) {
  return () => {
    play(Sound.Hit, { detune: rand(-100, 100) })

    if (player.bubble) {
      getChildBubble(player)?.destroy()
      player.bubble = false
    }

    if (player.hp() < player.maxHP()! / 4) {
      player.play(Expression.Pissed)
    } else {
      player.play(Expression.Hit)
    }

    wait(1, () => {
      player.play(Expression.Normal)
    })
  }
}
