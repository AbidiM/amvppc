import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import image1 from './assets/slider/image1.jpg';
import Amphitheatre from './assets/slider/Amphitheatre.jpg';

import image4 from './assets/slider/image4.jpg';
function Images(){
    return(    <Swiper style={{position:"absolute",top:'0px',height:"600px" }}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide><img style={{width:"100%",height:"600px" }}  src={image1} alt=''/></SwiperSlide>
        <SwiperSlide><img style={{width:"100%",height:"600px" }} src={Amphitheatre} alt=''/></SwiperSlide>
        <SwiperSlide><img style={{width:"100%",height:"600px" }} src={image4} alt=''/></SwiperSlide>
        
      </Swiper>)
}
export default Images;