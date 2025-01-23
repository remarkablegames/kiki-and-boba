import { Music, Scene, Sound, Sprite } from '../constants'

scene(Scene.Preload, () => {
  const sprites = [
    [Sprite.Bean, 'sprites/bean.png'],
    [Sprite.Bubbie, 'sprites/bubbie.png'],
    [Sprite.Gooba, 'sprites/gooba.png'],
    [Sprite.Pokey, 'sprites/pokey.png'],
    [Sprite.Shellie, 'sprites/shellie.png'],
    [Sprite.Spiny, 'sprites/spiny.png'],
  ]

  sprites.forEach(([name, src]) => {
    loadSprite(name, src)
  })

  const sounds = [[Sound.Shoot, 'sounds/shoot.mp3']]

  sounds.forEach(([name, src]) => {
    loadSound(name, src)
  })

  const music = [[Music.Background, 'music/background.mp3']]

  music.forEach(([name, src]) => {
    loadMusic(name, src)
  })

  go(Scene.Game)
})
