import './game'
import './lose'
import './preload'
import './title'

import { Scene } from '../constants'

setBackground(254, 197, 229)

export function start() {
  go(Scene.Preload)
}
