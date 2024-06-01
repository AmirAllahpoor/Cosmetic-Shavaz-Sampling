import Image from "next/image";
import BrandBanner2Image1 from "@/public/BrandBanner2-1.jpg"
import BrandBanner2Image2 from "@/public/BrandBanner2-2.jpg"
import BrandBanner2Image3 from "@/public/BrandBanner2-3.jpg"

const BrandBanner2 = () => {
    return ( 
        <>
        <div className="flex flex-row justify-center w-full md:py-10 mt-5">
            <div className="flex flex-wrap justify-center w-full px-10 md:px-24 lg:px-16 xl:px-24  ">
           <div className="w-6/12 lg:w-1/3 md:px-4 px-1">
                <Image className="rounded-xl cursor-pointer" src={BrandBanner2Image1} width={100} height={100} layout="responsive"  alt=""/>
            </div> 
           <div className="w-6/12 lg:w-1/3 md:px-4 px-1">
                <Image className="rounded-xl cursor-pointer" src={BrandBanner2Image2} width={100} height={100} layout="responsive"  alt=""/>
            </div> 
           <div className="w-6/12 lg:w-1/3 md:px-4 px-1">
                <Image className="rounded-xl cursor-pointer mt-5 lg:mt-0" src={BrandBanner2Image3} width={100} height={100} layout="responsive"  alt=""/>
            </div> 
            </div>
        </div>
        </>
     );
}
 
export default BrandBanner2;