import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import image1 from './assets/image1.jpg';
import image2 from './assets/image2.jpg';

import image4 from './assets/image4.jpg';
function Images(){
    return( <Swiper class="swiper"
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
       <img src={image2} alt=""/>
      </SwiperSlide>
      <SwiperSlide>
      <img  src={image1} alt=""/>
      </SwiperSlide>
      <SwiperSlide>
      <img src={image4} alt=""/>
      </SwiperSlide>
      
    </Swiper>)
}
export default Images;