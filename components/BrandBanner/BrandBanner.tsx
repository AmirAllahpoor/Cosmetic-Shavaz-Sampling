import Image from "next/image";
import BrandBannerImg1 from "@/public/BrandBanner1.jpg"
import BrandBannerImg2 from "@/public/BrandBanner2.jpg"
import BrandBannerImg3 from "@/public/BrandBanner3.jpg"
import BrandBannerImg4 from "@/public/BrandBanner4.jpg"
const BrandBanner = () => {
    return ( 
        <div className="flex flex-row justify-center w-full py-10">
            <div className="flex md:flex-row flex-col justify-between w-11/12 xl:px-7 ">
           <div className="w-full">
                <Image className="rounded-xl" src={BrandBannerImg1} layout="responsive"  alt=""/>
            </div> 
           <div className="w-full md:mt-0 mt-10 md:ml-10">
                <Image className="rounded-xl" src={BrandBannerImg2} layout="responsive"  alt=""/>
            </div> 
           <div className="w-full md:mt-0 mt-10 md:ml-10">
                <Image className="rounded-xl" src={BrandBannerImg3} layout="responsive"  alt=""/>
            </div> 
           <div className="w-full md:mt-0 mt-10 md:ml-10">
                <Image className="rounded-xl" src={BrandBannerImg4} layout="responsive"  alt=""/>
            </div> 
            </div>
        </div>
     );
}
 
export default BrandBanner;