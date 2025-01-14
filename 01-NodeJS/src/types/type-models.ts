export type UserData = {
  id?: number
  full_name?: string
  nickname?: string
  password?: string
  token?: string
}

export type NewUserData = {
  id?: number
  full_name: string
  nickname: string
  password: string
  token?: string
}

export type Result = {
  code: number
  message: string
  content?: any
}

export type SwaggerType = {
  definition: {
    openapi: string
    info: {
      title: string
      version: string
      description: string
    }
    servers: {
      url: string
    }[]
  }
  apis: string[]
}
