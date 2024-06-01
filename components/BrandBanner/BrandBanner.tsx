import Image from "next/image";
import { BrandBannerProps } from "@/types/typesdata";

const BrandBanner = ({image1 , image2 ,image3 , image4,} : BrandBannerProps) => {
    return ( 
        <div className="flex flex-row justify-center w-full py-10 mt-5">
            <div className="flex flex-wrap  justify-between w-full px-10 md:px-24 lg:px-16 xl:px-24  ">
           <div className="w-5/12 lg:w-1/5">
                <Image className="rounded-xl cursor-pointer" src={image1} width={100} height={100} layout="responsive"  alt=""/>
            </div> 
           <div className="w-5/12 lg:w-1/5">
                <Image className="rounded-xl cursor-pointer" src={image2} width={100} height={100} layout="responsive"  alt=""/>
            </div> 
           <div className="w-5/12 lg:w-1/5">
                <Image className="rounded-xl cursor-pointer mt-5 lg:mt-0" src={image3} width={100} height={100} layout="responsive"  alt=""/>
            </div> 
           <div className="w-5/12 lg:w-1/5">
                <Image className="rounded-xl cursor-pointer mt-5 lg:mt-0" src={image4} width={100} height={100} layout="responsive"  alt=""/>
            </div> 
            </div>
        </div>
     );
}
 
export default BrandBanner;