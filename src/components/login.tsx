import '../css/login.css';
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import BarraNav from './barraNav';

function Login () {
  const navigate = useNavigate();

  const [state, setState] = useState({
    usuario: '',
    senha: '',
  });

  function entrar () {
    if (state.usuario == 'lucasoli' || state.usuario == 'lucasolibatista@gmail.com') {
      if (state.senha == 'Ll193728#'){
        navigate('/personagem');
      }
    }
  };

  function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  }

  return (
    <>
      <header>
        <BarraNav />
      </header>
      <main>
        <label htmlFor='usuario'>
          Usuário ou email:
          <input
            type='text'
            name='usuario'
            className='usuario'
            value={state.usuario}
            onChange={handleChange}
            placeholder='Insira seu usuário ou email'
          />
        </label>
        <label htmlFor='senha'>
          Senha:
          <input
            type='text'
            name='senha'
            className='senha'
            value={state.senha}
            onChange={handleChange}
            placeholder='Insira sua senha'
          />
        </label>
        <button className='entrar' onClick={entrar}>Entrar</button>
        <button className='esqueceuSenha'>
          <Link to='/recuperar-senha'>Esqueci minha senha</Link>
        </button>
        <button className='criarConta'>
          <Link to='/criar-conta'>Criar uma conta</Link>
        </button>
      </main>
    </>
  )
}

export default Login;
