import '../css/campanhas.css';
import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import CAMPANHAS from '../mocks/mockCampanhas'; // APENAS DURANTE O DESENVOLVIMENTO

function Campanhas () {
  interface Campanha {
    id: number;
    nome: string;
    imagem: string;
  };

  const [campanhas, setCampanhas] = useState<Campanha[]>([]);
  const [loading, setLoading] = useState(false);
  const [widthCarrossel, setWidthCarrossel] = useState(0)

  const carrossel = useRef<HTMLDivElement>(null);

  function getCampanhas ():Promise<void> {
    return new Promise((resolve) => {
      setLoading(true);
      setTimeout(() => {
        setCampanhas(CAMPANHAS);
        setLoading(false);
        resolve();
      }, 1000)
    })
  }

  useEffect(() => {
    const fetchData = async () => {
      await getCampanhas();
      if (carrossel.current){
        const scrollWidth = carrossel.current.scrollWidth;
        const offsetWidth = carrossel.current.offsetWidth;
        setWidthCarrossel(scrollWidth - offsetWidth);
      }
    }
    fetchData();
  }, [])

  return (
    <>
      <main>
        <h2 className='paginaCampanha'>Campanhas</h2>
        <motion.div
          className='carrosselCampanha' ref={carrossel}>
          { loading ? (
            <h1>CARREGANDO</h1>
          ) : (
            <motion.div className='carrosselInterno' drag='x' dragConstraints={{ right: 0, left: -widthCarrossel }}>
              {campanhas.map((campanha) => (
                <motion.article className='cardCampanha' key={campanha.id}>
                  <img
                    src={campanha.imagem}
                    alt='Placeholder para imagem da campanha'
                    className='fotoCampanha'
                  />
                  <div className='fundoNome'>
                    <h1 className='tituloCampanha'>{campanha.nome}</h1>
                  </div>
                  <button className='acessarCampanha'> Acessar </button>
                </motion.article>
                ))}
                <motion.article className='cardCampanha'>
                  <img
                    src='../public/simboloMais.png'
                    alt='Placeholder para imagem de criar campanha'
                    className='fotoCampanha'
                  />
                  <div className='fundoNome'>
                    <h1 className='tituloCampanha'>Nova campanha</h1>
                  </div>
                  <button className='acessarCampanha'> Criar </button>
                </motion.article>
              </motion.div>
          )}
        </motion.div>
      </main>
    </>
  )
}

export default Campanhas;
