let num = document.getElementById('fnum')
let res = document.getElementById('res')

function parimp(n){
    if (n%2 == 0){
        return true
    }else {
        return false
    }
}

function verificar(){
    res.innerHTML = ''
    if (num.value.length == 0){
        alert ('[ERRO]Digite um número para verificar!')
    }else if (parimp(num.value) == true){
        res.innerHTML += `<p>O número ${num.value} é <strong>par</strong></p>`
    }else {
        res.innerHTML += `<p>O número ${num.value} é <strong>impar</strong></P>`
    }
    num.value = ''
    num.focus()
}