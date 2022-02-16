import { useState } from "react";
import Header from "../components/Header";
import MenuMobile from "../components/MenuMobile";
import { HomeContainer } from '../styles/HomeStyles';

import HomeHero from "../components/HomeHero";
import Servicos from "../components/Servicos";
import Noticias from "../components/Noticias";
import { getPrismicClient } from "../services/prismic";
import { GetStaticProps } from "next";
import Prismic from '@prismicio/client'

interface Inoticia{
  slug: string;
  title: string;
  description: string;
  thumbnail: string;

}

interface HomeProps{
  noticias: Inoticia[];
}



 function Home({noticias}: HomeProps){
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    <>
      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
      <HomeContainer>
        <Header setMenuIsVisible={setMenuIsVisible}/>
    
        <HomeHero/>
        <main className="container">
          <Servicos/>
          <Noticias noticias={noticias}/>
        </main>
        
      
        
      </HomeContainer>
    </>
  );
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

export default Home;
