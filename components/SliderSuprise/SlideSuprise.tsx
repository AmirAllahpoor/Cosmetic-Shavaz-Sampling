import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import SupriseImage from "@/public/SupriseImage.png"
import { Swiper , SwiperSlide } from 'swiper/react';
import ProductSuprise from "@/components/ProductSuperise/ProductSuprise";
import 'swiper/css';

// دیتای این اسلایدر به صورت استایتک و پیشنهاد جدیدی داده نمیشود
// The data of this slider is static and no new offer is given.

const SliderSuprise = () => {

    return ( 
        <div className="flex flex-row justify-center w-full mt-14">
            <div className="flex flex-row justify-center w-10/12 h-72">
                <div className="bg-[#7c45d4] rounded-lg w-full h-full flex flex-row p-4">
                    <div className="flex flex-col items-center text-center justify-center w-60 h-full">
                        <div className="w-32">
                            <Image src={SupriseImage} className="mt-4" alt=""/>
                        </div>
                        <h1 className="text-white font-semibold text-lg mt-5">Suprise of the day</h1>
                        <button type="button" className="text-white flex flex-row justify-center items-center border-2 w-2/3 mt-5 h-8 border-white rounded-md">View all <IoIosArrowForward  className="text-lg ml-1"/> </button>
                    </div>
                    <div className="overflow-hidden w-full h-full ml-8 flex flex-row">
                        <Swiper slidesPerView={4} spaceBetween={10}>
                            <SwiperSlide> <ProductSuprise image="/SupriseProductIMG1.jpg" PrimaryPrice="74,000" SecondaryPrice="56,980" Offer="23"/> </SwiperSlide>
                            <SwiperSlide> <ProductSuprise image="/SupriseProductIMG2.jpg" PrimaryPrice="239,500" SecondaryPrice="143,700" Offer="40"/> </SwiperSlide>
                            <SwiperSlide> <ProductSuprise image="/SupriseProductIMG3.jpg" PrimaryPrice="598,000" SecondaryPrice="508,300" Offer="15"/> </SwiperSlide>
                            <SwiperSlide> <ProductSuprise image="/SupriseProductIMG4.jpg" PrimaryPrice="174,000" SecondaryPrice="52,350" Offer="70"/> </SwiperSlide>
                            <SwiperSlide> <ProductSuprise image="/SupriseProductIMG5.jpg" PrimaryPrice="739,000" SecondaryPrice="517,300" Offer="30"/> </SwiperSlide>
                            <SwiperSlide> <ProductSuprise image="/SupriseProductIMG6.jpg" PrimaryPrice="103,500" SecondaryPrice="96,250" Offer="7"/> </SwiperSlide>
                            <SwiperSlide> <ProductSuprise image="/SupriseProductIMG7.jpg" PrimaryPrice="343,500" SecondaryPrice="171,750" Offer="50"/> </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default SliderSuprise;