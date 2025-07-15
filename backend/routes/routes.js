const express = require('express');
const router = express.Router();
const alunoCtrl = require('../controllers/controller');

router.get('/', alunoCtrl.get);
router.post('/', alunoCtrl.post);
router.delete('/:id',alunoCtrl.delete);
router.put('/:_id',alunoCtrl.put)
router.get('/nome/:nome',alunoCtrl.getById);
router.get('/id/:_id',alunoCtrl.getById);
router.get('/last',alunoCtrl.getLast);




module.exports = router;