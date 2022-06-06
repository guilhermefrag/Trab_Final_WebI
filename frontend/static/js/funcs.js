function fecharJanela(){
    console.log("fecharJanela")
    window.open(location, '_self').close();
}

function login(){
    console.log("login")
    user = document.forms[0].elements[0].value
    senha = document.forms[0].elements[1].value
    
    if(user == "123" && senha == "123"){
        logado = document.querySelectorAll(".Logado")
        console.log(logado)
        logado.forEach(element => {
            element.style.display = "flex"
        })

        loguei = document.getElementById("Login").style.display = "none"
    }
    
}