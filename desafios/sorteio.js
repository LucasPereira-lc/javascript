function sorteioN(){
    let valores = []
    while(valores.length < 3){
        let n = Math.floor(Math.random() * 11)
        if (valores.indexOf(n) === -1 ){
            valores.push(n)
        }
    }
    return valores
}
console.log (`Números sorteados: ${sorteioN()}`)