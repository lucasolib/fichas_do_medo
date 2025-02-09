import '../css/login.css';
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';

function Login () {
  const navigate = useNavigate();

  const [state, setState] = useState({
    usuario: '',
    senha: '',
  });

  function entrar () {
    if (state.usuario == 'lucasoli' || state.usuario == 'lucasolibatista@gmail.com') {
      if (state.senha == 'Ll193728#'){
        navigate('/campanhas');
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
      <main>
        <h1 className='titulo'>Fichas Ordem</h1>
        <div className='textoCriarConta'>
          Não possui um cadastro?
          <button className='criarConta'>
            <Link to='/criar-conta' id='botaoCriarConta'>Registre-se</Link>
          </button>
        </div>
        <div className='cardLogin'>
          <h1 id='bemVindo'>Bem-vindo!</h1>
          <label htmlFor='usuario' className='inputInfo'>
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
          <label htmlFor='senha' className='inputInfo'>
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
          <button className='esqueceuSenha'>
            <Link to='/recuperar-senha' id='botaoEsqueceuSenha'>Esqueci minha senha</Link>
          </button>
          <div className='checkbox'>
            <input type='checkbox' className='lembrar' id='lembrar'/>
            <label className='lembrarInfo' htmlFor='lembrar'>
              Lembrar-me
            </label>
          </div>
          <button className='entrar' onClick={entrar}>Entrar</button>
        </div>
      </main>
    </>
  )
}

export default Login;
