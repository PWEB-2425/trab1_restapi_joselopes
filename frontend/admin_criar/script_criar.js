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

const BT_criar= document.getElementById("BT_criar")
BT_criar.addEventListener("click", criarAlunos)



async function criarAlunos() {
    

    const alunos = {}

    alunos.nome =           document.getElementById("fname").value;
    alunos.apelido =        document.getElementById("apelido").value;
    alunos.idade =          document.getElementById("idade").value;
    alunos.curso =          document.getElementById("curso").value;
    alunos.anoCurricular =  document.getElementById("anoCurricular").value;

    console.log(alunos);

    alunos_json= JSON.stringify(alunos)

    console.log(alunos_json)

    if(alunos.curso != "" && alunos.nome != "" && alunos.apelido != "" && alunos.idade != "" && alunos.anoCurricular != ""){
        const resposta = await fetch(apiUrl, {method: "POST",headers: { 'Content-Type': 'application/json' }, body: alunos_json})

    }
    //listarAlunos();
}
    