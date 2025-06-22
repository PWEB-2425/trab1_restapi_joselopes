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

const BT_criar= document.getElementById("BT_criar")
BT_criar.addEventListener("click", criarAlunos)