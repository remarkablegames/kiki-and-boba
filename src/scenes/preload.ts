import { Animation, Music, Scene, Sound, Sprite } from '../constants'

scene(Scene.Preload, () => {
  loadSprite(Sprite.Shellie, 'sprites/shellie.png', {
    sliceX: 4,
    anims: {
      [Animation.Attack]: 1,
      [Animation.Cooldown]: 2,
      [Animation.Idle]: 0,
      [Animation.Stunned]: 3,
    },
  })

  loadSprite(Sprite.Pokey, 'sprites/pokey.png', {
    sliceX: 5,
    anims: {
      [Animation.Attack]: {
        from: 0,
        to: 1,
        loop: true,
        speed: 1,
      },
      [Animation.Cooldown]: 2,
      [Animation.Idle]: 3,
      [Animation.Stunned]: 4,
    },
  })

  const sprites = [
    [Sprite.Bean, 'sprites/bean.png'],
    [Sprite.Bubbie, 'sprites/bubbie.png'],
    [Sprite.Gooba, 'sprites/gooba.png'],
    [Sprite.Projectile, 'sprites/projectile.png'],
    [Sprite.Spiny, 'sprites/spiny.png'],
  ]

  sprites.forEach(([name, src]) => {
    loadSprite(name, src)
  })

  const sounds = [
    [Sound.Explode, 'sounds/explode.mp3'],
    [Sound.Hit, 'sounds/hit.mp3'],
    [Sound.Shoot, 'sounds/shoot.mp3'],
    [Sound.Whoosh, 'sounds/whoosh.mp3'],
  ]

  sounds.forEach(([name, src]) => {
    loadSound(name, src)
  })

  const music = [[Music.Background, 'music/background.mp3']]

  music.forEach(([name, src]) => {
    loadMusic(name, src)
  })

  go(Scene.Title)
})
