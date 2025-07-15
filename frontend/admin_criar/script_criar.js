const apiUrlAlunos = 'http://localhost:3000/alunos'

getLast()


const params = new URLSearchParams(window.location.search);
const studentId = params.get('id');

window.onload = async function()  {
    if(studentId != null){
        const aluno ={}
    
        aluno._id = studentId

        const res = await fetch(`${apiUrlAlunos}/id/${studentId}`,{method:'GET'})
        const alunosRes = await res.json()

        console.log(alunosRes)

        document.getElementById("fname").value= alunosRes[0].nome ;
        document.getElementById("apelido").value=alunosRes[0].apelido;
        document.getElementById("idade").value=alunosRes[0].idade ;
        document.getElementById("curso").value=alunosRes[0].curso;
        document.getElementById("anoCurricular").value=alunosRes[0].anoCurricular;
    }
};



const BT_criar= document.getElementById("BT_criar")
BT_criar.addEventListener("click", criarAlunos)


async function criarAlunos() {
    
    console.log(studentId)

    const alunos = {}

        alunos.nome =           document.getElementById("fname").value;
        alunos.apelido =        document.getElementById("apelido").value;
        alunos.idade =          document.getElementById("idade").value;
        alunos.curso =          document.getElementById("curso").value;
        alunos.anoCurricular =  document.getElementById("anoCurricular").value;

        console.log(alunos);

        alunos_json= JSON.stringify(alunos)

        console.log(alunos_json)

    if(studentId == null){
        
        if(alunos.curso != "" && alunos.nome != "" && alunos.apelido != "" && alunos.idade != "" && alunos.anoCurricular != ""){
            const resposta = await fetch(apiUrlAlunos, {method: "POST",headers: { 'Content-Type': 'application/json' }, body: alunos_json})
        }
    }else{
        //alunos._id =studentId;
        const resposta = await fetch(`${apiUrlAlunos}/${studentId}`, {method: "PUT",headers: { 'Content-Type': 'application/json' }, body: alunos_json})
        
    } 
}   


async function getLast() {
    const last = await fetch(`${apiUrlAlunos}/last`,{method:'GET'})

    const alunosRes = await last.json()

    console.log(alunosRes)

    const tbalunos = document.getElementById("tabela")

    tbalunos.innerHTML= " "

    tbalunos.innerHTML=`    <thead >
            <tr>
                <th>Nome</th>
                <th>Apelido</th>
                <th>Idade</th>
                <th>Ano Escolar</th>
                <th>Curso</th>
            </tr>
        </thead >`

        const item = document.createElement('tr');
        

        item.innerHTML = `
                        <td>${alunosRes[0].nome}</td>
                        <td>${alunosRes[0].apelido}</td>
                        <td>${alunosRes[0].idade}</td>
                        <td>${alunosRes[0].anoCurricular}</td>
                        <td>${alunosRes[0].curso}</td>
        `;
        tbalunos.appendChild(item); 

}