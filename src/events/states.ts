import { Animation, Sprite, State } from '../constants'
import { addBadBubble, addProjectile, getPlayer } from '../gameobjects'
import type { Enemy } from '../types'

export function addEnemyState(enemy: Enemy) {
  enemy.onStateEnter(State.Idle, async () => {
    enemy.play(Animation.Idle)
    await wait(rand(0.3, 1))
    enemy.enterState(State.Move)
  })

  enemy.onStateEnter(State.Move, () => {
    enemy.play(Animation.Move)
  })

  enemy.onStateEnter(State.Attack, async () => {
    const player = getPlayer()

    if (!player?.exists()) {
      return
    }

    enemy.play(Animation.Attack)

    switch (enemy.sprite) {
      case Sprite.Bubbie:
        addBadBubble(enemy)
        break

      case Sprite.Pokey:
        addProjectile(enemy)
        break
    }

    await wait(0.2)
    enemy.enterState(State.Cooldown)
  })

  enemy.onStateEnter(State.Cooldown, async () => {
    enemy.play(Animation.Cooldown)
    await wait(rand(1, 3))
    enemy.enterState(State.Move)
  })

  enemy.onStateEnter(State.Stunned, async () => {
    enemy.play(Animation.Stunned)
    await wait(rand(0.3, 1))
    enemy.enterState(State.Move)
  })

  enemy.onStateUpdate(State.Move, () => {
    const player = getPlayer()

    if (!player?.exists()) {
      return
    }

    if (
      [Sprite.Bubbie, Sprite.Pokey].includes(enemy.sprite as Sprite) &&
      Number(rand()) < 0.005
    ) {
      return enemy.enterState(State.Attack)
    }

    const direction = player.pos.sub(enemy.pos).unit()
    enemy.move(direction.scale(enemy.speed))
  })
}
