import { Router, Request, Response, NextFunction } from 'express'
import { newUser, newProduct } from '../controllers/app-controller'

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

routes.post('/user', async (req: Request, res: Response) => {
  try {
    const body = req.body
    const response = await newUser(body)
    res.status(response.code).json(response.message)
  } catch (error) {
    res.status(500).json({ error: 'Erro interno do servidor' })
  }
})
routes.get('/user/:id', (req: Request, res: Response) => {})
routes.patch('/user/:id', (req: Request, res: Response) => {})
routes.delete('/user/:id', (req: Request, res: Response) => {})


routes.post('/produto', middleValidation, async (req: Request, res: Response) => {
  try {
    const productData = req.body
    const response = await newProduct(productData)
    res.status(response.code).json(response.message)
  } catch (error) {
    res.status(500).json({ error: 'Erro interno do servidor' })
  }
})
routes.get('/produto/:id', (req: Request, res: Response) => {})
routes.patch('/produto/:id', (req: Request, res: Response) => {})
routes.delete('/produto/:id', (req: Request, res: Response) => {})