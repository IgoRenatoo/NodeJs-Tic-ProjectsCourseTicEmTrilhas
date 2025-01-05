import { createUser, createProduct } from '../models/app-models'
import { UserData, ProductData } from '../models/type-models'

export const newUser = (userData: UserData) => createUser(userData)

export const newProduct = (productData: ProductData) => createProduct(productData)
