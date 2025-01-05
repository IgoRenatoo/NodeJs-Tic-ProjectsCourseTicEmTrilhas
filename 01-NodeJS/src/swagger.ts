type SwaggerType = {
  definition: {
    openapi: string;
    info: {
        title: string;
        version: string;
        description: string;
    };
    servers: {
        url: string;
    }[];
};
apis: string[];
}

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
  apis: ['./src/routes/*.ts']
}
