// Variáveis para testar se usuário e senha são os mesmos quando tentar logar
let email = "user@tex.com.br";
let password = "123456";

var inputEmail = document.getElementById("email");
var inputSenha = document.getElementById("senha");

function valida_form() {

  if (inputEmail.value == "") {
    alert("Campo de email não pode ficar em branco");
  } else {
    // retira aspas simple e duplas do email
    var checkEmail = inputEmail.value.replace(/[",']/g, '');

    if (checkEmail.replace(/\s/g, '') == email && inputSenha.value == password) {
      
      // armazena email e senha no localSotrage
      localStorage.email = checkEmail.replace(/\s/g, '')
      localStorage.senha = inputSenha.value
      
      // direciona para home após fazer login com sucesso
      window.location.href = "/index.html";
      alert(`Olá ${email}`)

    } else {
      alert("Email ou Senha incorretos");
    }
  }
return
}
