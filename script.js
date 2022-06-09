function salvar(){
  var email = document.getElementById("email").value
  var senha = document.getElementById("senha").value

  localStorage.setItem("user", email)
  localStorage.setItem("content", senha)
}

function enviar(){
  alert("Confira seu E-mail para trocar sua senha")
}


function verificar(){
  var lemail = document.getElementById("lemail").value
  var lsenha = document.getElementById("lsenha").value
  if(lemail.length != 0 || lsenha.length !=0){
  alert("Seja bem vindo!")
  window.location.href = "index.html";
  }else if(lemail.length ==0 || lsenha.lenght ==0){
    alert("ocorreu um erro")
  }
}