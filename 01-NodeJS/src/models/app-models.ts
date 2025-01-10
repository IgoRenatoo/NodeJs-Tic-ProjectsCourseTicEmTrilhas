import { UserData, ProductData, Result } from './type-models'
import { User, Product } from './db-models'

// Realiza login
export async function loginUser(userData: UserData): Promise<Result> {
  try {
    const user = await User.findOne({ where: { names: userData.name, password: userData.password } })
    if (user) {
      return { code: 200, message: 'Usuário logado com sucesso!', content: user }
    } else {
      return { code: 403, message: 'Erro: Usuário ou senha inválidos!', content: user }
    }
  } catch (error) {
    console.error(`\nErro ao realizar login: ${error}`)
    return { code: 400, message: 'Erro: Servidor indisponível. Tente novamente mais tarde!' }
  }
}

// Cria novo usuário
export async function createUser(userData: UserData): Promise<Result> {
  try {
    if (await User.findOne({ where: { name: userData.name } })) {
      return { code: 409, message: 'Erro: Usuário com nome já cadastrado!' }
    }
    const user = await User.create(userData)
    return { code: 201, message: 'Usuário cadastrado com sucesso!', content: user }
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
