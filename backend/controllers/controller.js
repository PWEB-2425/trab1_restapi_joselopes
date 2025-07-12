const aluno = require('../models/models.js')


exports.get = async (req, res) => {
    const alunos = await aluno.find();
    //console.log(alunos);
    res.json(alunos);
}


exports.post = async (req, res) => {
    console.log(req.body)
    const alunos = new aluno(req.body);
    await alunos.save();
    res.status(201).json(aluno);
}
    

exports.delete = async(req,res) => {
    let id = (req.params.id);

    console.log(id)
    const alunos = await aluno.deleteOne({ "_id": id });
    
}

exports.getById = async(req,res) => {

    console.log(req.params)

    const alunos = await aluno.find(req.params);

    console.log(alunos)
    
    res.json(alunos)
}

exports.put = async(req, res) =>{

    console.log(req.params)
    console.log(req.body)

    const alunores = await aluno.findOneAndUpdate(req.params,req.body,{ new: true });
    

}



