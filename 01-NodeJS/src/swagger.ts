import { SwaggerType } from './models/type-models'

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
  apis: ['./src/swagger.ts','./src/routes/*.ts']
}
/*
Usuários
*/

// endpoint Criar usuário
/**
 * @swagger
 * /user:
 *   post:
 *     summary: Cria um novo usuário.
 *     tags:
 *      - Usuário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nome do usuário.
 *               password:
 *                 type: string
 *                 description: Senha do usuário.
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso.
 *       400:
 *         description: Erro ~> Ao cadastrar novo usuários ao banco de dados!
 *       409:
 *         description: Erro ~> Usuário com nome já cadastrado!.
 *       500:
 *         description: Erro ~> Interno do servidor.
 */

// endpoint Buscar todos usuários
/**
 * @swagger
 * /user:
 *   get:
 *     summary: Buscar todos usuários.
 *     tags:
 *      - Usuário
 *     responses:
 *       200:
 *         description: Objeto com msg de sucesso e array com usuários cadastrados.
 *       400:
 *         description: Erro ~> Ao buscar lista de usuários no bando de dados!
 *       500:
 *         description: Erro ~> Interno servidor.
 */

// endpoint Buscar usuário pelo ID
/**
 * @swagger
 * /user/:{id}:
 *   get:
 *     summary: Busca usuário por ID.
 *     tags:
 *      - Usuário
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID do usuário a ser localizado.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Usuários de ID:xxx está cadastrado!.
 *       400:
 *         description: Erro ~> O ID fornecido não é do número ( n or 'n')!
 *       409:
 *         description: Erro ~> Usuário com ID:xxx não é cadastrado!.
 *       500:
 *         description: Erro ~> Interno servidor.
 */


/*
Produtos
*/

// endpoint Criar produto
/**
 * @swagger
 * /produto:
 *   post:
 *     summary: Cria um novo produto.
 *     tags:
 *      - Produto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nome do produto.
 *               price:
 *                 type: number
 *                 description: Preço do produto.
 *     responses:
 *       201:
 *         description: Produto criado com sucesso.
 *       400:
 *         description: Erro ~> Ao cadastrar novo produto no banco de dados!
 *       409:
 *         description: Erro ~> Produto com nome já cadastrado!.
 *       500:
 *         description: Erro ~> Interno servidor.
 */
