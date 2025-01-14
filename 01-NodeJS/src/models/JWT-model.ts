import JWT from 'jsonwebtoken'
import { UserData } from '../types/type-models'

export const generatorToken = (userData: UserData) => {
  const dateNow: string = new Date(new Date().getTime() + 2 * 60 * 60 * 1000).toLocaleString() // Padrão 01/01/2025, 00:00:00
  return {
    hash: JWT.sign(
      { id: userData.id, nickname: userData.nickname },
      process.env.SECRET_KEY as string,
      { expiresIn: 120 } // 120s
    ),
    expired: dateNow
  }
}
