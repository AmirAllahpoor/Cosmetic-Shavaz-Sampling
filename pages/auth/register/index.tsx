import RegisterComponent from "@/components/Register/Register";
import Head from "next/head";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { SelectorType } from "@/types/typesdata";

const RegisterPage = () => {

  const selector = useSelector((state : SelectorType) => state.MyUserSlice)

  const router = useRouter()

  useEffect(() => {
    if (selector.username !== "" && selector.email !== "") {
      router.push("/");
    }
  }, [selector]);
    
    return ( 
        <>
        <div className="absolute top-0 flex  justify-center w-full h-screen bg-[#212121]">
            <Head>
                <title>فروشگاه اینترنتی شاواز | ثبت نام</title>
            </Head>
            <RegisterComponent headtext="Create an account" textbtn="SignUp" textlast="have a account ? login now!" pathgo="login"/>
            </div>
        </>
     );
}
 
export default RegisterPage;
