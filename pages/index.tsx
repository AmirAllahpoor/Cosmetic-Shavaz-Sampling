import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import { login } from "@/reduxjs/store";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { SelectorType } from "@/types/typesdata";
import SliderBanner from "@/components/SliderBanner/SliderBanner";
import ProductCategorization from "@/components/ProductCategorization/ProductCategorization";
import PromotionalBanner from "@/components/PromotionalBanner/PromotionalBanner";

 const Home = () => {
   
   const dispatch = useDispatch()
   
   const session = useSession()

   const router = useRouter()
   
   dispatch(login({username : session.data?.user?.name , email : session.data?.user?.email , avatar : session.data?.user?.image}))
    
    const selector = useSelector((state : SelectorType) => state.MyUserSlice)
        
     useEffect(() => {
    if (selector.username === "" && selector.email === "") {
      router.push("/auth/register");
    }
  }, [router , selector.username , selector.email]);
   
    return (
      <>
      <Head>
        <title>فروشگاه اینترنتی شاواز | خرید لوازم آرایشی ، بهداشتی ، عطر | فروشگاه شاواز</title>
      </Head>
        <SliderBanner />
        <ProductCategorization />
        <PromotionalBanner />
      </>
    )


  }

export default Home
