const aluno = require('../models/models.js')
const alunosCollection = require('../DB/DB.js');

exports.get = async (req, res) => {
    const alunos = await aluno.find();
    console.log(alunos);
    res.json(alunos);
}


exports.post = async (req, res) => {
    console.log(req.body)
    const alunos = new aluno(req.body);
    await alunos.save();
    res.status(201).json(aluno);
}
    

exports.delete = async(req,res) => {
    const alunos = await aluno.deleteOne(req.body);

}

exports.getById = async(req,res) => {
    console.log((req.body))
    const alunos = await aluno.find(req.body)
    res.json(alunos)
}