let valores = [1,2,4,6,0,3,11,32,25,65,43,8]

/*for (let pos = 0;pos < valores.length ;pos++ ) {
    console.log(valores[pos])

    os dois fazem a mesma coisa, porem o de baixo é mais simplificado

}*/

for (let pos in valores) {
    console.log(valores[pos])
}