const idKey = '@transações'
const idSaldo = '@saldo'
const idDesp = '@despesa'
const idPoup = '@poupado'
const saldo = document.getElementById('saldo')
const despesa = document.getElementById('despesa')
const poupanca = document.getElementById('poupado')
var lista =
{
    keyRegistros: 0,
    trasacao: []
}

var totalSaldo = 0
var totalDesp = 0
var totalPoupado = 0

function dataAtual ()
{
    let data = new Date()
    //data = data.getDate() + '/' + data.getMonth() + '/' + data.getFullYear() + ' ' + data.getHours() + ':' + data.getMinutes()
    data = data.toLocaleDateString("pt-BR", {timeZone: "America/Sao_Paulo"}) + ' ' + data.toLocaleTimeString("pt-BR", {timeZone: "America/Sao_Paulo"})
    return data
}

function pegaDados ()
{
    const dados =
    {
        id: lista.keyRegistros + 1,
        tipo: document.getElementById('tipo').value,
        motivo: document.getElementById('motivo').value,
        valor: document.getElementById('valor').value,
        data: dataAtual()
    }

    registraDados(dados.id, dados.tipo, dados.motivo, dados.valor, dados.data)

}

function registraDados(id, tipo, motivo, valor, data)
{
    const idsKey = lista.keyRegistros +1;
    lista.keyRegistros = idsKey
    lista.trasacao.push({id, tipo, motivo, valor, data})
    if (tipo === 'Saida'){
        totalSaldo = Number(localStorage.getItem(idSaldo))
        totalDesp = Number(localStorage.getItem(idDesp))
        if(totalSaldo <= 0){
            localStorage.setItem(idDesp, totalDesp+Number(valor))
            gravaDadosDB()
        }else{
            localStorage.setItem(idSaldo, totalSaldo-Number(valor))
            localStorage.setItem(idDesp, totalDesp+Number(valor))
            gravaDadosDB()
        }
    }else if (tipo === 'Poupado'){
        totalSaldo = Number(localStorage.getItem(idSaldo))
        totalPoupado = Number(localStorage.getItem(idPoup))
        if(totalSaldo <= 0){
            localStorage.setItem(idPoup, totalPoupado+Number(valor))
            gravaDadosDB()
        }else{
            localStorage.setItem(idSaldo, totalSaldo-Number(valor))
            localStorage.setItem(idPoup, totalPoupado+Number(valor))
            gravaDadosDB()
        }
    }else{
        totalSaldo = Number(localStorage.getItem(idSaldo))
        localStorage.setItem(idSaldo, totalSaldo+Number(valor))
        gravaDadosDB()
    }

}

function gravaDadosDB()
{
    localStorage.setItem(idKey, JSON.stringify(lista))
}

function submeterDados(){
    pegaDados()
}

document.getElementById('insert').addEventListener('click', submeterDados)

function lerDB(){
    const dadoList = localStorage.getItem(idKey)
    if(dadoList){
        lista = JSON.parse(dadoList)
        totalSaldo = localStorage.getItem(idSaldo)
        totalPoupado = localStorage.getItem(idPoup)
        totalDesp = localStorage.getItem(idDesp)

    }
    desenhar()
}

function desenhar(){
    const table = document.getElementById('historico')
    if(table){
        var data = lista.trasacao
        data = data.map(transacao =>
            {
                return `
                  <tr>
                    <th scope="row">${transacao.id}</th>
                    <td>${transacao.tipo}</td>
                    <td>${transacao.motivo}</td>
                    <td>R$${parseFloat(transacao.valor).toFixed(2)}</td>
                    <td>${transacao.data}</td>
                  </tr>
                `
            });

        table.innerHTML = data.join('')

        saldo.innerHTML = 'R$' + parseFloat(totalSaldo).toFixed(2)
        despesa.innerHTML = 'R$' + parseFloat(totalDesp).toFixed(2)
        poupanca.innerHTML = 'R$' + parseFloat(totalPoupado).toFixed(2)


    }

}


window.addEventListener('load', () => {
    lerDB()
})
