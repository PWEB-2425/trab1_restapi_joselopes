
//const apiUrlAlunos = 'http://localhost:3000/alunos'
const apiUrlAlunos = 'https://trab1-restapi-joselopes.onrender.com/alunos'



list()

async function list(){
    
    const res = await fetch(apiUrlAlunos)
    const alunosJS = await res.json()

    let tbalunos = document.getElementById("tabela");
    //console.log(ulalunos);
    tbalunos.innerHTML = "";

    tbalunos.innerHTML=`
        <thead >
            <tr>
                <th>Nome</th>
                <th>Apelido</th>
                <th>Idade</th>
                <th>Ano Escolar</th>
                <th>Curso</th>
                <th>Ações</th>
            </tr>
        </thead >`

    for (aluno of alunosJS) {
        const item = document.createElement('tr');
       
        item.innerHTML = `
                        <td>${aluno.nome}</td>
                        <td>${aluno.apelido}</td>
                        <td>${aluno.idade}</td>
                        <td>${aluno.anoCurricular}</td>
                        <td>${aluno.curso}</td>
                    `;

        const btnRemover = document.createElement('button');
        btnRemover.setAttribute("data-alunoid", aluno._id); 
        btnRemover.textContent = 'Remover';
        btnRemover.onclick = () => apagarAluno(aluno._id);


        const btnatualizar = document.createElement('button');
        btnatualizar.innerHTML = `<a href="../admin_criar/admin_menu.html?id=${aluno._id}">atualizar</a>`;
        btnatualizar.setAttribute("data-alunoid", aluno._id);
        btnatualizar.onclick = () => atualizarAluno(aluno._id);
        

        item.appendChild(btnRemover);
        item.appendChild(btnatualizar);
        tbalunos.appendChild(item);   
    }    
}





async function apagarAluno(id){
    console.log(id)
    fetch(`${apiUrlAlunos}/${id}`,{method:'DELETE'})

    list()
}






const fname_p = document.getElementById("fname_p")
const btn_pesquisa= document.getElementById("btn_pesquisa")
btn_pesquisa.addEventListener("click",pesquisa_Alunos)


async function pesquisa_Alunos(){

    const aluno ={}
    
    aluno.nome = fname_p.value
    

    const res = await fetch(`${apiUrlAlunos}/nome/${fname_p.value}`,{method:'GET'})
    const alunosRes = await res.json()
        
    let tbalunos = document.getElementById("tabela");
    tbalunos.innerHTML = "";

    tbalunos.innerHTML=`
        <thead >
            <tr>
                <th>Nome</th>
                <th>Apelido</th>
                <th>Idade</th>
                <th>Ano Escolar</th>
                <th>Curso</th>
                <th>Ações</th>
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


        const btnRemover = document.createElement('button');
        btnRemover.setAttribute("data-alunoid", (alunosRes[0]._id));
        btnRemover.textContent = 'Remover';
        btnRemover.onclick = () => apagarAluno(alunosRes[0]._id);

        const btnatualizar = document.createElement('button');
         btnatualizar.innerHTML = `<a href="../admin_criar/admin_menu.html?id=${alunosRes[0]._id}">atualizar</a>`;
        btnatualizar.setAttribute("data-alunoid", alunosRes[0]._id);
        btnatualizar.onclick = () => atualizarAluno(alunosRes[0]._id);
        

        item.appendChild(btnRemover);
        item.appendChild(btnatualizar);
        tbalunos.appendChild(item);     
}


