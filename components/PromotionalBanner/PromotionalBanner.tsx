import Image from "next/image";
import PromotionalImg1 from "@/public/LinkSlide1.jpg"
import PromotionalImg2 from "@/public/LinkSlide2.jpg"

const PromotionalBanner = () => {
    return ( 
        <div className="flex md:flex-row flex-col justify-center overflow-hidden md:gap-10 gap-5">
            <div className="md:w-5/12 w-full md:px-0 ">
                <Image src={PromotionalImg1} className="md:rounded-2xl cursor-pointer" alt="" layout="responsive" />
            </div>
            <div className="md:w-5/12 w-full md:px-0 ">
                <Image src={PromotionalImg2} className="md:rounded-2xl cursor-pointer" alt="" layout="responsive" />
            </div>
        </div>
     );
}
 
export default PromotionalBanner;