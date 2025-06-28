const apiUrl = 'http://localhost:3000/alunos'

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

const btn_pesquisa= document.getElementById("btn_pesquisa")
//btn_pesquisa.addEventListener("click",pesquisa_Alunos)

list()

async function list(){
    
    const res = await fetch(apiUrl)
    const alunosJS = await res.json()


    let ulalunos = document.getElementById("listaB");
    console.log(ulalunos);
    ulalunos.innerHTML = "";

    for (aluno of alunosJS) {

        let novob = document.createElement("button");
        novob.setAttribute("data-alunoid", aluno._id);
        novob.innerHTML = "remover";
        novob.addEventListener("click",() => apagarAluno(aluno._id));

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

async function apagarAluno(id){
    console.log(id)
    fetch(`${apiUrl}/${id}`,{method:'DELETE'})

    list()
}