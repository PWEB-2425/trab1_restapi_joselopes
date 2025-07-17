const express = require('express');
const router = express.Router();
const alunoCtrl = require('../controllers/controller');


/**  
 * @swagger
 * components:
 *   schemas:
 *     Alunos:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: none
 *         apelido:
 *           type: string
 *           description: none
 *         curso: 
 *           type: string
 *           description: none
 *         idade: 
 *           type: string
 *           description: none
 *         anoCurricular: 
 *           type: string
 *           description: none
 *       example:
 *         _id: 68727ebb56fe888956499a9b
 *         nome: "gabriel"
 *         apelido: "lopes"
 *         curso: "EI"
 *         idade: "20"
 *         anoCurricular: "1"
 * 
 */




/**
 * @swagger
 * /alunos:
 *   get:
 *     summary: retorna a lista de todos os alunos
 *     tags: [Alunos]
 *     responses:
 *       200:
 *         description: retorna a lista de todos os alunos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Alunos'
 */
router.get('/', alunoCtrl.get);


/**
 * @swagger
 * /alunos:
 *   post:
 *     summary: cria um aluno
 *     tags: [Alunos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Alunos'
 *     responses:
 *       200:
 *         description: o alunos foi criado com suceso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Alunos'
 *       500:
 *         description: error
 */
router.post('/', alunoCtrl.post);



/**
 * @swagger
 * /alunos/{id}:
 *   delete:
 *     summary: deleta um aluno
 *     tags: [Alunos]
 *     parameters:
 *       - in: path
 *         name: _id
 *         schema:
 *           type: string
 *         required: true
 *         description: id do aluno
 * 
 *     responses:
 *       200:
 *         description: o aluno foi deletado com sucesso
 *       404:
 *         description: o aluno nao foi emcontrado
 */
router.delete('/:id',alunoCtrl.delete);



/**
 * @swagger
 * /alunos/{id}:
 *  put:
 *    summary: Update de uma aluno 
 *    tags: [Alunos]
 *    parameters:
 *      - in: path
 *        name: _id
 *        schema:
 *          type: string
 *        required: true
 *        description: id do aluno
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Alunos'
 *    responses:
 *      200:
 *        description: o alono fou atualizado
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Alunos'
 *      404:
 *        description: o aluno nao foi encontardo
 *      500:
 *        description: error
 */
router.put('/:_id',alunoCtrl.put)




/**
 * @swagger
 * /alunos/nome/{id}:
 *   get:
 *     summary: returna um aluno dependendo do nome dado
 *     tags: [Alunos]
 *     parameters:
 *       - in: path
 *         name: nome
 *         schema:
 *           type: string
 *         required: true
 *         description: nome do aluno
 *     responses:
 *       200:
 *         description: o aluno com o determinado nome
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Alunos'
 *       404:
 *         description: o aluno nao foi encontrado
 */
router.get('/nome/:nome',alunoCtrl.getById);


/**
 * @swagger
 * /alunos/id/{id}:
 *   get:
 *     summary: returna um aluno dependendo do id/nome dado
 *     tags: [Alunos]
 *     parameters:
 *       - in: path
 *         name: _id
 *         schema:
 *           type: string
 *         required: true
 *         description: id do aluno
 *     responses:
 *       200:
 *         description: o aluno com o determinado id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Alunos'
 *       404:
 *         description: o aluno nao foi encontrado
 */
router.get('/id/:_id',alunoCtrl.getById);




/**
 * @swagger
 * /alunos/last:
 *   get:
 *     summary: retorna o ultimo alunoda lista 
 *     tags: [Alunos]
 *     responses:
 *       200:
 *         description: retorna o ultimo alunoda lista 
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Alunos'
 */
router.get('/last',alunoCtrl.getLast);




module.exports = router;