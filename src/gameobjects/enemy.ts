import { Animation, Sound, Sprite, Tag } from '../constants'
import type { Player } from '../types'
import { addProjectile } from './projectile'
import { incrementScore } from './score'

enum Health {
  Min = 20,
  Max = 100,
}

const State = Animation

export function addEnemy(x: number, y: number, player: Player) {
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
    state(State.Attack, Object.values(State)),
    Tag.Enemy,
    { damage, speed },
  ])

  enemy.onStateEnter(State.Idle, async () => {
    enemy.play(State.Idle)
    await wait(rand(0, 1))
    enemy.enterState(State.Attack)
  })

  enemy.onStateEnter(State.Stunned, async () => {
    enemy.play(State.Stunned)
    await wait(rand(0, 1))
    enemy.enterState(State.Attack)
  })

  enemy.onStateEnter(State.Cooldown, async () => {
    enemy.play(State.Cooldown)
    await wait(rand(1, 3))
    enemy.enterState(State.Attack)
  })

  enemy.onStateEnter(State.Attack, async () => {
    enemy.play(State.Attack)
    if (enemy.sprite === Sprite.Pokey) {
      addProjectile(enemy, player)
    }
  })

  enemy.onStateUpdate(State.Attack, async () => {
    if (!player.exists()) {
      return
    }

    if (enemy.sprite === Sprite.Pokey && Number(rand()) < 0.005) {
      return enemy.enterState(State.Idle)
    }

    const direction = player.pos.sub(enemy.pos).unit()
    enemy.move(direction.scale(enemy.speed))
  })

  enemy.onCollide(Tag.Player, async () => {
    enemy.enterState(State.Cooldown)
    player.hurt(enemy.damage)
  })

  enemy.onHurt(() => {
    enemy.enterState(State.Stunned)
    enemy.play(State.Stunned)
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
