import { Router } from 'express'
import * as UserController from '../controllers/user-controller'
import * as ProductController from '../controllers/product-controller'

export const routes = Router()

/* --- Usuário --- */
routes.post('/login', UserController.logIn) // Login de usuário
routes.post('/user', UserController.createUser) // Criação de usuário
routes.get('/user/:id', UserController.getUser) // Busca usuário por ID
routes.get('/users', UserController.getUsers) // Lista de todos os usuários
routes.patch('/user/:id', UserController.authenticateJWT, UserController.updateUser) // Alterar usuário por ID
routes.delete('/user/:id', UserController.deleteUser) // Deleta usuário por ID

/* --- Produto --- */
routes.post('/product', ProductController.createProduct) // Criação de produto
routes.get('/product/:id', ProductController.getProduct) // Busca produto por ID
routes.get('/products', ProductController.getProducts) // Lista de todos os produtos
routes.patch('/product/:id', UserController.authenticateJWT, ProductController.updateProduct) // Alterar produto por ID
routes.delete('/product/:id', ProductController.deleteProduct) // Deleta produto por ID
