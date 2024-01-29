let amigo = {nome: 'diogo', idade: 20, peso: 63, sexo: 'M', engoradar(p=0) {
    console.log('Engordou')
    this.peso += p
}}
amigo.engoradar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)