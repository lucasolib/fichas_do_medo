import { useNavigate } from 'react-router-dom';
import '../css/login.css';

function Login () {
  const navigate = useNavigate();

  function entrar () {
    navigate('/personagem');
  }

  return (
    <>
      <main>
        <label htmlFor='usuario'>
          Usuário ou email:
          <input type='text' name='usuario' className='usuario'/>
        </label>
        <label htmlFor='senha'>
          Senha:
          <input type='text' name='senha' className='senha'/>
        </label>
        <button className='entrar' onClick={entrar}>Entrar</button>
        <button className='esqueceuSenha'>Esqueci minha senha</button>
        <button className='criarConta'>Criar uma conta</button>
      </main>
    </>
  )
}

export default Login;
