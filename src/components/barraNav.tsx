import '../css/barraNav.css';
import { NavLink } from 'react-router-dom';

function BarraNav() {
  return (
    <>
      <nav className='navBar'>
        <NavLink to="/" className='buttonNav'>Sair</NavLink>
        <NavLink to="/perfil" className='buttonNav'>Perfil</NavLink>
        <NavLink to="/campanhas" className='buttonNav'>Campanhas</NavLink>
        <NavLink to="/personagem" className='buttonNav'>Personagens</NavLink>
      </nav>  
    </>
  )
}

export default BarraNav;
