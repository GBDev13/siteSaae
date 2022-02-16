import { Container } from './styles';
import bannerImg from '../../assets/banner.jpg';
import slider1 from '../../assets/slider1.jpg';
import slider2 from '../../assets/slider2.jpg';
import Slider from "react-slick";





function HomeHero() {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Container>
     
       

      <Slider {...settings}>
      <div>
        <h3><img src={bannerImg} alt="Logo"/></h3>
      </div>
      <div>
        <h3><img src={slider1} alt="Logo"/></h3>
      </div>
      <div>
        <h3><img src={slider2} alt="Logo"/></h3>
      </div>
     
    
     
    </Slider>
    </Container>
  );
};

export default HomeHero;


