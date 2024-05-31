import Image from "next/image";
import BrandBannerImg1 from "@/public/BrandBanner1.jpg"
import BrandBannerImg2 from "@/public/BrandBanner2.jpg"
import BrandBannerImg3 from "@/public/BrandBanner3.jpg"
import BrandBannerImg4 from "@/public/BrandBanner4.jpg"
const BrandBanner = () => {
    return ( 
        <div className="flex flex-row justify-center w-full py-10">
            <div className="flex flex-wrap  justify-between w-full px-10 md:px-24 lg:px-16 xl:px-24  ">
           <div className="w-5/12 lg:w-1/5">
                <Image className="rounded-xl" src={BrandBannerImg1} layout="responsive"  alt=""/>
            </div> 
           <div className="w-5/12 lg:w-1/5">
                <Image className="rounded-xl" src={BrandBannerImg2} layout="responsive"  alt=""/>
            </div> 
           <div className="w-5/12 lg:w-1/5">
                <Image className="rounded-xl mt-5 lg:mt-0" src={BrandBannerImg3} layout="responsive"  alt=""/>
            </div> 
           <div className="w-5/12 lg:w-1/5">
                <Image className="rounded-xl mt-5 lg:mt-0" src={BrandBannerImg4} layout="responsive"  alt=""/>
            </div> 
            </div>
        </div>
     );
}
 
export default BrandBanner;