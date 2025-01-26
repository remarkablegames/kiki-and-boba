import { Sound, Sprite, State, Tag } from '../constants'
import { addEnemyState } from '../events'
import { multiplier, outsideCoordinates } from '../helpers'
import { getChildBubble, getPlayer } from '.'
import { incrementScore } from './score'

export function addEnemy() {
  const sprites = [
    Sprite.Bubbie,
    Sprite.Gooba,
    Sprite.Shellie,
    Sprite.Spiny,
    Sprite.Pokey,
  ]

  const speed = randi(100, 300) * multiplier.value
  const damage = randi(1, 10) * multiplier.value
  const hp = randi(20, 100) * multiplier.value

  const enemy = add([
    sprite(sprites[randi(sprites.length)]),
    pos(outsideCoordinates()),
    anchor('center'),
    health(hp, hp),
    area({ scale: 0.7 }),
    body(),
    scale(0.75),
    state(State.Move, Object.values(State)),
    Tag.Enemy,
    { bubble: 0, damage, speed },
  ])

  if (enemy.sprite === Sprite.Gooba) {
    play(Sound.Splash)
  }

  addEnemyState(enemy)

  enemy.onCollide(Tag.Player, () => {
    if (enemy.bubble) {
      getChildBubble(enemy)?.destroy()
      enemy.bubble = 0
      return
    }

    enemy.enterState(State.Attack)
    getPlayer()?.hurt(enemy.damage)
  })

  enemy.onCollideUpdate(Tag.Player, () => {
    if (enemy.bubble) {
      return
    }

    getPlayer()?.hurt(enemy.damage / 1000)
  })

  enemy.onHurt(() => {
    enemy.enterState(State.Stunned)
  })

  enemy.onDeath(() => {
    enemy.enterState(State.Stunned)
    incrementScore()
    play(Sound.Explode, { volume: 0.2 })
    enemy.destroy()
    addKaboom(enemy.pos)
  })

  return enemy
}
