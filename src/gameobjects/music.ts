import type { AudioPlay } from 'kaplay'

import { Music } from '../constants'

let music: AudioPlay

export function playMusic() {
  if (music) {
    return music.play()
  }

  const currentMusic = play(Music.Background, {
    loop: true,
    paused: true,
  })

  currentMusic.volume = 0.5
  setMusic(currentMusic)
  playMusic()
}

function setMusic(currentMusic: AudioPlay) {
  music = currentMusic
}

export function stopMusic() {
  music?.stop()
}
