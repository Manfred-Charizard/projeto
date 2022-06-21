import axios from 'axios'
const api= axios.create({
    baseURL: 'http//localhost:5001'
})

export async function cadastro(telefone, cliente, rua, bairro, complmento, nr, hamburgueres, bebidas, porcoes, sobremesas, total){
    const resposta = await api.post('/cadastro', {
        telefone: telefone,
        cliente: cliente,
        rua: rua,
        bairro: bairro, 
        complmento: complmento,
        nr: nr,
        hamburgueres: hamburgueres,
        bebidas: bebidas,
        porcoes: porcoes,
        sobremesas: sobremesas,
        total: total 

    })
    return resposta.data;
}
