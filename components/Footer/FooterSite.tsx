import Image from "next/image";
import LogoShavaz from "@/public/shavazlogotype.png"
import { FooterMaterial } from "../FooterMaterial/FooterMaterial";

const FooterSite = () => {
    return ( 
        <>
        <div className="flex flex-row justify-center items-center lg:pl-12 lg:pr-20 pr-5 py-10">
            <div className="lg:w-10/12 w-full border-t-[2px] border-zinc-300">
            </div>
                <Image src={LogoShavaz} className="hue-rotate-[300deg] w-20 ml-8 -z-10" alt="" />
        </div>
        <div className="flex flex-row justify-center lg:px-12">
            <div className="lg:w-11/12 w-full">
                <FooterMaterial />
            </div>
        </div>
        </>
     );
}
 
export default FooterSite;