import { GetStaticPaths, GetStaticProps } from 'next';
import { useState } from 'react';
import Header from '../../../components/Header'
import MenuMobile from '../../../components/MenuMobile'

import { getPrismicClient } from '../../../services/prismic';

import {NoticiaContainer} from '../../../styles/NoticiaStyles'
import Prismic from '@prismicio/client'
import {RichText} from 'prismic-dom'


interface NoticiaProps{
  noticia:{
    slug: string;
    title: string;
    description: string;
    content:string;
  }
}





export default function Noticia({noticia}:NoticiaProps){
    const [menuIsVisible, setMenuIsVisible] = useState(false);
    return(
    <>
        <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
        <NoticiaContainer>

        <Header setMenuIsVisible={setMenuIsVisible}/>

        
        
              <main className="container">
                <h1>{noticia.title}</h1>
                <h2>{noticia.description}</h2>
                <div dangerouslySetInnerHTML={{__html: noticia.content}}>

                </div>
              </main>

            
        
        </NoticiaContainer>
        </>    
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient();
  const noticias = await prismic.query([
  Prismic.predicates.at('document.type', 'noticia')
  ]);
 
  const paths = noticias.results.map(noticia => ({
    params: {
      slug: noticia.uid,
      
    }
  }));


  return {
    paths,
    fallback: true
  };
};


export const getStaticProps: GetStaticProps = async context => {
  const prismic = getPrismicClient();
  const { slug } = context.params;

  const response = await prismic.getByUID('noticia', String(slug), {});

  const noticia = {
    slug: response.uid,
    title: response.data.title,
    description: response.data.description,
    content: RichText.asHtml(response.data.content),
    
  }
  
   
 


  return{
    props:{
     noticia
    },
    revalidate: 86400
  };
};

