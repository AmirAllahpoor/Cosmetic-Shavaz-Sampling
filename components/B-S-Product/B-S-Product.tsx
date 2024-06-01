import { BSProductProps } from "@/types/typesdata";
import Image from "next/image";

const Bsproduct = ({image , PrimaryPrice , SecondaryPrice , Offer , title} : BSProductProps) => {
    return ( 
        <>
        <div className="mt-2 flex flex-col justify-center items-center w-44 h-64 bg-white rounded-lg cursor-pointer border-[1px] border-zinc-500 py-5">
                <Image src={image} width={100} height={100} className="w-20" alt=""/>
                <h1 className="text-center text-sm text-zinc-600 mt-8 px-3">{title}</h1>
            <div className="flex flex-row justify-between w-full px-3 mt-5">
                <h2 className="text-pink-500 text-sm">{SecondaryPrice} Toman</h2>
                <h2 className="text-white bg-pink-500 rounded-md px-2 flex flex-row items-center text-xs">{Offer}%</h2>
            </div>
            <div className="flex flex-row justify-start w-full px-4">
                <h3 className="text-zinc-600 text-xs mt-1 line-through">{PrimaryPrice} Toman</h3>
            </div>
        </div>
        </>
     );
}
 
export default Bsproduct;