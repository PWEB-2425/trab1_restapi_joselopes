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



list()

async function list(){
    
    const res = await fetch(apiUrl)
    const alunosJS = await res.json()


    let ulalunos = document.getElementById("listaB");
    //console.log(ulalunos);
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

const fname_p = document.getElementById("fname_p")
const btn_pesquisa= document.getElementById("btn_pesquisa")
btn_pesquisa.addEventListener("click",pesquisa_Alunos)



async function pesquisa_Alunos(){

    const alunos = {}
    alunos.nome = fname_p.value

    nome_json= JSON.stringify(alunos)
    const res = await fetch(`${apiUrl}/${fname_p.value}`,{method:'GET'})
    const alunosRes = await res.json()
    

    let ulalunos = document.getElementById("listaB");
    ulalunos.innerHTML = "";

    
        let novob = document.createElement("button");
        novob.setAttribute("data-alunoid", alunosRes[0]._id);
        novob.innerHTML = "remover";
        novob.addEventListener("click",() => apagarAluno(alunosRes[0]._id));

        let novoli = document.createElement("li");
        novoli.innerHTML =
                "nome:"     + alunosRes[0].nome + " " + 
                "apelido:"  + alunosRes[0].apelido + " " + 
                "curso:"    + alunosRes[0].curso + " " + 
                "idade:"    + alunosRes[0].idade + " " + 
                "ano "      + alunosRes[0].anoCurricular;

        ulalunos.appendChild(novob);
        ulalunos.appendChild(novoli);
        
    
        

}