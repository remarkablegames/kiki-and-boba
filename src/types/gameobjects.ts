import { addBubble, addEnemy, addPlayer, addScore } from '../gameobjects'

export type Bubble = ReturnType<typeof addBubble>
export type Enemy = ReturnType<typeof addEnemy>
export type Player = ReturnType<typeof addPlayer>
export type Score = ReturnType<typeof addScore>
