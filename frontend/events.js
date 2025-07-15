const apiUrlAuth = 'http://localhost:3000/auth'

const btnLogin = document.getElementById("btnLogin")
btnLogin.addEventListener("click", login )


async function login(){

    const credenciais = {} 

    credenciais.nome= document.getElementById("fname").value
    credenciais.password= document.getElementById("password").value

    const credenciais_json= JSON.stringify(credenciais)

    const res = await fetch(`${apiUrlAuth}/login`,
        {
            method:'POST', 
            headers: { 'Content-Type': 'application/json' }, 
            body: credenciais_json
        })

    if(res == true){
        redirect("./frontend/admin_listar/listar.html")
    }else{
        redirect("./frontend/admin_listar/listar.html")
    }
}
