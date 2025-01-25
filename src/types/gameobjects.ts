import { addBubble, addEnemy, addPlayer } from '../gameobjects'

export type Bubble = ReturnType<typeof addBubble>
export type Enemy = ReturnType<typeof addEnemy>
export type Player = ReturnType<typeof addPlayer>
