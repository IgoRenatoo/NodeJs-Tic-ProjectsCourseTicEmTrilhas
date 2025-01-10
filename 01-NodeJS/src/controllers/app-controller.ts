import { UserData, ProductData } from '../models/type-models'
import { loginUser, createUser, getUser, getUsers, createProduct } from '../models/app-models'

export const loginUserController = (userData: UserData) => loginUser(userData)
export const createUserController = (userData: UserData) => createUser(userData)
export const getUserController = (userId: number) => getUser(userId)
export const getUsersController = () => getUsers()

export const createProductController = (productData: ProductData) => createProduct(productData)
