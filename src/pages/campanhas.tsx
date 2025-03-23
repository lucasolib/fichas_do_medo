import '../css/campanhas.css';
import { useEffect, useState, useRef } from 'react';
import { motion, PanInfo } from 'framer-motion';
import CAMPANHAS from '../mocks/mockCampanhas'; // APENAS DURANTE O DESENVOLVIMENTO
import { Link } from 'react-router-dom';

function Campanhas () {
  interface Campanha {
    id: number;
    nome: string;
    imagem: string;
  };

  const [campanhas, setCampanhas] = useState<Campanha[]>([]);
  const [loading, setLoading] = useState(false);
  const [widthCarrossel, setWidthCarrossel] = useState(0)
  const [widthBarra, setWidthBarra] = useState(0)
  const [posicaoDrag, setPosicaoDrag] = useState(0);

  const carrossel = useRef<HTMLDivElement>(null);
  const barra = useRef<HTMLDivElement>(null);

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
      setTimeout(() => {
        if (carrossel.current) {
          const scrollWidth = carrossel.current.scrollWidth;
          const offsetWidth = carrossel.current.offsetWidth;
          setWidthCarrossel(scrollWidth - offsetWidth);
        }
        if (barra.current) {
          const offsetBarra = barra.current.offsetWidth;
          const larguraBarraInterna = offsetBarra * 0.1;
          if (barra.current.firstChild) {
            (barra.current.firstChild as HTMLDivElement).style.width = `${larguraBarraInterna}px`;
          }
          setWidthBarra(offsetBarra - larguraBarraInterna);
        }
      }, 100);
    }
    fetchData();
  }, [campanhas])

  function handleDragBarra (_e: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) {
    setPosicaoDrag(-info.point.x * (widthCarrossel / widthBarra));
  }

  return (
    <>
      <main>
        <h2 className='paginaCampanha'>Campanhas</h2>
        <motion.div
          className='carrosselCampanha' ref={carrossel}>
          { loading ? (
            <h1>CARREGANDO</h1>
          ) : (
            <motion.div
              className='carrosselInterno'
              dragConstraints={{ right: 0, left: -widthCarrossel }}
              style={{ x: posicaoDrag }}
            >
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
                  <Link className='acessarCampanha' to={`${campanha.nome}`}> Acessar </Link>
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
                  <Link to='campanhas/criar' className='acessarCampanha'>
                      Criar
                  </Link>
                </motion.article>
              </motion.div>
          )}
        </motion.div>
        <motion.div className='barraExterna' ref={barra}>
          <motion.div
            className='barraInterna'
            drag='x'
            dragConstraints={{ right: widthBarra, left: 0 }}
            style={{ x: posicaoDrag * (widthBarra / widthCarrossel) }}
            onDrag={handleDragBarra}
            dragMomentum={false}
          />
        </motion.div>
      </main>
    </>
  )
}

export default Campanhas;
