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
    opacity(1),
    area(),
    body(),
    scale(0.75),
    state(State.Attack, Object.values(State)),
    Tag.Enemy,
    { damage, speed },
  ])

  enemy.onStateEnter(State.Idle, async () => {
    try {
      enemy.play(State.Idle)
    } catch (error) {} // eslint-disable-line
    await wait(rand(0, 1))
    enemy.enterState(State.Attack)
  })

  enemy.onStateEnter(State.Stunned, async () => {
    try {
      enemy.play(State.Stunned)
    } catch (error) {} // eslint-disable-line
    await wait(rand(0, 1))
    enemy.enterState(State.Attack)
  })

  enemy.onStateEnter(State.Cooldown, async () => {
    try {
      enemy.play(State.Cooldown)
    } catch (error) {} // eslint-disable-line
    await wait(rand(1, 3))
    enemy.enterState(State.Attack)
  })

  enemy.onStateEnter(State.Attack, async () => {
    try {
      enemy.play(State.Attack)
    } catch (error) {} // eslint-disable-line
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
    try {
      enemy.play(State.Stunned)
    } catch (error) {} // eslint-disable-line
    enemy.opacity = enemy.hp() / enemy.maxHP()!
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
