import { User, Product } from './db-models'
import { UserData, ProductData, Result } from './type-models'

// Criar novo usuário
export async function createUser(userData: UserData): Promise<Result> {
  try {
    if (await User.findOne({ where: { name: userData.name } })) {
      return { code: 409, message: 'Erro: Usuário com nome já cadastrado!' }
    }
    const user = await User.create(userData)
    return { code: 201, message: 'Usuário cadastrado com sucesso!', content: user }
  } catch (error) {
    console.error('Erro ao criar produto:', error)
    return { code: 400, message: 'Error ao cadastrar novo usuários!' }
  }
}

// Buscar usuário por ID
export async function getUser(userId: number): Promise<Result> {
  try {
    if (!await User.findOne({ where: { id: userId } })) {
      return { code: 409, message: `Erro: Usuário com ID: ${userId} não é cadastrado!` }
    }
    const user = await User.findOne({ where: { id: userId } })
    return { code: 200, message: `Usuários de ID:${userId} está cadastrado!`, content: user }
  } catch (error) {
    console.error('Erro ao criar produto:', error)
    return { code: 400, message: 'Error ao buscas lista de usuários!' }
  }
}

// Buscar todos usuários
export async function getUsers(): Promise<Result> {
  try {
    const users = await User.findAll()
    return { code: 200, message: 'Lista de usuários obtida com sucesso!', content: users }
  } catch (error) {
    console.error('Erro ao criar produto:', error)
    return { code: 400, message: 'Error ao buscas lista de usuários!' }
  }
}

// Criar novo produto
export async function createProduct(productData: ProductData): Promise<Result> {
  try {
    if (await Product.findOne({ where: { name: productData.name } })) {
      return { code: 409, message: 'Erro: Produto com nome já cadastrado!' }
    }
    const product = await Product.create(productData)
    return { code: 201, message: 'Produto cadastrar com sucesso!', content: product }
  } catch (error) {
    console.error('Erro ao criar produto:', error)
    return { code: 400, message: 'Error ao cadastrar novo produto!' }
  }
}
