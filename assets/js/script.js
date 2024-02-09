function validarNome() {
    var nome = document.getElementById("name");
    var txt = document.getElementById("txtNome");

    if (nome.value.length < 3) {
        txt.innerHTML = "Digite o nome completo";
        txt.style.color = "red";
    } else {
        txt.innerHTML = "OK";
        txt.style.color = "green";
    }
}

function validarSobrenome() {
    var sobrenome = document.getElementById("sobrenome");
    var txtSobrenome = document.getElementById("txtSobrenome");

    if (sobrenome.value.length < 3) {
        txtSobrenome.innerHTML = "Por favor, insira seu sobrenome.";
        txtSobrenome.style.color = "red";
    } else {

        txtSobrenome.innerHTML = "OK";
        txtSobrenome.style.color = "green"
    }
}

function validarEmail() {
    var email = document.getElementById("email");
    var txtEmail = document.getElementById("txtEmail");

    if (email.value.length === 0) {
        txtEmail.innerHTML = "Por favor, insira seu email.";
        txtEmail.style.color = "red";
    } else if (!email.value.includes("@")) {
        txtEmail.innerHTML = "O email deve conter o caractere '@'.";
        txtEmail.style.color = "red";
    } else {
        txtEmail.innerHTML = "OK";
        txtEmail.style.color = "green";
    }
}

