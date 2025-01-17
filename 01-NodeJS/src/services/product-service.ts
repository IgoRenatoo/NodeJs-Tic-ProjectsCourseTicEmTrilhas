import { ProductData, NewProductData, Result } from '../types/type-models'
import { Product } from '../models/database-model'

// Cria novo Produto
export async function createProduct(ProductData: NewProductData): Promise<Result> {
  try {
    const hasProduct = await Product.findOne({ where: { name: ProductData.name } })
    if (!hasProduct) {
      const product = await Product.create(ProductData)
      return { code: 201, message: 'Produto criado com sucesso!', content: product }
    } else {
      return { code: 409, message: 'Erro: Produto já cadastrado!' }
    }
  } catch (error) {
    console.error(`\nErro ao criar produto: ${error}`)
    return { code: 500, message: 'Erro: Dados divergentes. Tente novamente!' }
  }
}

// Busca Produto por ID
export async function getProduct(ProductID: number): Promise<Result> {
  try {
    if (isNaN(ProductID)) {
      return { code: 400, message: `Erro: O ID informado não é um número: ${ProductID}` }
    }
    if (!await Product.findOne({ where: { id: ProductID } })) {
      return { code: 409, message: `Erro: Produto com ID: ${ProductID} não é cadastrado!` }
    }
    const product = await Product.findOne({ where: { id: ProductID } })
    return { code: 200, message: `Produtos de ID:${ProductID} está cadastrado!`, content: product }
  } catch (error) {
    console.error(`\nErro ao buscar Produto: ${error}`)
    return { code: 500, message: 'Erro: Servidor indisponível. Tente novamente mais tarde!' }
  }
}

// Busca todos Produtos
export async function getProducts(): Promise<Result> {
  try {
    const product = await Product.findAll()
    return { code: 200, message: 'Lista de Produtos obtida com sucesso!', content: product }
  } catch (error) {
    console.error(`\nErro ao buscar Produtos: ${error}`)
    return { code: 500, message: 'Erro: Servidor indisponível. Tente novamente mais tarde!' }
  }
}

// Atualiza Produto por ID
export async function updateProduct(ProductID: number, ProductData: ProductData): Promise<Result> {
  try {
    if (isNaN(ProductID)) {
      return { code: 400, message: `Erro: O ID informado não é um número: ${ProductID}` }
    }
    if (!await Product.findOne({ where: { id: ProductID } })) {
      return { code: 409, message: `Erro: Produto com ID: ${ProductID} não é cadastrado!` }
    }
    await Product.update(ProductData, { where: { id: ProductID } })
    const product = await Product.findOne({ where: { id: ProductID } })
    return { code: 200, message: `Produtos de ID:${ProductID} foi atualizado!`, content: product }
  } catch (error) {
    console.error(`\nErro ao realizar atualização: ${error}`)
    return { code: 500, message: 'Erro: Servidor indisponível. Tente novamente mais tarde!' }
  }
}

// Atualiza Produto por ID
export async function deleteProduct(ProductID: number): Promise<Result> {
  try {
    if (isNaN(ProductID)) {
      return { code: 400, message: `Erro: O ID informado não é um número: ${ProductID}` }
    }
    if (!await Product.findOne({ where: { id: ProductID } })) {
      return { code: 409, message: `Erro: Produto com ID: ${ProductID} não é cadastrado!` }
    }
    await Product.destroy({ where: { id: ProductID } })
    return { code: 200, message: `Produtos de ID:${ProductID} foi deletado!`, content: null }
  } catch (error) {
    console.error(`\nErro ao realizar atualização: ${error}`)
    return { code: 500, message: 'Erro: Servidor indisponível. Tente novamente mais tarde!' }
  }
}
