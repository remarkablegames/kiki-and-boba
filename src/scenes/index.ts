import './game'
import './lose'
import './preload'

import { Scene } from '../constants'

export function start() {
  go(Scene.Preload)
}
