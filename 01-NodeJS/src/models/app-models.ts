import { User, Product } from './db-models'
import { UserData, ProductData, Result } from './type-models'

// Criar novo usuário
export async function createUser(userData: UserData) {
  try {
    if (await User.findOne({ where: { name: userData.name } })) {
      return { code: 409, message: 'Erro: Usuário com nome já cadastrado!' }
    }
    const user = await User.create(userData)
    const result: Result = { code: 201, message: 'Usuário cadastrado com sucesso!', content: user }
    return result
  } catch (error) {
    console.error('Erro ao criar produto:', error)
    const result: Result = { code: 400, message: 'Error ao cadastrar novo usuários!' }
    return result
  }
}

// Buscar todos usuários
export async function getAllUsers() {
  try {
    const users = await User.findAll()
    const result: Result = { code: 200, message: 'Lista de usuários obtida com sucesso!', content: users }
    return result
  } catch (error) {
    console.error('Erro ao criar produto:', error)
    const result: Result = { code: 400, message: 'Error ao buscas lista de usuários!' }
    return result
  }
}

// Buscar usuário por ID
export async function getUserById(userId: number) {
  try {
    if (!await User.findOne({ where: { id: userId } })) {
      return { code: 409, message: `Erro: Usuário com ID: ${userId} não é cadastrado!` }
    }
    const user = await User.findOne({ where: { id: userId } })
    const result: Result = { code: 200, message: `Usuários de ID:${userId} está cadastrado!`, content: user }
    return result
  } catch (error) {
    console.error('Erro ao criar produto:', error)
    const result: Result = { code: 400, message: 'Error ao buscas lista de usuários!' }
    return result
  }
}

// Criar novo produto
export async function createProduct(productData: ProductData) {
  try {
    if (await Product.findOne({ where: { name: productData.name } })) {
      return { code: 409, message: 'Erro: Produto com nome já cadastrado!' }
    }
    const product = await Product.create(productData)
    const result: Result = { code: 201, message: 'Produto cadastrar com sucesso!', content: product }
    return result
  } catch (error) {
    console.error('Erro ao criar produto:', error)
    const result: Result = { code: 400, message: 'Error ao cadastrar novo produto!' }
    return result
  }
}
