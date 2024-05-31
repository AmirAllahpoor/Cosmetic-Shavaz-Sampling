import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import Image from 'next/image';
import { CiCirclePlus } from "react-icons/ci";
import { ProductType, SuggestionCPProps } from '@/types/typesdata';
import 'swiper/css';
import 'swiper/css/effect-cards';

const SuggestionCard : React.FC<SuggestionCPProps> = ({DataProduct , BgColor}) => {
    return ( 
        <>
        <Swiper effect={'cards'} grabCursor={true} modules={[EffectCards]} className="mySwiper md:w-[240px] w-[140px] md:h-[320px] h-[220px]">
            {
                DataProduct && (
                    DataProduct.map((SunScreen : ProductType) => {
                        return (
                            <>
                                <SwiperSlide key={SunScreen.id} className={`flex flex-col justify-center text-center rounded-2xl text-white font-semibold text-xl ${BgColor} px-2`}> 
                                    <div className="flex flex-row justify-center">
                                        <Image src={SunScreen.image} alt="" width={100} height={100} className='md:w-32 w-[4.5rem] mt-7'/>
                                    </div>
                                    <h3 className='md:text-lg text-xs mt-5'>{SunScreen.title}</h3>
                                    <div className="flex flex-row justify-between w-full px-2 md:mt-8 mt-4 border-t-[0.5px] border-white md:pt-3 pt-0 ">
                                        <h1 className='md:text-base text-[11px]'>{SunScreen.price} Toman</h1>
                                        <CiCirclePlus className="md:text-2xl text-lg md:mt-0 mt-1 cursor-pointer"/>
                                    </div>
                                </SwiperSlide>
                            </>
                        )
                    })
                )
            }
      </Swiper>
        </>
     );
}
 
export default SuggestionCard;