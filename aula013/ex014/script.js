let mensagem = document.getElementById('msg')
let foto = document.getElementById('imagem')
let texto = document.getElementById('txt')
let horaatual = new Date()
let hora = 23

mensagem.innerHTML = `Agora são ${hora} horas`
if (hora >= 0 && hora <= 12) {
    foto.src = './assets/manha.png'
    document.body.style.background = '#FBB0AA'
    texto.innerHTML = 'Bom dia flor do dia'
} else if (hora >= 13 && hora <= 18) {
    foto.src = './assets/tarde.png'
    document.body.style.background = '#0B6F8C'
    texto.innerHTML = 'Boa tarde'
} else {
    foto.src = './assets/noite.png'
    document.body.style.background = '#071025'
    texto.innerHTML = 'Boa noite furia da noite'
}