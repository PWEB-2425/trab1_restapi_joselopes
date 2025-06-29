const express = require('express');
const router = express.Router();
const alunoCtrl = require('../controllers/controller');

router.get('/', alunoCtrl.get);
router.post('/', alunoCtrl.post);
router.delete('/:id',alunoCtrl.delete);
router.get('/:nome',alunoCtrl.getById);


module.exports = router;