function tabuada() {

let num = document.getElementById('inumero')
let tab = document.getElementById('seltab')

if (num.value.length == 0) {
    window.alert('[ERRO] insira algum dado')
} else {
    let n = Number(num.value)
    let c = 1
    tab.innerHTML = ''

    while (c <= 10) {
        let item = document.createElement('option')
        item.text = `${n} x ${c} = ${n*c}`
        tab.append(item)
        c++
        }
    }
}