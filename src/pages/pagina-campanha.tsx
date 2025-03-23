import { useParams } from 'react-router-dom';
import '../css/pagina-campanha.css';
import CAMPANHAS from '../mocks/mockCampanhas'; // APENAS DURANTE O DESENVOLVIMENTO
import { useEffect, useState } from 'react';

function PaginaCampanha() {
  interface Campanha {
    id: number;
    nome: string;
    imagem: string;
    slug: string;
  };
  const [campanhas, setCampanhas] = useState<Campanha[]>([]);
  const [campanhaAtual, setCampanhaAtual] = useState<Campanha>();

  const params = useParams();

  function getCampanhas ():Promise<void> {
    return new Promise((resolve) => {
      // setLoading(true);
      setTimeout(() => {
        setCampanhas(CAMPANHAS);
        // setLoading(false);
        resolve();
      }, 1000)
    })
  }
  
  useEffect(() => {

    const fetchData = async () => {
      await getCampanhas();
      const campanha= campanhas.find((campanha) => campanha.slug === params.campanha)
      setCampanhaAtual(campanha);
    }
    fetchData();
  }, [])
  

  return (
    <>
      <main>
        <h1>{campanhaAtual?.nome}</h1>
      </main>
    </>
  )
}

export default PaginaCampanha;
