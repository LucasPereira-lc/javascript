let amigo = {nome:'jose',
sexo:'M' ,
peso: 85.4 ,
engordar(p=0){
    console.log('Engordou')
    this.peso -= p
}
}
amigo.engordar(5)
console.log (`${amigo.nome} pesa ${amigo.peso}kg`)