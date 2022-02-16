import { ReactNode } from 'react';
import Link from 'next/link';
import { Container } from './styles';

interface NoticiaItemProps {
  img: string;
  title: string;
  description: string;
  slug:String;
  
}

function NoticiaItem({ title,description, img, slug}: NoticiaItemProps) {
  return (
    <Container>
     <Link href={`/noticias/${slug}`}>
        <a>
          <div className="overlay">
            <section>
              <img src={img} alt="" />
             
              <h2>{title}</h2>
              <p>{description}</p>
            </section>
          </div> 
        </a>
     </Link>
      
    </Container>
  );
};

export default NoticiaItem;
