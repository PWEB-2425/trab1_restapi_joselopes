//const { json } = require("express/lib/response");
//const { methods } = require("express/lib/utils");
const login_abrir  = document.getElementById("admin_button")
const login_form   = document.getElementById("admin_menu")
var q = 0;

login_abrir.addEventListener("click", function(){
    
    q = q + 1;

    if(q % 2 == 1){
        login_form.style.display = "block";
    }else{
        login_form.style.display = "none";
    }
});

listar_ultimo();

async function listar_ultimo() {
    const url = "http://localhost:3000/alunos";
    
    const resposta = await fetch(url);
    

    const alunosJS = await resposta.json();
    

    let ulalunos = document.getElementById("listaA");
    ulalunos.innerHTML = "";


        let novob = document.createElement("button");
        novob.setAttribute("data-alunoid", alunosJS[(alunosJS.length)-1].id);
        novob.innerHTML = "remover";
        novob.addEventListener("click", apagarAluno);

        let novoli = document.createElement("li");
        novoli.innerHTML =
                "nome:"     + alunosJS[alunosJS.length-1].nome + " " + 
                "apelido:"  + alunosJS[alunosJS.length-1].apelido + " " + 
                "curso:"    + alunosJS[alunosJS.length-1].curso + " " + 
                "idade:"    + alunosJS[alunosJS.length-1].idade + " " + 
                "ano "      + alunosJS[alunosJS.length-1].anoCurricular;

        ulalunos.appendChild(novob);
        ulalunos.appendChild(novoli);
        
    
}




/*
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

        let novob = document.createElement("button");
        novob.setAttribute("data-alunoid", aluno.id);
        novob.innerHTML = "remover";
        novob.addEventListener("click", apagarAluno);

        let novoli = document.createElement("li");
        novoli.innerHTML =
                "nome:"     + aluno.nome + " " + 
                "apelido:"  + aluno.apelido + " " + 
                "curso:"    + aluno.curso + " " + 
                "idade:"    + aluno.idade + " " + 
                "ano "      + aluno.anoCurricular;

        ulalunos.appendChild(novob);
        ulalunos.appendChild(novoli);
        
    }
}

*/

const BT_criar= document.getElementById("BT_criar")
BT_criar.addEventListener("click", criarAlunos)

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
    listarAlunos();
}

async function apagarAluno(evento) {

    const botaoclicado = evento.target;
    const idaluno = botaoclicado.dataset.alunoid;
    url = "http://localhost:3000/alunos/" + idaluno;
    const resposta = await fetch(url, { method: "DELETE" });
    listarAlunos();

}
