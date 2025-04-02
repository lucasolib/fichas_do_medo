import '../css/barraNav.css';
import { NavLink } from 'react-router-dom';

function BarraNav() {
  return (
    <>
      <nav className='navBar'>
        <h1 className='title'>Ordem Paranormal</h1>
        <div className='navLinks'>
          <NavLink to="/perfil" className='buttonNav'>Perfil</NavLink>
          <NavLink to="/campanhas" className='buttonNav'>Campanhas</NavLink>
        </div>
        <NavLink to="/" className='buttonNav' id='sair'>Sair</NavLink>
      </nav>  
    </>
  )
}

export default BarraNav;
