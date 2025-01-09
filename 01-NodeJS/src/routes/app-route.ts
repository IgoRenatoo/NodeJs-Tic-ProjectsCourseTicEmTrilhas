import { Router, Request, Response, NextFunction } from 'express'
import { UserData } from '../models/type-models'
import { createProductController, createUserController, getUserController, getUsersController } from '../controllers/app-controller'

const middleValidation = (req: Request, res: Response, next: NextFunction) => {
  const validation = true
  if (validation) {
    console.log('Validação realizada!')
    next()
  } else {
    console.log('Validação negada!')
    res.status(403).json({ messagge: 'Acesso negado!' })
  }
}

// Função para gerenciar as rotas da aplicação.
export const routes = Router()

// Criar novo usuário
routes.post('/user', async (req: Request, res: Response) => {
  try {
    const body: UserData = req.body
    const response = await createUserController(body)
    res.status(response.code).json(response.message)
  } catch (error) {
    res.status(500).json({ error: 'Erro interno do servidor' })
  }
})

// Buscar usuário por ID
routes.get('/user/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    if (!Number.isNaN(Number(id))) {
      const response = await getUserController(Number(id))
      res.status(200).json({ message: response.message, user: response.content })
    } else {
      res.status(400).json({ message: 'O ID fornecido não é um número!' })
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro interno do servidor' })
  }
})

// Buscar todos usuários
routes.get('/user/', async (req: Request, res: Response) => {
  try {
    const response = await getUsersController()
    res.status(response.code).json({ message: response.message, content: response.content })
  } catch (error) {
    res.status(500).json({ error: 'Erro interno do servidor' })
  }
})
routes.patch('/user/:id', (req: Request, res: Response) => {})
routes.delete('/user/:id', (req: Request, res: Response) => {})

// Criar novo produto
routes.post('/produto', middleValidation, async (req: Request, res: Response) => {
  try {
    const productData = req.body
    const response = await createProductController(productData)
    res.status(response.code).json({ message: response.message, content: response.content })
  } catch (error) {
    res.status(500).json({ error: 'Erro interno do servidor' })
  }
})
routes.get('/produto/:id', (req: Request, res: Response) => {})
routes.patch('/produto/:id', (req: Request, res: Response) => {})
routes.delete('/produto/:id', (req: Request, res: Response) => {})
