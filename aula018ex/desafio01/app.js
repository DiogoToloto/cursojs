// declaraçao de variaveis
let numero = document.getElementById('inumero');
let selecao = document.getElementById('selecao');
let res = document.getElementById('res');
let valores = [];
// verificando se o numero esta entre 1 e 100
function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true;

    } else {
        return false;
    }
};
// verificando se o numero já esta na lista
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true;
    } else {
        return false;
    }
};
// adicionando valores na lista caso as functions acima sejam verdadeiras
function adicionar() {
    if (isNumero(numero.value) && !inLista(numero.value, valores)) {
        valores.push(Number(numero.value));
        let item = document.createElement('option');
        item.text = `Valor ${numero.value} adicionado`;
        selecao.appendChild(item);
        res.innerHTML = '';

    } else {
        window.alert('Valor invalido ou já encontrado na lista.');
    }

    numero.value = '';//limpa o input
    numero.focus(); //mantem o input selecionado para digitar
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar.')
    } else {
        let totalElementos = valores.length;
        let palavraNumero = totalElementos > 1 ? 'números' : 'número';
        let maior = valores[0];
        let menor = valores[0];
        let soma = 0;
        let media = 0;

        for (let pos in valores) {
            soma += valores[pos];
            if (valores[pos] > maior);
            maior = valores[pos];
            if (valores[pos] < menor);
            menor = valores[pos];
        }
        media = soma / totalElementos;
        res.innerHTML = '';
        res.innerHTML += `<p>Ao todo temos ${totalElementos} ${palavraNumero} cadastrados.</p>`;
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`;
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`;
        res.innerHTML += `<p>Somando todos os valores temos ${soma}.</p>`;
        res.innerHTML += `<p>A media dos valores é ${media}.</p>`;
    }
}