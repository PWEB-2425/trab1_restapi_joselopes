const botaoCria = document.getElementById("ca_cria");
const lista= document.getElementById("listaA")

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