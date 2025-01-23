import { Sound, Sprite, Tag } from '../constants'
import type { Player } from '../types'

enum Health {
  Min = 20,
  Max = 100,
}

enum State {
  Idle = 'Idle',
  Move = 'Move',
}

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
    state(State.Move, Object.values(State)),
    Tag.Enemy,
    { damage, speed },
  ])

  enemy.onStateEnter(State.Idle, async () => {
    await wait(rand(1, 3))
    enemy.enterState(State.Move)
  })

  enemy.onStateUpdate(State.Move, () => {
    if (!player.exists()) {
      return
    }
    const direction = player.pos.sub(enemy.pos).unit()
    enemy.move(direction.scale(enemy.speed))
  })

  enemy.onCollide(Tag.Player, () => {
    enemy.enterState(State.Idle)
    player.hurt(enemy.damage)
  })

  enemy.onHurt(() => {
    enemy.opacity = enemy.hp() / enemy.maxHP()!
  })

  enemy.onDeath(() => {
    play(Sound.Explode, { volume: 0.2 })
    enemy.destroy()
    addKaboom(enemy.pos)
  })

  return enemy
}
