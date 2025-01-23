import { Scene, Sprite } from '../constants'

scene(Scene.Preload, () => {
  ;[
    [Sprite.Bean, 'sprites/bean.png'],
    [Sprite.Bubbie, 'sprites/bubbie.png'],
    [Sprite.Gooba, 'sprites/gooba.png'],
    [Sprite.Pokey, 'sprites/pokey.png'],
    [Sprite.Shellie, 'sprites/shellie.png'],
    [Sprite.Spiny, 'sprites/spiny.png'],
  ].forEach(([name, src]) => {
    loadSprite(name, src)
  })

  go(Scene.Game)
})
