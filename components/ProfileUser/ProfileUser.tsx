import Image from "next/image";
import { useDispatch } from "react-redux";
import { login, logout } from "@/reduxjs/store";
import { ProfileProps } from "@/types/typesdata";
import { NextPage } from "next";
import { SingleImageDropzone } from "../SingleImageDropzone/SingleImageDropzone";
import { useEdgeStore } from '@/lib/edgestore';
import { useState } from 'react';

const ProfileUser : NextPage<ProfileProps> = ({UserData}) : JSX.Element => {  
   
    const [file, setFile] = useState<File>();

    const [NewUsername, setNewUsername] = useState<string>("");

    const { edgestore } = useEdgeStore();

    const dispatch = useDispatch()

    async function FetchNewAvatar (NewAvatar : string) {
        const res = await fetch(`http://localhost:4000/UserDB/${UserData.id}` , {
          method : "PUT" , 
          body : JSON.stringify({id : UserData.id , UserName : UserData.username , Email : UserData.email , Password : UserData.password , Avatar : NewAvatar}),
          headers : {
            "Content-Type" : "application/json"
          }
        })
        const data = await res.json()
        dispatch(login({avatar : data.avatar}))
        alert("Baraye Moshahede Taghirat Yek Bar Az Account Logout Konid Va Dobare Vared Shavid")
    }

    async function FetchNewUsername (event : any) {
        event.target.innerText = "Please wait !"
        const res = await fetch(`http://localhost:4000/UserDB/${UserData.id}` , {
          method : "PUT" , 
          body : JSON.stringify({id : UserData.id , UserName : NewUsername , Email : UserData.email , Password : UserData.password , Avatar : UserData.avatar}),
          headers : {
            "Content-Type" : "application/json"
          }
        })
        const data = await res.json()
        dispatch(login({username : data.UserName}))
        event.target.innerText = "Complete !"
        alert("Baraye Moshahede Taghirat Yek Bar Az Account Logout Konid Va Dobare Vared Shavid")
        setNewUsername("")
    }

    async function DeleteAccount() {
      const res = await fetch(`http://localhost:4000/UserDB/${UserData.id}` , {
          method : "Delete" , 
        })
        const data = await res.json()
        dispatch(logout())
        alert("Baraye Moshahede Taghirat Yek Bar Az Account Logout Konid Va Dobare Vared Shavid")
    }

    async function ChangeAvatar (e : any) {
        e.currentTarget.innerText = "Please wait !"
        if (file) {
        const responseEdge = await edgestore.publicFiles.upload({
          file,
        });
        console.log(responseEdge.url);
        e.target.innerText = "Complete !" 
        await FetchNewAvatar(responseEdge.url)
      }
    }

    return ( 
        <div className="flex flex-row justify-center lg:py-20">
            <div className="lg:w-7/12 h-full bg-[#111928] lg:rounded-3xl p-10 w-full">
                    <h2 className="text-lg text-white "> ~ My Profile ~</h2>
                <div className="flex flex-row justify-start items-center px-10 py-10 border-b-[1px] border-zinc-500 ">
                    <Image src={UserData.avatar} className="rounded-full w-24 h-24" alt="" width={100} height={100}/>
                    <div className="flex flex-col">
                        <h3 className="text-white text-2xl ml-5">{UserData.username}</h3>
                        <h5 className="text-zinc-200 text-xs ml-5">{UserData.email}</h5>
                    </div>
                </div>
                <div className={UserData.id !== "LoginGithub" ? "block" : "hidden"}>
                    <h3 className="text-white text-lg pt-10">~ Profile Setting ~</h3>
                <div className="flex flex-col justify-start items-center">
                    <h5 className="text-white text-sm mt-5" >Change Avatar</h5>
                    <div className="py-10 items-center flex flex-col justify-center">         
                      <div>
                        <SingleImageDropzone
                          width={200}
                          height={200}
                          value={file}
                          onChange={(file) => {
                            setFile(file);
                          }}
                        />
                        <div className="flex flex-row justify-center mt-5">
                        <button className="bg-blue-600 text-white text-sm px-10 py-2 rounded-md hover:bg-blue-800" onClick={(e : any) => {
                          ChangeAvatar(e)
                        }} >
                          Upload !
                        </button>
                        </div>
                      </div>
                    </div>
                    <h5 className="text-white text-sm mt-5" >Change Username</h5>
                    <div className="py-10 items-center flex flex-col justify-center w-full">
                        <input value={NewUsername} type="text" placeholder="Enter New Username" className="lg:w-1/3 w-3/4 bg-transparent border-b-2 border-zinc-300 focus:border-white px-3 py-2 outline-none text-white text-sm" onChange={(e) => setNewUsername(e.target.value) }/>
                        <button onClick={(e : any) => {
                            FetchNewUsername(e)
                        }} className="bg-blue-600 text-white text-sm px-10 py-2 rounded-md hover:bg-blue-800 mt-10">Change it !</button>
                    </div>
                    </div>
                    </div>
                    <div className="flex flex-row mt-10 justify-center">
                        <button className="lg:text-base text-xs bg-zinc-100 rounded-md text-black lg:py-2 py-4 px-10 hover:border-2 hover:text-zinc-100 hover:border-zinc-100 hover:bg-transparent" onClick={() => dispatch(logout())}> Logout Your Account </button>
                        <button onClick={DeleteAccount} className="lg:text-base text-xs bg-red-700 rounded-md text-white lg:py-2 py-4 px-10 ml-5 hover:border-2 hover:text-red-700 hover:border-red-700 hover:bg-transparent"> Delete Your Account</button>
                    </div>
            </div>
        </div>
     );
}
 
export default ProfileUser;