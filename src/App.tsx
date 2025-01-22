import './App.css';
import Base from './components/base';
import Inexistente from './components/inexistente';
import Infos from './components/info';
import Login from './components/login';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={ <Login /> } />
        <Route path='/personagem' element={ <Infos /> } />
        <Route path='/teste' element={ <Base /> } />
        <Route path='/*' element={ <Inexistente /> } />
      </Routes>
    </>
  )
}

export default App;
