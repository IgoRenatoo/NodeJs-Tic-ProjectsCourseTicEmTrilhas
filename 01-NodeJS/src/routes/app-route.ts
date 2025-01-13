import { Router, Request, Response, NextFunction } from 'express'
import { passport } from '../config/passport-config'
import { UserData } from '../models/type-models'
import { loginUserController, createUserController, getUserController, getUsersController, createProductController } from '../controllers/app-controller'

// Função para gerenciar as rotas da aplicação.
export const routes = Router()

// Middleware de autenticação
export const middlewareAuth = (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate('jwt', (err: any, user: UserData) => {
    if (err) {
      return res.status(401).json({ error: 'Erro ao autenticar', details: err })
    }
    if (!user) {
      return res.status(401).json({ error: 'Acesso não autorizado!' })
    }
    req.user = user
    next()
  })(req, res, next)
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
