import '../css/barraNav.css';
import { NavLink } from 'react-router-dom';

function BarraNav() {
  return (
    <>
      <nav className='navBar'>
        <h1 className='title'>Ordem Paranormal</h1>
        <NavLink to="/" className='buttonNav'>Sair</NavLink>
        <NavLink to="/perfil" className='buttonNav'>Perfil</NavLink>
        <NavLink to="/campanhas" className='buttonNav'>Campanhas</NavLink>
      </nav>  
    </>
  )
}

export default BarraNav;
