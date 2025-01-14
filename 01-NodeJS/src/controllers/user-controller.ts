import { Request, Response } from 'express'
import * as UserService from '../services/user-service'

// Realiza login
export async function logIn(req: Request, res: Response): Promise<any> {
  try {
    const result = await UserService.logInUser(req.body)
    return res.status(result.code).json(result)
  } catch (error) {
    console.error(`Erro no login - Controller: ${error}`)
    return res.status(500).json({ message: 'Erro interno no servidor' })
  }
}

// Cria novo usuário
export async function createUser(req: Request, res: Response): Promise<any> {
  try {
    const result = await UserService.createUser(req.body)
    return res.status(result.code).json(result)
  } catch (error) {
    console.error(`Erro no createUser - Controller: ${error}`)
    return res.status(500).json({ message: 'Erro interno no servidor' })
  }
}

// Busca usuário por ID
export async function getUser(req: Request, res: Response): Promise<any> {
  try {
    const userID = parseInt(req.params.id)
    const result = await UserService.getUser(userID)
    return res.status(result.code).json(result)
  } catch (error) {
    console.error(`Erro no getUser - Controller: ${error}`)
    return res.status(500).json({ message: 'Erro interno no servidor' })
  }
}

// Busca todos os usuários
export async function getUsers(_req: Request, res: Response): Promise<any> {
  try {
    const result = await UserService.getUsers()
    return res.status(result.code).json(result)
  } catch (error) {
    console.error(`Erro no getUsers - Controller: ${error}`)
    return res.status(500).json({ message: 'Erro interno no servidor' })
  }
}

// Atualiza usuário por ID
export async function updateUser(req: Request, res: Response): Promise<any> {
  try {
    const userID = parseInt(req.params.id)
    const userData = req.body
    const result = await UserService.updateUser(userID, userData)
    return res.status(result.code).json(result)
  } catch (error) {
    console.error(`Erro no updateUser - Controller: ${error}`)
    return res.status(500).json({ message: 'Erro interno no servidor' })
  }
}

// Deleta usuário por ID
export async function deleteUser(req: Request, res: Response): Promise<any> {
  try {
    const userID = parseInt(req.params.id)
    const result = await UserService.deleteUser(userID)
    return res.status(result.code).json(result)
  } catch (error) {
    console.error(`Erro no updateUser - Controller: ${error}`)
    return res.status(500).json({ message: 'Erro interno no servidor' })
  }
}
