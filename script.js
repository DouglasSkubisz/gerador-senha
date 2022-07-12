let slider = document.getElementById('slider')
let button = document.getElementById('button')

let range = document.getElementById('valor')
let senha = document.getElementById('password')

let containerPassword = document.getElementById('container-password')

let caracter = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@!#.,";
let novaSenha = ''

range.innerHTML = slider.value

slider.oninput = function(){
    range.innerHTML = this.value
}
function gerar(){
    let pass = ''
    for(let c = 0, n = caracter.length; c < slider.value; ++c){
        pass += caracter.charAt(Math.floor(Math.random() * n))
    }
    containerPassword.classList.remove('hide')
    senha.innerHTML = pass
    novaSenha = pass
}
function copiarSenha(){
    alert('Senha copiada!')
    navigator.clipboard.writeText(novaSenha)
}