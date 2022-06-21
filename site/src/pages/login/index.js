import { Link } from "react-router-dom";
import './index.scss';
import { login } from '../../api/loginAPI'
import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'
import storage from 'local-storage';

export default function Index() {

    useEffect(() => {
        if(storage('usuario-logado')){
            navigate('/pendentes');
        }
    }, [])

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');
    const [Carregando, setCarregando] = useState(false);

    const navigate = useNavigate();
    const ref = useRef;


    async function entrarClick() {
        ref.current.continuousStart();
        setCarregando(true);

        try {
            const r = await login(email, senha);
            storage('usuario-logado', r)
            setTimeout(() => {
                navigate('/pendentes');
            }, 3000)

        }
        catch (err){
            ref.current.complete();
            setCarregando(false);
            if(err.response.status === 401){

                setErro(err.response.data.erro);
            }
        }
    }


    return(
   <main className="login">
        <LoadingBar color= '#f11946' ref ={ref} />
        <br/>
            <h1 className="">LOGIN EMPRESARIAL</h1>
            <div className="retangulo-1">
                <br/>
                <p className="titulo2"> E-MAIL EMPRESARIAL </p>
       
                  <input className="campo" type="text" value={email} onChange={e => setEmail(e.target.value)}/>
                 <br/> <br/>
                <p className="titulo2"> SENHA</p>
                
                 <input className="campo" type="text" value={senha} onChange={e => setSenha(e.target.value)}/>
    
                <br/> <br/>
    
                <Link className="botão" to="/home">Voltar</Link>
               
                <Link className="botão" to="/pendentes"  onClick={entrarClick} disable={Carregando}>Próximo</Link>

                <div className='form-entrar invalido'>

                    {erro}

                </div>
            </div>
    </main>
 )
}

