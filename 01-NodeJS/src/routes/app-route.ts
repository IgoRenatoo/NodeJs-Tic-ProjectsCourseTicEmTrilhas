import { Router } from 'express'
import * as UserController from '../controllers/user-controller'

export const routes = Router()

routes.post('/login', UserController.logIn) // Login de usuário
routes.post('/user', UserController.createUser) // Criação de usuário
routes.get('/user/:id', UserController.getUser) // Busca usuário por ID
routes.get('/users', UserController.getUsers) // Lista de todos os usuários
routes.patch('/user/:id', UserController.updateUser) // Atualiza usuário por ID
routes.delete('/user/:id', UserController.deleteUser) // Deleta usuário por ID
