function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.querySelector('div#res>p')
    
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar'
    } else {
        res.innerHTML = 'Contando:<br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p == 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            // Contagem Crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} &#x1F449`
            }
        } else {
            // Contagem Decrescente
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} &#x1F449`
            }
        }
        res.innerHTML += '&#x1F3C1'
    }
}
