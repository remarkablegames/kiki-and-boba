import { Sound, Sprite, State, Tag } from '../constants'
import { addEnemyState } from '../events'
import { outsideCoordinates } from '../helpers'
import { getPlayer } from './player'
import { incrementScore } from './score'

enum Damage {
  Min = 1,
  Max = 10,
}

enum Health {
  Min = 20,
  Max = 100,
}

enum Speed {
  Min = 100,
  Max = 300,
}

export function addEnemy() {
  const sprites = [
    Sprite.Bubbie,
    Sprite.Gooba,
    Sprite.Pokey,
    Sprite.Shellie,
    Sprite.Spiny,
  ]

  const speed = rand(Speed.Min, Speed.Max)
  const damage = rand(Damage.Min, Damage.Max)
  const hp = randi(Health.Min, Health.Max)

  const enemy = add([
    sprite(sprites[randi(sprites.length)]),
    pos(outsideCoordinates()),
    anchor('center'),
    health(hp, hp),
    area(),
    body(),
    scale(0.75),
    state(State.Move, Object.values(State)),
    Tag.Enemy,
    { bubble: false, damage, speed },
  ])

  addEnemyState(enemy)

  enemy.onCollide(Tag.Player, () => {
    if (enemy.bubble) {
      enemy.get(Tag.Bubbled)[0].destroy()
      enemy.bubble = false
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
