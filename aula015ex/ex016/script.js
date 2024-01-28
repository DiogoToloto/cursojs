function contar() {
    let i = document.getElementById('iinicio')
    let f = document.getElementById('ifim')
    let p = document.getElementById('ipasso')
    let res = document.getElementById('res')

    if (i.value.length == 0 || f.value.length == 0 || p.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
        res.innerHTML = `Impossivel contar!`
    } else {
        res.innerHTML = 'Contando: <br>'
        let inicio = Number(i.value)
        let fim = Number(f.value)
        let passo = Number(p.value)

        if (passo <= 0) {
            window.alert('Passo invalido! considerando passo 1')
            passo = 1
        }
        if (inicio < fim) {
            for(let c = inicio; c <= fim; c += passo) {
                res.innerHTML += `${c} `
            }
        } else {
            for(let c = inicio; c >= fim; c -= passo){
                res.innerHTML += ` ${c}`
            }
        }
    }
}