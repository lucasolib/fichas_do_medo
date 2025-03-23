import './App.css';
import Base from './components/base';
import Inexistente from './pages/inexistente';
import Infos from './components/info';
import Login from './pages/login';
import { Route, Routes } from 'react-router-dom';
import Campanhas from './pages/campanhas';
import PaginaCampanha from './pages/pagina-campanha';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={ <Login /> } />
        <Route path='/campanhas' element={ <Campanhas /> } />
        <Route path='/campanhas/:campanha' element={ <PaginaCampanha /> } />
        <Route path='/personagem' element={ <Infos /> } />
        <Route path='/teste' element={ <Base /> } />
        <Route path='/*' element={ <Inexistente /> } />
      </Routes>
    </>
  )
}

export default App;
