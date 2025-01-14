import { SwaggerType } from '../types/type-models'

export const swaggerOptions: SwaggerType = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Documentation Tic em Trilha',
      version: '1.0.0',
      description: 'API documentation using Swagger UI'
    },
    servers: [
      {
        url: 'http://localhost:3000'
      }
    ]
  },
  apis: ['./src/swagger/*.ts','./src/controllers/*.ts']
}
