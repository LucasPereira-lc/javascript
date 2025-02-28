var idade = 45
console.log(`Voçê tem ${idade} anos`)
if (idade<16) {
    console.log('Não vota')
}else {
    if (idade>=16 && idade<18) {
        console.log('voto opcinal')
    }else {
        console.log('Voto obrigatório')
    }
}