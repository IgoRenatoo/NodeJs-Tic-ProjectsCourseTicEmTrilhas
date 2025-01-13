import { Router, Request, Response, NextFunction } from 'express'
import JWT from 'jsonwebtoken'
import { UserData } from '../models/type-models'
import { loginUserController, createUserController, getUserController, getUsersController, createProductController } from '../controllers/app-controller'

// Função para gerenciar as rotas da aplicação.
export const routes = Router()

// Middleware de autenticação
export const middlewareAuth = (req: Request, res: Response, next: NextFunction): void => {
  try {
    const token = req.headers['authorization']?.split(' ')[1] as string
    // Decodificando o token usando a chave secreta
    const decoded = JWT.verify(token, process.env.SECRET_KEY as string)

    next() // Prossegue para o próximo middleware ou a rota
  } catch (error) {
    res.status(401).json({ message: 'Token inválido ou expirado' })
  }
}

// Realiza login
routes.post('/login', async (req: Request, res: Response) => {
  try {
    const userData: UserData = req.body
    const response = await loginUserController(userData)
    res.status(response.code).json({ message: response.message, content: response.content })
  } catch (error) {
    res.status(500).json({ error: 'Erro interno do servidor' })
  }
})

// Cria novo usuário
routes.post('/user', async (req: Request, res: Response) => {
  try {
    const userData: UserData = req.body
    const response = await createUserController(userData)
    res.status(response.code).json(response.message)
  } catch (error) {
    res.status(500).json({ error: 'Erro interno do servidor' })
  }
})

// Busca usuário por ID
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

// Busca todos usuários
routes.get('/users/', middlewareAuth, async (req: Request, res: Response) => {
  try {
    const response = await getUsersController()
    res.status(response.code).json({ message: response.message, content: response.content })
  } catch (error) {
    res.status(500).json({ error: 'Erro interno do servidor' })
  }
})
routes.patch('/user/:id', (req: Request, res: Response) => {})
routes.delete('/user/:id', (req: Request, res: Response) => {})

// Cria novo produto
routes.post('/produto', async (req: Request, res: Response) => {
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
