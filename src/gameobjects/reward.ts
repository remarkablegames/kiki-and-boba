import { addButton, addModal, addText, game, getPlayer } from '.'

const rewards = [
  {
    text: 'Heal 20% HP',
    action() {
      const player = getPlayer()!
      player.heal(player.maxHP()! * 0.2)
    },
  },

  {
    text: 'Max HP +10%',
    action() {
      const player = getPlayer()!
      const maxHP = player.maxHP()!
      const hpIncrease = maxHP * 0.1
      player.setMaxHP(maxHP + hpIncrease)
      player.heal(hpIncrease)
    },
  },

  {
    text: 'Player Speed +10%',
    action() {
      const player = getPlayer()!
      player.speed *= 1.1
    },
  },

  {
    text: 'Fire Rate +10%',
    action() {
      const player = getPlayer()!
      player.attack.delay *= 0.9
    },
  },

  {
    text: 'Bubble Damage +10%',
    action() {
      const player = getPlayer()!
      player.attack.bubbleDamage *= 1.1
    },
  },

  {
    text: 'Bubble Speed +10%',
    action() {
      const player = getPlayer()!
      player.attack.bubbleSpeed *= 1.1
    },
  },
]

export function addReward() {
  game.reward = true
  game.paused = true

  const modal = addModal()
  const container = modal.add([pos(center())])

  addText({
    width: 550,
    height: 80,
    x: 0,
    y: -120,
    text: 'Choose a reward',
    fontSize: 48,
    parent: container,
  })

  getRewards().forEach((reward, index) => {
    addButton({
      width: reward.text.length * 25,
      height: 80,
      radius: 8,
      x: 0,
      y: index * 100,
      text: reward.text,
      onClick() {
        reward.action()
        modal.destroy()
        game.reward = false
        game.paused = false
      },
      parent: container,
    })
  })

  tween(
    container.pos,
    center(),
    1,
    (position) => (container.pos = position),
    easings.easeOutElastic,
  )
}

function getRewards(total = 2) {
  const result = []
  const copy = rewards.slice()

  for (let i = 0; i < total; i++) {
    result.push(copy.splice(randi(copy.length), 1)[0])
  }

  return result
}
