import { GetStaticProps } from "next";
import { useState } from "react";
import Header from '../../components/Header';
import MenuMobile from '../../components/MenuMobile';
import NoticiaItem from "../../components/NoticiaItem";
import { getPrismicClient } from "../../services/prismic";
import {NoticiasContainer} from '../../styles/NoticiasStyles';
import Prismic from '@prismicio/client'


interface Inoticia{
    slug: string;
    title: string;
    description: string;
    thumbnail: string;
  
  }
  
  interface  NoticiasProps{
    noticias: Inoticia[];
  }

export default function Noticias({noticias}: NoticiasProps){
    const [menuIsVisible, setMenuIsVisible] = useState(false);
    
    return(
    <>
        <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
       <NoticiasContainer>
       <Header setMenuIsVisible={setMenuIsVisible}/>

        <main className="container">
            {noticias.map(noticia =>
             <NoticiaItem
              key={noticia.slug}
              img={noticia.thumbnail}
             
              title={noticia.title}
              
              slug={noticia.slug}
          />
            
            )}
          
           </main>
     </NoticiasContainer>



    </>


    )

   
}

export const getStaticProps: GetStaticProps = async () =>{
    const prismic = getPrismicClient();
  
    const noticiaResponse = await prismic.query(
      [Prismic.Predicates.at('document.type','noticia')],
      {orderings:'[document.first_publication_date desc]'}
  
    );
  
   
  
    const noticias = noticiaResponse.results.map(noticia => ({
      slug: noticia.uid,
      title: noticia.data.title,
      
      description: noticia.data.description,
      
      thumbnail: noticia.data.thumbnail.url
    }));
  
    return{
      props:{
        noticias
      },
      revalidate: 86400
    };
  };
  