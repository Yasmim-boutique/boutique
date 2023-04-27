const loginForm = document.querySelector('.all-login')
const cadastroForm = document.querySelector('.all-cadastro')

const alterPage = document.getElementById('sou-novo')

function cadastro () {
    loginForm.style.display = 'none'
    cadastroForm.style.display = 'block'
}

function login () {
    cadastroForm.style.display = 'none'
    loginForm.style.display = 'block'
}
