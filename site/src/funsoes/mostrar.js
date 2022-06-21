function mostrarOcultarSenha(){
    let senha = document.getElementById("senha");
    if(senha.type == "passsord"){
        senha.type ="text";
    }
    else
        senha.type = "password";
}
