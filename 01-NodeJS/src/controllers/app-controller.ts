import { createUser, createProduct, getAllUsers, getUserById } from '../models/app-models'
import { UserData, ProductData } from '../models/type-models'

export const newUser = (userData: UserData) => createUser(userData)
export const getUsers = () => getAllUsers()
export const getUser = (userId: string) => (Number(userId)) ? getUserById(Number(userId)) : { code: 400, message: 'O ID fornecido não é um número!' }


export const newProduct = (productData: ProductData) => createProduct(productData)
