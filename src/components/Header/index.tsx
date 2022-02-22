/* eslint-disable jsx-a11y/anchor-is-valid */
import { Container } from "./styles";

import logoImg from '../../assets/logobranca.png';

import {FaInstagram, FaWhatsapp,FaFacebookSquare } from 'react-icons/fa';
import { RiMenu3Fill } from 'react-icons/ri';

function Header({ setMenuIsVisible }) {
  return (
    <Container>
      <section>
        <a href="/">
        <img src={logoImg} alt="Logo"/>
        </a>
        
        <nav>
          <a href="/">Home</a>
          <a href="#">Agencia Virtual</a>
          <a href="/noticias">Noticias</a>
          <a href="#">Sobre Nós</a>
        </nav>
      </section>

      <section>
        <FaInstagram size={30}/>
        <FaWhatsapp size={30} />
        <FaFacebookSquare size={30} />
        <RiMenu3Fill onClick={() => setMenuIsVisible(true)} className="mobile"/>
      </section>
    </Container>
  )
}
export default Header;
