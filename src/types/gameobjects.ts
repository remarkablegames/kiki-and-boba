import { addBullet, addEnemy, addPlayer } from '../gameobjects'

export type Bullet = ReturnType<typeof addBullet>
export type Enemy = ReturnType<typeof addEnemy>
export type Player = ReturnType<typeof addPlayer>
