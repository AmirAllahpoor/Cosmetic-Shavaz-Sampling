import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "@/reduxjs/store";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { SelectorType } from "@/types/typesdata";

 const Home = () => {
   
   const dispatch = useDispatch()
   
   const session = useSession()

   const router = useRouter()
   
   dispatch(login({username : session.data?.user?.name , email : session.data?.user?.email}))
    
    const selector = useSelector((state : SelectorType) => state.MyUserSlice)
        
     useEffect(() => {
    if (selector.username === "" && selector.email === "") {
      router.push("/auth/register");
    }
  }, [selector]);
   
    return (
      <>
      <Head>
        <title>فروشگاه اینترنتی شاواز | خرید لوازم آرایشی ، بهداشتی ، عطر | فروشگاه شاواز</title>
      </Head>
      <h1 className="text-semibold font-sans text-2xl text-zinc-700 m-20">HomePage</h1>
      </>
    )


  }

export default Home
