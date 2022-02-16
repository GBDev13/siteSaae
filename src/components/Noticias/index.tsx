import SectionTitle from '../SectionTitle';
import NoticiaItem from './NoticiaItem';
import { Container } from './styles';

interface Inoticia{
  slug: string;
  title: string;
 
  thumbnail: string;

}

interface NoticiasProps{
  noticias: Inoticia[];
}

function Noticias({noticias}:NoticiasProps) {



  
  return (
    <Container>
      <SectionTitle title="Noticias"/>
     
      <section>
      {noticias.slice(0,3).map(noticia =>(
          <NoticiaItem
           key={noticia.slug}
           slug={noticia.slug}
           img={noticia.thumbnail}
           title={noticia.title}
           
         />
    
         
        ))}
     
      
      </section>
    </Container>
  );
}

export default Noticias;
