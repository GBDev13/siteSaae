import { useState } from 'react';
import Header from '../../../components/Header'
import MenuMobile from '../../../components/MenuMobile'
import NoticiaContent from '../../../components/NoticiaContent';

import {NoticiaContainer} from '../../../styles/NoticiaStyles'


export default function Noticia(){
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
              <NoticiaContent  
              title="Grêmio acerta a contratação de Roger Machado para substituir Vagner Mancinio"
              description="Treinador está de volta ao clube depois de cinco anos junto com o preparador físico Paulo Paixãos"
              date="18/19/2022"
              content="Juntam com o treinador chegam os auxiliares Roberto Ribas e James Freitas, o coordenador da preparaçaõ física Paulo Paixão e o analista de desempenho Jussãn Anjolin. O clube convocou uma entrevista coletiva no início da noite para anunciar a nova comissão técnica.

              - Gostaria de dizer que o Roger é um conhecido desde 1994, trabalhou comigo e com o Sergio (Vazques, diretor), na base e no departamento de futebol profissional. Em 2000 foi meu jogador quando era executivo, acompanhei a trajetória como treinador, passou pelo Grêmio, deixou uma bela equipe, que teve seus seguidores com conquistas de títulos, trabalhou em grandes clubes brasileiros e conhece onde vai trabalhar - comentou o vice de futebol Denis Abrahão.
              
              "
            />
        </main>

            
        
        </NoticiaContainer>
        </>    
    )
}