//const { json } = require("express/lib/response");
//const { methods } = require("express/lib/utils");

const BT_criar= document.getElementById("BT_criar")
BT_criar.addEventListener("click", criarAlunos)

listarAlunos();

async function listarAlunos() {
    const url = "http://localhost:3000/alunos";

    const resposta = await fetch(url);
    console.log(resposta);

    const alunosJS = await resposta.json();
    console.log(alunosJS);

    let ulalunos = document.getElementById("listaA");
    console.log(ulalunos);
    ulalunos.innerHTML = "";

    for (aluno of alunosJS) {
        let novoli = document.createElement("li");
        novoli.innerHTML = aluno.nome + " " + aluno.curso;
        ulalunos.appendChild(novoli);
        
    }
}

   

async function criarAlunos() {
    const url = "http://localhost:3000/alunos";

    const alunos = {}

    alunos.nome =           document.getElementById("fname").value;
    alunos.apelido =        document.getElementById("apelido").value;
    alunos.idade =          document.getElementById("idade").value;
    alunos.curso =          document.getElementById("curso").value;
    alunos.anoCurricular =  document.getElementById("anoCurricular").value;

    console.log(alunos);

    alunos_json= JSON.stringify(alunos)
    if(alunos.curso != "" && alunos.nome != "" && alunos.apelido != "" && alunos.idade != "" && alunos.anoCurricular != ""){
        const resposta = await fetch(url, {method: "POST", body: alunos_json})
    }
    //listarAlunos();
}
