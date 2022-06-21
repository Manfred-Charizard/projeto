import {pedidos} from '../repository/pedidosRepository.js';

import { Router } from 'express';
const server = Router();


server.get('/pedidos/', async (req, resp) => {
    try {
        
        const resposta = await pedidos();

        if (!resposta)
            resp.status(404).send([])
        else
            resp.send({
                pedido: resposta
            });
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/pedidos/busca', async (req, resp) => {
    try {
        const { nome } = req.query;
        
        const resposta = await buscaPorNome(nome);

        if (resposta.length == 0)
            resp.status(404).send([])
        else
            resp.send(resposta);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default server;