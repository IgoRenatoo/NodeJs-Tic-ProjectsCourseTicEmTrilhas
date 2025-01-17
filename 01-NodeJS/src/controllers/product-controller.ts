import { Request, Response } from 'express'
import * as ProductService from '../services/product-service'

export async function createProduct(req: Request, res: Response): Promise<any> {
  try {
    const result = await ProductService.createProduct(req.body)
    return res.status(result.code).json(result)
  } catch (error) {
    console.error(`Erro no createProduct - Controller: ${error}`)
    return res.status(500).json({ message: 'Erro interno no servidor' })
  }
}

// Busca Produto por ID
export async function getProduct(req: Request, res: Response): Promise<any> {
  try {
    const ProductID = parseInt(req.params.id)
    const result = await ProductService.getProduct(ProductID)
    return res.status(result.code).json(result)
  } catch (error) {
    console.error(`Erro no getProduct - Controller: ${error}`)
    return res.status(500).json({ message: 'Erro interno no servidor' })
  }
}

// Busca todos os Produtos
export async function getProducts(_req: Request, res: Response): Promise<any> {
  try {
    const result = await ProductService.getProducts()
    return res.status(result.code).json(result)
  } catch (error) {
    console.error(`Erro no getProducts - Controller: ${error}`)
    return res.status(500).json({ message: 'Erro interno no servidor' })
  }
}

// Atualiza Produto por ID
export async function updateProduct(req: Request, res: Response): Promise<any> {
  try {
    const ProductID = parseInt(req.params.id)
    const ProductData = req.body
    const result = await ProductService.updateProduct(ProductID, ProductData)
    return res.status(result.code).json(result)
  } catch (error) {
    console.error(`Erro no updateProduct - Controller: ${error}`)
    return res.status(500).json({ message: 'Erro interno no servidor' })
  }
}

// Deleta Produto por ID
export async function deleteProduct(req: Request, res: Response): Promise<any> {
  try {
    const ProductID = parseInt(req.params.id)
    const result = await ProductService.deleteProduct(ProductID)
    return res.status(result.code).json(result)
  } catch (error) {
    console.error(`Erro no updateProduct - Controller: ${error}`)
    return res.status(500).json({ message: 'Erro interno no servidor' })
  }
}
