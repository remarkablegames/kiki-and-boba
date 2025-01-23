import type { AudioPlay } from 'kaplay'

import { Music } from '../constants'

let music: AudioPlay

export function playMusic() {
  if (!music) {
    music = play(Music.Background, {
      loop: true,
      paused: true,
    })
    music.volume = 0.5
  }
  music.play()
}

export function stopMusic() {
  music.stop()
}
