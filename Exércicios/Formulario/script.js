

let nome = document.querySelector('#nome')
let sobrenome =  document.querySelector('#sobrenome')
let email = document.querySelector('#email')
nomeOk= false
emailOk = false

function validarNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txtNome.innerHTML = 'Nome Inválido'
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = 'Nome Válido'
        txtNome.style.color = 'green'
        nomeOk = true
    }
}


function validarEmail() {
    let txtEmail = document.querySelector('#txtEmail')

    if (email.value.indexOf('@') == -1) {
        txtEmail.innerHTML = 'E-mail Inválido'
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = 'E-mail Válido'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}


function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true ) {
        alert('Enviado com sucesso!')
    } else {
        alert('Preencha as informações corretamente antes de enviar.')
    }
}
