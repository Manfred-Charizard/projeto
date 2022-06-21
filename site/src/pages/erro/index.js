import { Link } from 'react-router-dom';
import '../home/index.js';

export default function Index() {
    return(
        <main className="erro"> 
        <div className="numero">
            <p className="ecia">4</p><p className="sangue">0</p><p className="ecia">4</p>
            <h1 className="amelhor">OOOPS!</h1>
            <img className="kong" src='image/logoHambúrguer.png'/>
        </div>
        <div>
                <h1 className="page">Pagina Não Emcontrada Erro</h1>
        </div>
            <br/><br/>
        <div>
            <Link className="botão" to='/home'>Voltar</Link>
        </div>
    </main>
    )
}