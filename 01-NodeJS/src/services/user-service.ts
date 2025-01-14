import { UserData, Result } from '../types/type-models'
import { User } from '../models/database-model'
import { generatorToken } from '../models/JWT-model'

// Realiza login
export async function logInUser(userData: UserData): Promise<Result> {
  try {
    const user: any = await User.findOne({ where: { nickname: userData.nickname, password: userData.password } })
    if (user) {
      const token = generatorToken(userData)
      return {
        code: 200, message: 'Usuário logado com sucesso!',
        content: { user: user.nickname, expired: `Expira em ${token.expired}`,token: token.hash } }
    } else {
      return { code: 403, message: 'Erro: Usuário ou senha inválidos!', content: false }
    }
  } catch (error) {
    console.error(`\nErro ao realizar login: ${error}`)
    return { code: 500, message: 'Erro: Servidor indisponível. Tente novamente mais tarde!' }
  }
}

// Cria novo usuário
export async function createUser(userData: UserData): Promise<Result> {
  try {
    const hasUser = await User.findOne({ where: { nickname: userData.nickname } })
    if (!hasUser) {
      const token = generatorToken(userData)
      userData.token = token.hash
      const user = await User.create(userData)
      return { code: 201, message: 'Usuário criado com sucesso!', content: user }
    } else {
      return { code: 409, message: 'Erro: Nickname já cadastrado!' }
    }
  } catch (error) {
    console.error(`\nErro ao criar usuário: ${error}`)
    return { code: 500, message: 'Erro: Servidor indisponível. Tente novamente mais tarde!' }
  }
}

// Busca usuário por ID
export async function getUser(userID: number): Promise<Result> {
  try {
    if (isNaN(userID)) {
      return { code: 400, message: `Erro: O ID informado não é um número: ${userID}` }
    }
    if (!await User.findOne({ where: { id: userID } })) {
      return { code: 409, message: `Erro: Usuário com ID: ${userID} não é cadastrado!` }
    }
    const user = await User.findOne({ where: { id: userID } })
    return { code: 200, message: `Usuários de ID:${userID} está cadastrado!`, content: user }
  } catch (error) {
    console.error(`\nErro ao buscar usuário: ${error}`)
    return { code: 500, message: 'Erro: Servidor indisponível. Tente novamente mais tarde!' }
  }
}

// Busca todos usuários
export async function getUsers(): Promise<Result> {
  try {
    const users = await User.findAll()
    return { code: 200, message: 'Lista de usuários obtida com sucesso!', content: users }
  } catch (error) {
    console.error(`\nErro ao buscar usuários: ${error}`)
    return { code: 500, message: 'Erro: Servidor indisponível. Tente novamente mais tarde!' }
  }
}

// Atualiza usuário por ID
export async function updateUser(userID: number, userData: UserData): Promise<Result> {
  try {
    if (isNaN(userID)) {
      return { code: 400, message: `Erro: O ID informado não é um número: ${userID}` }
    }
    if (!await User.findOne({ where: { id: userID } })) {
      return { code: 409, message: `Erro: Usuário com ID: ${userID} não é cadastrado!` }
    }
    await User.update(userData, { where: { id: userID } })
    const user = await User.findOne({ where: { id: userID } })
    return { code: 200, message: `Usuários de ID:${userID} foi atualizado!`, content: user }
  } catch (error) {
    console.error(`\nErro ao realizar atualização: ${error}`)
    return { code: 500, message: 'Erro: Servidor indisponível. Tente novamente mais tarde!' }
  }
}

// Atualiza usuário por ID
export async function deleteUser(userID: number): Promise<Result> {
  try {
    if (isNaN(userID)) {
      return { code: 400, message: `Erro: O ID informado não é um número: ${userID}` }
    }
    if (!await User.findOne({ where: { id: userID } })) {
      return { code: 409, message: `Erro: Usuário com ID: ${userID} não é cadastrado!` }
    }
    await User.destroy({ where: { id: userID } })
    return { code: 200, message: `Usuários de ID:${userID} foi deletado!`, content: null }
  } catch (error) {
    console.error(`\nErro ao realizar atualização: ${error}`)
    return { code: 500, message: 'Erro: Servidor indisponível. Tente novamente mais tarde!' }
  }
}
