function carregar() {
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let data = new Date()
    let hora = 13
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora <= 12) {
        img.src = 'manha.png'
        document.body.style.background = '#FBB0AA'
    } else if (hora >= 13 && hora <= 18) {
        img.src = 'tarde.png'
        document.body.style.background = '#0B6F8C'
    } else {
        img.src = 'noite.png'
        document.body.style.background = '#071025'
    }
}