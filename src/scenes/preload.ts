import { Scene, Sprite } from '../constants'

scene(Scene.Preload, () => {
  ;[
    [Sprite.Bean, 'sprites/bean.png'],
    [Sprite.Bubbie, 'sprites/bubbie.png'],
    [Sprite.Ghosty, 'sprites/ghosty.png'],
    [Sprite.Pokey, 'sprites/pokey.png'],
  ].forEach(([name, src]) => {
    loadSprite(name, src)
  })

  go(Scene.Game)
})
