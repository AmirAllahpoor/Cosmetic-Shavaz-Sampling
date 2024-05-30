import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import LogoType from "@/public/shavazlogotype.png"
import BgRegis from "@/public/imgaccount.png"
import {signIn} from "next-auth/react"
import { NextPage } from "next";
import { RegisProps, UserType } from "@/types/typesdata";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { useState } from "react";
import { MdAlternateEmail } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import Link from "next/link";
import {useForm} from "react-hook-form"
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import { useRouter } from "next/router";


const RegisterComponent : NextPage<RegisProps> = ({headtext , textbtn , pathgo , textlast}) : JSX.Element => {

    const Router = useRouter()

    const [ShowPass , SetShowPass] = useState<boolean>(false)

    const schema = yup.object().shape({
        UserName : yup.string().required(`Filling this field is mandatory`),
        Email : yup.string().email('Your email format is incorrect').required('Filling this field is mandatory'),
        Password : yup.string().min(6 ,'The minimum allowed password is 6 characters').max(14 , 'The maximum allowed password is 14 characters').required('Filling this field is mandatory'),
    })

    const {register , handleSubmit , formState : {errors}} = useForm({resolver : yupResolver(schema)})

    async function SignUpApp() : Promise<void> {
        signIn("", {
            callbackUrl : "http://localhost:3000/"  
        })
    }

    const SubmitForm = async (data : UserType) => {
        const lengthdata = await fetch("http://localhost:4000/UserDB")
        const datafetch2 = await lengthdata.json()

        const res = await fetch("http://localhost:4000/UserDB" , {
            method : "POST",
            body : JSON.stringify({ id: datafetch2.length + 2 , UserName : data.UserName , Email : data.Email , Password : data.Password , Avatar : "https://images.macrumors.com/t/n4CqVR2eujJL-GkUPhv1oao_PmI=/1600x/article-new/2019/04/guest-user-250x250.jpg"}),
            headers : {
                "Content-Type" : "application/json",
            },
        })
        const mydata = await res.json()
        Router.push("/auth/login")
    }
   
    return ( 
            <div className=" bg-white xl:rounded-xl shadow-md shadow-[#2c2c2c83]  xl:w-[65rem] xl:h-[35rem] xl:mt-24 w-screen h-screen mt-0 absolute top-0 ">
                <div className="flex flex-row xl:justify-around xl:mt-0 mt-24 md:justify-center ">
                <div className="flex flex-col justify-center text- center xl:w-1/2 w-full">
                    <form className="flex flex-col  items-center h-full" onSubmit={handleSubmit(SubmitForm)}>
                    <div className="w-20 mt-10">
                        <Image className="hue-rotate-[300deg]" src={LogoType} alt="" width={100} height={100} layout="responsive"/>         
                    </div>
                        <h1 className="mt-7 text-xl font-semibold text-zinc-800"> {headtext} </h1>
                        <div className="flex flex-row w-3/4 md:w-96">
                        <input autoComplete="off" type="text" placeholder="Enter your username" {...register("UserName")}  className="w-full ml-5 h-12 border-[1px] border-zinc-300 rounded-lg pl-4  text-zinc-700 text-sm outline-none mt-7 focus:border-zinc-500"/>
                        <FaUserCircle className="relative right-10 top-10 text-xl text-zinc-400 hover:text-zinc-600"/>
                        </div>
                            <div className=" block h-1">
                            {
                               errors.UserName && (
                                    <h5 className="text-xs text-red-600 mt-2">{errors.UserName?.message}</h5>
                                )
                             }
                            </div>
                        <div className="flex flex-row w-3/4 md:w-96">
                        <input autoComplete="off"  type="text" placeholder="Enter your email" {...register("Email")} className="w-full ml-5 h-12 border-[1px] border-zinc-300 rounded-lg  pl-4 text-zinc-700 text-sm outline-none mt-7 focus:border-zinc-500"/>
                        <MdAlternateEmail className="relative right-10 top-10 text-xl text-zinc-400 hover:text-zinc-600"/>
                        </div>
                            <div className=" block h-1">
                            {
                                errors.Email && (
                                    <h5 className="text-xs text-red-600 mt-2">{errors.Email?.message}</h5>
                                )
                             }
                            </div>
                        <div className="flex flex-row w-3/4 md:w-96 ">
                        <input autoComplete="off" type={ShowPass ? "text" :"password" } {...register("Password")} placeholder="Enter your password" className=" w-full ml-5 h-12 border-[1px] border-zinc-300 rounded-lg  pl-4 text-zinc-700 text-sm outline-none mt-7 focus:border-zinc-500"/>
                       { ShowPass ?  <IoMdEyeOff className="relative right-10 top-10 text-xl text-zinc-400 hover:text-zinc-600"  onClick={() => SetShowPass(!ShowPass)} />  : <IoEye className="relative right-10 top-10 text-xl text-zinc-400 hover:text-zinc-600" onClick={() => SetShowPass(!ShowPass)} /> }
                        </div>
                            <div className=" block h-1">
                            {
                                errors.Password && (
                                    <h5 className="text-xs text-red-600 mt-2">{errors.Password?.message}</h5>
                                )
                             }
                            </div>
                        <button type="submit" className="bg-zinc-800 w-2/3 md:w-[21.5rem]  h-10 text-white font-semibold rounded-lg shadow-md shadow-[#36363670] hover:text-zinc-800 hover:bg-white
                         hover:shadow-none hover:transition-all hover:duration-[300ms transition-all duration-[300ms] hover:border-2 hover:border-zinc-800 mt-10">{textbtn}</button>
                        <div className="flex flex-row md:justify-around justify-center w-2/3 md:w-96 mt-8">
                            <button type="button" onClick={SignUpApp} className="md:w-full w-20 flex flex-row justify-evenly text-xs"><FaGithub className="text-2xl"/> <p className="mt-1 md:block hidden">{textbtn} With Github</p> </button>
                            <button type="button" onClick={SignUpApp} className="md:w-full w-20 flex flex-row justify-evenly text-xs"><FcGoogle className="text-2xl"/> <p className="mt-1 md:block hidden">{textbtn} With Google</p> </button>
                        </div>
                        <div className="mt-6">
                            <Link href={`./${pathgo}`}>
                                <h5 className="text-xs text-indigo-600">{textlast}</h5>
                            </Link>
                        </div>
                    </form>
                </div>
                <div className="xl:w-[26rem]  xl:mt-36 ">
                    <Image className="rounded-r-lg hidden xl:block" src={BgRegis} alt="" width={100} height={100} layout="responsive" loading="lazy" />
                </div>
                </div>
            </div>
     );
}
 
export default RegisterComponent;
