import { UserData, ProductData, Result } from './type-models'
import { User, Product } from './db-models'
import JWT from 'jsonwebtoken'

// Realiza login
export async function loginUser(userData: UserData): Promise<Result> {
  try {
    const user: any = await User.findOne({ where: { nickname: userData.nickname, password: userData.password } })
    if (user) {
      const token = JWT.sign(
        { id: user.id, nickname: user.nickname },
        process.env.SECRET_KEY as string,
        { expiresIn: 120 } // 120s
      )
      const dateNow: string = new Date(new Date().getTime() + 2 * 60 * 60 * 1000).toLocaleString() // Padrão 01/01/2025, 00:00:00
      return { code: 200, message: 'Usuário logado com sucesso!', content: { user: user.nickname, expired: `Expira em ${dateNow}` , token: token } }
    } else {
      return { code: 403, message: 'Erro: Usuário ou senha inválidos!', content: false }
    }
  } catch (error) {
    console.error(`\nErro ao realizar login: ${error}`)
    return { code: 400, message: 'Erro: Servidor indisponível. Tente novamente mais tarde!' }
  }
}

// Cria novo usuário
export async function createUser(userData: UserData): Promise<Result> {
  try {
    const hasUser = await User.findOne({ where: { nickname: userData.nickname } })
    if (!hasUser) {
      const token = JWT.sign(
        { nickname: userData.nickname, password: userData.password },
        process.env.SECRET_KEY as string,
        { expiresIn: 120 }
      )
      console.log(userData.token)
      userData.token = token
      const user: any = await User.create(userData)
      return { code: 200, message: 'Usuário criado com sucesso!', content: user }
    } else {
      return { code: 409, message: 'Erro: Nickname já cadastrado!' }
    }
  } catch (error) {
    console.error(`\nErro ao realizar login: ${error}`)
    return { code: 400, message: 'Erro: Servidor indisponível. Tente novamente mais tarde!' }
  }
}

// Busca usuário por ID
export async function getUser(userId: number): Promise<Result> {
  try {
    if (!await User.findOne({ where: { id: userId } })) {
      return { code: 409, message: `Erro: Usuário com ID: ${userId} não é cadastrado!` }
    }
    const user = await User.findOne({ where: { id: userId } })
    return { code: 200, message: `Usuários de ID:${userId} está cadastrado!`, content: user }
  } catch (error) {
    console.error(`\nErro ao realizar login: ${error}`)
    return { code: 400, message: 'Erro: Servidor indisponível. Tente novamente mais tarde!' }
  }
}

// Busca todos usuários
export async function getUsers(): Promise<Result> {
  try {
    const users = await User.findAll()
    return { code: 200, message: 'Lista de usuários obtida com sucesso!', content: users }
  } catch (error) {
    console.error(`\nErro ao realizar login: ${error}`)
    return { code: 400, message: 'Erro: Servidor indisponível. Tente novamente mais tarde!' }
  }
}

// Cria novo produto
export async function createProduct(productData: ProductData): Promise<Result> {
  try {
    if (await Product.findOne({ where: { name: productData.name } })) {
      return { code: 409, message: 'Erro: Produto com nome já cadastrado!' }
    }
    const product = await Product.create(productData)
    return { code: 201, message: 'Produto cadastrar com sucesso!', content: product }
  } catch (error) {
    console.error(`\nErro ao realizar login: ${error}`)
    return { code: 400, message: 'Erro: Servidor indisponível. Tente novamente mais tarde!' }
  }
}
