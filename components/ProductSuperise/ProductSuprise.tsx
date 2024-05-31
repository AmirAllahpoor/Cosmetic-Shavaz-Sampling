import { ProductSupriseProps } from "@/types/typesdata";
import Image from "next/image";

const ProductSuprise = ({image , PrimaryPrice , SecondaryPrice , Offer} : ProductSupriseProps) => {

    return ( 
        <div className="flex flex-col justify-center items-center w-52 h-full bg-white rounded-lg cursor-pointer">
                <Image src={image} width={100} height={100} className="w-32" alt=""/>
            <div className="flex flex-row justify-between w-full px-5 mt-8">
                <h2 className="text-pink-500 text-base">{SecondaryPrice} Toman</h2>
                <h2 className="text-white bg-pink-500 rounded-md px-2 flex flex-row items-center text-xs">{Offer}%</h2>
            </div>
            <div className="flex flex-row justify-start w-full px-5">
                <h3 className="text-zinc-600 text-xs mt-1 line-through">{PrimaryPrice} Toman</h3>
            </div>
        </div>
     );
}
 
export default ProductSuprise;