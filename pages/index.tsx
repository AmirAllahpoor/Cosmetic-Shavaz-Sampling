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
import SliderSuprise from "@/components/SliderSuprise/SlideSuprise";
import ProductSuprise from "@/components/ProductSuperise/ProductSuprise";
import Bsproduct from "@/components/B-S-Product/B-S-Product";
import BrandBanner2 from "@/components/BrandBanner2/BrandBanner2";

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
        <SliderSuprise />
        <ProductCategorization />
        <PromotionalBanner />
        <div className="flex flex-row justify-center overflow-hidden">
          <div className="flex flex-wrap md:gap-14 gap-10 justify-center md:w-11/12 mt-5 py-10 w-full pr-5 lg:pr-0 md:pr-0 md:pl-0 pl-3">
            <SuggestionCard DataProduct={SunScreenData} BgColor="bg-purple-600"/>
            <SuggestionCard DataProduct={MoisturizingData} BgColor="bg-lime-500"/>
            <SuggestionCard DataProduct={WashingGelData} BgColor="bg-pink-500"/>
            <SuggestionCard DataProduct={ShampooData} BgColor="bg-orange-500"/>
          </div>
        </div>
        <BrandBanner image1="/BrandBanner1.jpg" image2="/BrandBanner2.jpg" image3="/BrandBanner3.jpg" image4="/BrandBanner4.jpg"/>
        <div className="w-full flex flex-row justify-center mt-5">
          <div className="w-11/12 px-7">
            <h1 className="md:text-2xl text-xl font-semibold text-zinc-500">Best-Selling Products</h1>
          </div>
        </div>
        <div className="w-full flex flex-row justify-center mt-5">
          <div className="md:w-11/12 w-full md:px-7 px-2 flex flex-wrap justify-between">
            <Bsproduct title="My sunscreen fluid, capacity 50 ml" image="/B-S-PhotoProduct1.jpg" PrimaryPrice="265,000" SecondaryPrice="232,200" Offer="12"/>
            <Bsproduct title="Toner Vitalier Activit model, capacity 200 ml" image="/B-S-PhotoProduct2.jpg" PrimaryPrice="143,500" SecondaryPrice="86,100" Offer="40"/>
            <Bsproduct title="Kozarex skin serum, capacity 100 ml" image="/B-S-PhotoProduct3.jpg" PrimaryPrice="1,300,000" SecondaryPrice="899,000" Offer="31"/>
            <Bsproduct title="Prime sunscreen fluid with a capacity of 40 ml" image="/B-S-PhotoProduct4.jpg" PrimaryPrice="517,000" SecondaryPrice="361,900" Offer="30"/>
            <Bsproduct title="Serita eyelash strengthening solution, capacity 8 ml" image="/B-S-PhotoProduct5.jpg" PrimaryPrice="689,000" SecondaryPrice="585,650" Offer="15"/>
            <Bsproduct title="Colorless code Flormar make-up fixing powder" image="/B-S-PhotoProduct6.jpg" PrimaryPrice="650,000" SecondaryPrice="487,500" Offer="25"/>
          </div>
        </div>
        <BrandBanner image1="/BrandBanner5.jpg" image2="/BrandBanner6.jpg" image3="/BrandBanner7.jpg" image4="/BrandBanner8.jpg"/>
        <BrandBanner2 />
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
