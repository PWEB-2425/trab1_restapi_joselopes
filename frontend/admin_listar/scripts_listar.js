

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

    let tbalunos = document.getElementById("tabela");
    //console.log(ulalunos);
    //tbalunos.innerHTML = "";

    for (aluno of alunosJS) {
        const item = document.createElement('tr');
       
        item.innerHTML = `
                        <td>${aluno.nome}</td>
                        <td>${aluno.apelido}</td>
                        <td>${aluno.idade}</td>
                        <td>${aluno.anoEscolar}</td>
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
    fetch(`${apiUrl}/${id}`,{method:'DELETE'})
    list()
}






const fname_p = document.getElementById("fname_p")
const btn_pesquisa= document.getElementById("btn_pesquisa")
btn_pesquisa.addEventListener("click",pesquisa_Alunos)


async function pesquisa_Alunos(){

    const aluno ={}
    
    aluno.nome = fname_p.value
    

    const res = await fetch(`${apiUrl}/nome/${fname_p.value}`,{method:'GET'})
    const alunosRes = await res.json()
        
    let tbalunos = document.getElementById("tabela");
    console.log(`${apiUrl}/${fname_p.value}`);
    tbalunos.innerHTML = "";

        const item = document.createElement('tr');
        const thead = document.createElement('thead')
        thead.innerHTML='<tr><th>Nome</th><th>Apelido</th><th>Idade</th><th>Ano Escolar</th><th>Curso</th><th>Ações</th></tr>';

        item.innerHTML = `
                        <td>${alunosRes[0].nome}</td>
                        <td>${alunosRes[0].apelido}</td>
                        <td>${alunosRes[0].idade}</td>
                        <td>${alunosRes[0].anoEscolar}</td>
                        <td>${alunosRes[0].curso}</td>
        `;


        const btnRemover = document.createElement('button');
        btnRemover.setAttribute("data-alunoid", (alunosRes[0]._id));
        btnRemover.textContent = 'Remover';
        btnRemover.onclick = () => removerAluno(alunosRes[0]._id);

        const btnatualizar = document.createElement('button');
        btnatualizar.textContent = 'atulizar';
        btnatualizar.setAttribute("data-alunoid", alunosRes[0]._id);
        btnatualizar.onclick = () => atualizarAluno(alunosRes[0]._id);

        item.appendChild(btnRemover);
        item.appendChild(btnatualizar);
        tbalunos.appendChild(item);     
}


function atualizarAluno(id){
    
}