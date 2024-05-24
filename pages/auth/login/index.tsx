import LoginComponent from "@/components/login/Login"
import Head from "next/head";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { SelectorType } from "@/types/typesdata";

const LoginPage = () => {

  const selector = useSelector((state : SelectorType) => state.MyUserSlice)

  const router = useRouter()

  useEffect(() => {
    if (selector.username !== "" && selector.email !== "") {
      router.push("/");
    }
  }, [selector]);

    
    return ( 
        <>
        <div className="absolute top-0 flex flex-row justify-center w-full h-screen bg-[#212121]">
            <Head>
                <title>فروشگاه اینترنتی شاواز | ورود</title>
            </Head>
            <LoginComponent headtext="Login to the account" textbtn="Login" textlast="dont have account ? create now!" pathgo="register"/>
            </div>
        </>
     );`  `
}
 
export default LoginPage;
