import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import { login } from "@/reduxjs/store";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { HomePageProps, ProductType, SelectorType } from "@/types/typesdata";
import SliderBanner from "@/components/SliderBanner/SliderBanner";
import ProductCategorization from "@/components/ProductCategorization/ProductCategorization";
import PromotionalBanner from "@/components/PromotionalBanner/PromotionalBanner";
import SuggestionCard from "@/components/SuggestionCard/SuggestionCard";
import BrandBanner from "@/components/BrandBanner/BrandBanner";

 const Home : React.FC<HomePageProps> = ({SunScreenData , MoisturizingData , WashingGelData , ShampooData}) => {

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
        <div className="flex flex-row justify-center">
          <div className="flex flex-wrap md:gap-14 gap-10 justify-center md:w-11/12 mt-5 py-10 w-full pr-5 lg:pr-0 md:pr-0 md:pl-0 pl-3">
            <SuggestionCard DataProduct={SunScreenData} BgColor="bg-purple-700"/>
            <SuggestionCard DataProduct={MoisturizingData} BgColor="bg-lime-600"/>
            <SuggestionCard DataProduct={WashingGelData} BgColor="bg-pink-600"/>
            <SuggestionCard DataProduct={ShampooData} BgColor="bg-orange-600"/>
          </div>
        </div>
        <BrandBanner />
      </>
    )


  }

export default Home;

export async function getServerSideProps() : Promise<{props : HomePageProps}> {
  const responseSunScreen = await fetch('http://localhost:4000/Products?category=SunScreen')
  const DataSunScreen : ProductType[] = await responseSunScreen.json()

  const responseMoisturizing = await fetch('http://localhost:4000/Products?category=Moisturizing')
  const DataMoisturizing : ProductType[] = await responseMoisturizing.json()

  const responseWashingGel = await fetch('http://localhost:4000/Products?category=WashingGel')
  const DataWashingGel: ProductType[] = await responseWashingGel.json()

  const responseShampoo = await fetch('http://localhost:4000/Products?category=Shampoo')
  const DataShampoo: ProductType[] = await responseShampoo.json()

  return {
    props : {
      SunScreenData : DataSunScreen.slice(0,6),
      MoisturizingData : DataMoisturizing.slice(0,6),
      WashingGelData : DataWashingGel.slice(0,6),
      ShampooData : DataShampoo.slice(0,6)
    }
  }
}
