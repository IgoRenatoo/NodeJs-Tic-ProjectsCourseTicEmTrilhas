import { User } from './db-models'
import { UserData } from './type-models'

export async function createUser (userData: UserData) {
  try {
    if (await User.findOne({ where:{ name: userData.name } })) {
      return { code: 409, message: 'Erro: Usuário com nome já cadastrado!' }
    }
    await User.create(userData)
    return { code: 201, message: 'Usuário cadastrado com sucesso!' }
  } catch (error) {
    console.error('Erro ao criar produto:', error)
    return { code: 400, message: 'Error ao cadastrar usuário!' }
  }
}
