import { SelectorType } from "@/types/typesdata";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Head from "next/head";

const ProfilePage = () => {

    const selector = useSelector((state : SelectorType) => state.MyUserSlice)
    
    const router = useRouter()

    useEffect(() => {
        if (selector.username === "" && selector.email === "") {
          router.push("/auth/register");
        }
      }, [selector]);

    return ( 
        <>
        <Head>
            <title>فروشگاه اینترنتی شاواز | پروفایل </title>
        </Head>
        <div className="flex flex-row justify-center mt-10">
            <h1 className="text-zinc-700 font-bold md:text-3xl text-xl">My Profile</h1>
        </div>
        <div className="flex flex-row justify-center md:mt-20 mt-10">
            <div className="relative">
                <div className="flex flex-row justify-center rounded-2xl bg-[#ffffff35] backdrop-blur-lg md:w-96 w-80 h-[27rem] border-[1px] border-zinc-300 z-50">
                <div className="flex flex-col justify-center text-center">
                    <div className="w-40 ml-12">
                        <img className="rounded-3xl " src={selector.avatar} width={100} height={100} alt="" />
                    </div>
                    <h1 className="text-zinc-800 text-3xl font-semibold mt-5 "> {selector.username} </h1>
                    <h1 className="text-zinc-800 text-base mt-2"> {selector.email} </h1>
                </div>
            </div>
                <div className="bg-indigo-600 rounded-full w-40 h-40 absolute top-[-3rem] left-auto right-64 bottom-auto -z-50">
                </div>
                <div className="bg-zinc-600 rounded-full w-40 h-40 absolute top-auto left-64 right-auto bottom-[-3rem] -z-50">
                </div>
            </div>
        </div>
        </>
     );
}
 
export default ProfilePage;