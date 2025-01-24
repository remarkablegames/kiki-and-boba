import { Sound, Sprite, State, Tag } from '../constants'
import { addEnemyState } from '../events'
import { getPlayer } from './player'
import { incrementScore } from './score'

enum Health {
  Min = 20,
  Max = 100,
}

export function addEnemy(x: number, y: number) {
  const sprites = [
    Sprite.Bubbie,
    Sprite.Gooba,
    Sprite.Pokey,
    Sprite.Shellie,
    Sprite.Spiny,
  ]

  const speed = rand(100, 300)
  const damage = rand(1, 10)
  const hp = randi(Health.Min, Health.Max)

  const enemy = add([
    sprite(sprites[randi(sprites.length)]),
    pos(x, y),
    anchor('center'),
    health(hp, hp),
    area(),
    body(),
    scale(0.75),
    state(State.Move, Object.values(State)),
    Tag.Enemy,
    { damage, speed },
  ])

  addEnemyState(enemy)

  enemy.onCollide(Tag.Player, async () => {
    enemy.enterState(State.Attack)
    getPlayer()?.hurt(enemy.damage)
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
