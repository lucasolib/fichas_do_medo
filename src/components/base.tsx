import { useState } from 'react';
import BarraNav from './barraNav';
import '../css/base.css';

// TO DO: Criar um elemento de texto que sobreponha os inputs para aparecer sempre centralizado nas barras de vida

function Base() {
  const [state, setState] = useState({
    vida: '01/01',
    sanidade: '01/01',
    pe: '01/01',
    vidaPorcent: 100,
    sanidadePorcent: 100,
    pePorcent: 100,
  });

  function handleChange (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    porcentagem(name, value);
    setState({
      ...state,
      [name]: value,
    });
  }

  function porcentagem (key: string, value: string) {
        const [valorAtual, valorMaximo] = value.split('/');
        const valorAtualNum = parseFloat(valorAtual);
        const valorMaximoNum = parseFloat(valorMaximo);
        const porcentagem = (valorAtualNum / valorMaximoNum) * 100;
        const vida = document.getElementsByName(key);
        vida[0]?.setAttribute('style', 'width: ' + porcentagem + '%')
  }

  return (
    <article className='base'>
      <BarraNav />
      <h1 className='tituloBase'>
        Status do Personagem:
      </h1>
      <img src='../public/testeIcon.png' alt='Icon do personagem' className='iconBase'/>
      {(Object.keys(state) as Array<keyof typeof state>).map((nome) => {
        if (typeof state[nome] === 'string') {
          return (
          <label key={nome}>
            {nome.charAt(0).toUpperCase() + nome.slice(1)}
            <div className='barraResponsiva' id={nome+'bg'}>
              <input
                type='text'
                name={nome}
                id={nome}
                className='inputBase'
                defaultValue={state[nome]}
                onBlur={handleChange}
              />
            </div>
          </label>
        )}}
      )}
    </article>
  )
}

export default Base;
