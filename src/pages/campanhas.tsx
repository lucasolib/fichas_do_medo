import '../css/campanhas.css';

function Campanhas () {
  return (
    <>
      <main>
        <article className='cardCampanha'>
          <img
            src='..//public/plAceholder.png'
            alt='Placeholder para imagem da campanha'
            className='fotoCampanha'
          />
          <h1 className='tituloCampanha'> NOME DA CAMPANHA</h1>
          <button className='acessarCampanha'> Acessar </button>
        </article>
      </main>
    </>
  )
}

export default Campanhas;
