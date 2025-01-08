export type UserData = {
  name: string
  password: string
}

export type ProductData = {
  name: string
  price: number
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
