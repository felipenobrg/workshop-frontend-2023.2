import { CarouselContainer, KnowMoreButton, KnowMoreContainer } from "./styles";
import CarouselImage1 from "../../../../assets/carousel-images/carousel1.jpg";
import CarouselImage2 from "../../../../assets/carousel-images/carousel2.jpg";
import CarouselImage3 from "../../../../assets/carousel-images/carousel3.jpg";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { ArrowCircleDown } from "phosphor-react";

export function Carousel() {
  return (
    <>
      <CarouselContainer>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={40}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          autoplay={{ delay: 1500 }}
        >
          <SwiperSlide>
            <KnowMoreContainer>
              <h1>
                Descubra 5 curiosidades <br /> sobre Star Wars 
              </h1>
              <KnowMoreButton>
                <a href="#curiosidades">Saiba mais <ArrowCircleDown size={23} /></a>
              </KnowMoreButton>
            </KnowMoreContainer>
            <img src={CarouselImage1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={CarouselImage3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={CarouselImage2} alt="" />
          </SwiperSlide>
        </Swiper>
      </CarouselContainer>
    </>
  );
}
