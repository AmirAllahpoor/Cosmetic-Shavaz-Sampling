import Image from "next/image";
import Head from "next/head";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { SelectorType } from "@/types/typesdata";
import { useRouter } from "next/router";
import Link from "next/link";
import NotFoundImage from "@/public/imgNotFound.png"


const NotFoundPage = () => {

    const selector = useSelector((state : SelectorType) => state.MyUserSlice)
        
    const router = useRouter()

    useEffect(() => {
        if (selector.username === "" && selector.email === "") {
          router.push("/auth/register");
        }
      }, [router , selector.username , selector.email]);

    return ( 
        <>
        <Head>
            <title>404 : Not Founded !</title>
        </Head>
        <div className="flex flex-row justify-center">
            <div className="flex flex-col md:mt-28 mt-32">
                <div className="md:w-[45rem] w-auto">
                    <Image src={NotFoundImage} className=" hue-rotate-[-50deg]" width={100} height={100} alt="" layout="responsive"/>    
                </div>
                <div className="text-center px-4 md:px-0">
                    <h1 className="md:text-xl text-base md:mt-0 mt-4 text-zinc-700 font-semibold">Oops, sorry, we could not find the page you are looking for</h1>
                    <h1 className="md:text-base text-sm md:mt-2 mt-4 text-zinc-700">Do you want to go to the main page, press the bottom button</h1>
                    <Link href="/">
                    <button type="button" className="
                    bg-indigo-700 md:mt-4 mt-6 text-white  md:w-1/4 w-40  h-10 rounded-xl hover:bg-white hover:text-indigo-700 
                    hover:border-2 hover:border-indigo-700
                    ">Go To Home !</button>
                    </Link>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default NotFoundPage;