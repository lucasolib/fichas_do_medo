import '../css/info.css';

function Infos() {
  return (
    <>
      <article className="infos">
      <h1 className="tituloInfos">
        Informações Gerais:
      </h1>
        <label>
          Nome do jogador:
          <input name="jogador" className="inputText" type="text" />
        </label>
        <label>
          Nome do personagem:
          <input name="personagem" className="inputText" type="text" />
        </label>
        <label>
          Idade:
          <input name="idade" className="inputText" type="text" />
        </label>
        <label>
          NEX:
          <input name="nex" className="inputText" type="text" />
        </label>
        <label>
          Classe:
          <input name="classe" className="inputText" type="text" />
        </label>
        <label>
          Trilha:
          <input name="trilha" className="inputText" type="text" />
        </label>
        <label>
          Origem:
          <input name="origem" className="inputText" type="text" />
        </label>
        <label>
          Patente:
          <input name="patente" className="inputText" type="text" />
        </label>
      </article>
    </>
  )
}

export default Infos;
