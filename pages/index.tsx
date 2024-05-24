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

  dispatch(login({username : session.data?.user?.name , email : session.data?.user?.email}))
   
   const selector = useSelector((state : SelectorType) => state.MyUserSlice)

   console.log(selector);
   
   async function LogOutHandel(){
    dispatch(logout())
   }

   const router = useRouter()
       
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
      <h1>HomePage</h1>
      {
        selector && (
          <>
              <h1>{selector.username}</h1>
              <h1>{selector.email}</h1>
              <button onClick={LogOutHandel}>LogOut</button>
          </>
        )
      }
      </>
    )


  }

export default Home
