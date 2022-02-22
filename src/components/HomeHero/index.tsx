import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { Navigation, Pagination } from 'swiper';
import { Container } from './styles';
import bannerImg from '../../assets/banner.jpg';
import slider1 from '../../assets/slider1.jpg';
import slider2 from '../../assets/slider2.jpg';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function HomeHero() {
  return (
    <Container>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination
        modules={[Navigation, Pagination]}
        loop
      >
        <SwiperSlide>
          <Image src={bannerImg} alt="Logo" layout="fill" objectFit="cover" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={slider1} alt="Logo" layout="fill" objectFit="cover" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={slider2} alt="Logo" layout="fill" objectFit="cover" />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}

export default HomeHero;
