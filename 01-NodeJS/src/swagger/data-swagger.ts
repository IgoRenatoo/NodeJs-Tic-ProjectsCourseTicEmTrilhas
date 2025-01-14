/*
Usuários
*/

// endpoint Realiza Login
/**
 * @swagger
 * /login:
 *   post:
 *     summary: Realiza login.
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
 *       200:
 *         description: Usuário logado com sucesso!
 *       403:
 *         description: Erro ~> Usuário ou senha inválidos!
 *       400:
 *         description: Erro ~> Servidor indisponível. Tente novamente mais tarde!
 *       500:
 *         description: Erro ~> Interno do servidor.
 */

// endpoint Cria usuário
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
 *       409:
 *         description: Erro ~> Usuário com nome já cadastrado!.
 *       400:
 *         description: Erro ~> Servidor indisponível. Tente novamente mais tarde!
 *       500:
 *         description: Erro ~> Interno do servidor.
 */

// endpoint Busca usuário pelo ID
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
 *       409:
 *         description: Erro ~> Usuário com ID:xxx não é cadastrado!.
 *       400:
 *         description: Erro ~> Servidor indisponível. Tente novamente mais tarde!
 *       500:
 *         description: Erro ~> Interno servidor.
 */

// endpoint Busca todos usuários
/**
 * @swagger
 * /user:
 *   get:
 *     summary: Busca todos usuários.
 *     tags:
 *      - Usuário
 *     responses:
 *       200:
 *         description: Objeto com msg de sucesso e array com usuários cadastrados.
 *       400:
 *         description: Erro ~> Servidor indisponível. Tente novamente mais tarde!
 *       500:
 *         description: Erro ~> Interno servidor.
 */
