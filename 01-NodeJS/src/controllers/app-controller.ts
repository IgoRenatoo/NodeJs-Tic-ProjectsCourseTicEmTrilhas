import { createUser, createProduct, getUser, getUsers } from '../models/app-models'
import { UserData, ProductData } from '../models/type-models'

export const createUserController = (userData: UserData) => createUser(userData)
export const getUserController = (userId: number) => getUser(userId)
export const getUsersController = () => getUsers()

export const createProductController = (productData: ProductData) => createProduct(productData)
