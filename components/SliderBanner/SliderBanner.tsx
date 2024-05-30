import Image from "next/image";
import ImgSlider1 from "@/public/SliderPhoto1.jpeg"
import ImgSlider2 from "@/public/SliderPhoto2.jpeg"
import ImgSlider3 from "@/public/SliderPhoto3.jpeg"
import ImgSlider4 from "@/public/SliderPhoto4.jpeg"
import ImgSlider5 from "@/public/SliderPhoto5.jpeg"
import ImgSlider6 from "@/public/SliderPhoto6.jpeg"
import ImgSliderMobile1 from "@/public/SliderPhotoMobile1.jpg"
import ImgSliderMobile2 from "@/public/SliderPhotoMobile2.jpg"
import ImgSliderMobile3 from "@/public/SliderPhotoMobile3.jpg"
import ImgSliderMobile4 from "@/public/SliderPhotoMobile4.jpg"
import ImgSliderMobile5 from "@/public/SliderPhotoMobile5.jpg"
import ImgSliderMobile6 from "@/public/SliderPhotoMobile6.jpg"
import {Swiper , SwiperSlide} from "swiper/react"
import { Autoplay} from 'swiper/modules';
import "swiper/css"

const SliderBanner = () => {
    return ( 
        <>
        <Swiper autoplay={{delay : 3000 , disableOnInteraction : false}} modules={[Autoplay]} className=" w-full relative mt-10">
            <SwiperSlide className="w-full h-full cursor-pointer">
                <Image className="w-full md:block hidden" layout="responsive" src={ImgSlider1} alt=""/> 
                <Image className="w-full block md:hidden" layout="responsive" src={ImgSliderMobile1} alt=""/> 
            </SwiperSlide>
            <SwiperSlide className="w-full h-full cursor-pointer">
                <Image className="w-full md:block hidden" layout="responsive" src={ImgSlider2} alt=""/> 
                <Image className="w-full block md:hidden" layout="responsive" src={ImgSliderMobile2} alt=""/> 
            </SwiperSlide>
            <SwiperSlide className="w-full h-full cursor-pointer"> 
                <Image className="w-full md:block hidden" layout="responsive" src={ImgSlider3} alt=""/> 
                <Image className="w-full block md:hidden" layout="responsive" src={ImgSliderMobile3} alt=""/> 
            </SwiperSlide>
            <SwiperSlide className="w-full h-full cursor-pointer">
                <Image className="w-full md:block hidden" layout="responsive" src={ImgSlider4} alt=""/>
                <Image className="w-full block md:hidden" layout="responsive" src={ImgSliderMobile4} alt=""/>
            </SwiperSlide>
            <SwiperSlide className="w-full h-full cursor-pointer"> 
                <Image className="w-full md:block hidden" layout="responsive" src={ImgSlider5} alt=""/> 
                <Image className="w-full block md:hidden" layout="responsive" src={ImgSliderMobile5} alt=""/> 
            </SwiperSlide>  
            <SwiperSlide className="w-full h-full cursor-pointer"> 
                <Image className="w-full md:block hidden" layout="responsive" src={ImgSlider6} alt=""/> 
                <Image className="w-full block md:hidden" layout="responsive" src={ImgSliderMobile6} alt=""/> 
            </SwiperSlide>
        </Swiper>
        </>
     );
}
 
export default SliderBanner;