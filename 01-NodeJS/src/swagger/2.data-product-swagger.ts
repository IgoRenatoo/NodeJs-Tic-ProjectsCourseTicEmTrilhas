/*
Produtos
*/

// endpoint Cria Produto
/**
 * @swagger
 * /product:
 *   post:
 *     summary: Cria um novo Produto.
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
 *                 description: Nome do Produto.
 *               price:
 *                 type: number
 *                 description: Nome do Produto.
 *               category:
 *                 type: string
 *                 description: Senha do Produto.
 *     responses:
 *       201:
 *         description: Produto criado com sucesso.
 *       409:
 *         description: Erro ~> Produto com nome já cadastrado.
 *       500:
 *         description: Erro ~> Interno do servidor.
 */

// endpoint Busca Produto pelo ID
/**
 * @swagger
 * /product/:{id}:
 *   get:
 *     summary: Busca Produto por ID.
 *     tags:
 *      - Produto
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID do Produto a ser localizado.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Produtos de ID:xxx está cadastrado.
 *       400:
 *         description: Erro ~> O ID informado não é um número.
 *       409:
 *         description: Erro ~> Produto com ID:xxx não é cadastrado!.
 *       500:
 *         description: Erro ~> Interno servidor.
 */

// endpoint Busca todos Produtos
/**
 * @swagger
 * /product:
 *   get:
 *     summary: Busca todos Produtos.
 *     tags:
 *      - Produto
 *     responses:
 *       200:
 *         description: Objeto com msg de sucesso e array com Produtos cadastrados.
 *       500:
 *         description: Erro ~> Interno servidor.
 */

// endpoint Atualiza Produto pelo ID
/**
 * @swagger
 * /product/:{id}:
 *   patch:
 *     summary: Atualiza Produto por ID.
 *     tags:
 *      - Produto
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID do Produto a ser atualizado.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               productDataUpdate:
 *                 type: string
 *                 description: Dados do Produto a serem atualizados.
 *     responses:
 *       200:
 *         description: Produtos de ID:xxx foi atualizado.
 *       400:
 *         description: Erro ~> O ID informado não é um número.
 *       409:
 *         description: Erro ~> Produto com ID:xxx não é cadastrado.
 *       500:
 *         description: Erro ~> Interno servidor.
 */

// endpoint Deleta Produto pelo ID
/**
 * @swagger
 * /product/:{id}:
 *   delete:
 *     summary: Deleta Produto por ID.
 *     tags:
 *      - Produto
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID do Produto a ser localizado.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Produtos de ID:xxx foi deletado.
 *       400:
 *         description: Erro ~> O ID informado não é um número.
 *       409:
 *         description: Erro ~> Produto com ID:xxx não é cadastrado!.
 *       500:
 *         description: Erro ~> Interno servidor.
 */
