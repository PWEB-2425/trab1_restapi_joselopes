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
