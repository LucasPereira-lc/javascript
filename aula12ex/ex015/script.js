function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano= window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }else {
       var fsex = window.document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if (fsex[0].checked) {
        genero = 'Homem'
        if (idade >= 0 && idade <= 10){
            //criança
            img.setAttribute('src', 'criança.m.png')
        }else if (idade > 10 && idade < 21) {
            //jovem
            img.setAttribute('src', 'jovem.m.png')
        } else if (idade >= 21 && idade < 60){
            //adulto
            img.setAttribute('src', 'adulto.m.png')
        }else if (idade >= 60) {
            //idoso
            img.setAttribute('src', 'idoso.m.png')
        }
       }else if (fsex[1].checked) {
        genero = 'Mulher'
        if (idade >= 0 && idade <= 10){
            //criança
            img.setAttribute('src', 'criança.f.png')
        }else if (idade > 10 && idade < 21) {
            //jovem
            img.setAttribute('src', 'jovem.f.png')
        } else if (idade >= 21 && idade < 60){
            //adulto
            img.setAttribute('src', 'adulta.f.png')
        }else if (idade >= 60) {
            //idoso
            img.setAttribute('src', 'idoso.f.png')
        }
       }
       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos ${genero} com ${idade} anos`
       res.appendChild(img)
    }
}