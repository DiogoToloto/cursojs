function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('iano')
    let res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        let fsex = document.getElementsByName('sexo')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')//mesma coisa de criar uma tag 
        img.setAttribute('id', 'foto')//img com id "foto" no html
        if (fsex[0].checked) {
            genero = 'Homen'
            if (idade >= 0 && idade < 15) {
                //criança
                img.setAttribute('src' , 'menino.png')
            } else if (idade < 25) {
                //adolecente
                img.setAttribute('src','adolecente-menino.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src','homen-adulto.png')
            } else {
                //idoso
                img.setAttribute('src','idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 15) {
                //criança
            } else if (idade < 25) {
                //adolecente
            } else if (idade < 50) {
                //adulto
            } else {
                //idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}