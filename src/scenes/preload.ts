import { Scene, Sprite } from '../constants'

scene(Scene.preload, () => {
  loadSprite(Sprite.bean, 'sprites/bean.png')
  loadSprite(Sprite.ghosty, 'sprites/ghosty.png')
  go(Scene.game)
})
