import { SelectorType } from "@/types/typesdata";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Head from "next/head";
import ProfileUser from "@/components/ProfileUser/ProfileUser";

const ProfilePage = () => {

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
            <title>فروشگاه اینترنتی شاواز | پروفایل </title>
        </Head>
        <ProfileUser UserData={selector}/>
        </>
     );
}
 
export default ProfilePage;