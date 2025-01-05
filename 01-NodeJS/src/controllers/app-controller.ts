import { createUser } from '../models/app-models'
import { UserData } from '../models/type-models'

export const newUser = (userData: UserData) => createUser(userData)
