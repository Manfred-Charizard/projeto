import { Link } from "react-router-dom";
import './index.scss';
import { useEffect, useState } from 'react'
import { buscaPorNome, mostrarTodosPedidos } from "../../api/pedidosapi";


export default function Index() {
    const [pedidos, setPedidos] = useState([]);
    const [filtro, setFiltro] = useState('');

    async function filtrar() { 
        const resp = await buscaPorNome(filtro);
        setFiltro(resp)
    }

    async function carregarTodosPedidos(){
        const resp = await mostrarTodosPedidos();
        setPedidos(resp);
    }

    useEffect(() => {
        carregarTodosPedidos();
    }, [])

    return(
        
<main className="tudo">
    <div>
            <h1 align="center">PEDIDOS</h1>
            <div >
                <h4 className="sub-titulo">Pendentes</h4>
                <div className='caixa-busca'>
              <input type="text" placeholder='Buscar filmes por nome' />
              <button> <img className="procurar" src='./image/procurar.png' alt='buscar'  onClick={filtrar} /> </button>
            </div>
            </div>
            <table className="box">
                <thead>
                        <tr>
                            <th>Identificação</th>
                            <th>Pedido</th>
                            <th>Cliente</th>
                            <th>Endereço</th>
                            <th>Remover/Editar</th>
                       </tr>
                </thead>
                <tbody>
                    {pedidos.map(item =>
                            
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.pedido}</td>
                                <td>{item.cliente}</td>
                                <td>{item.endereço}</td>
                                <td>
                                    <img src='./image/icon-editar.svg' alt='editar'/>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <img src='./image/icon-remover.svg' alt='remover'/>
                                </td>
                            </tr>
                        )}
                </tbody>
            </table>
            <br/>
            <div className="mono">
                <div>
                <Link className="botão-1" to='/login'>Voltar</Link>
                </div>
                <div>
                <Link className="botão" to='/cadastro'><img className="img" src='./image/mais.png'/></Link>
                </div>
            </div>
        <br/><br/>
    </div>
</main>
    )
}