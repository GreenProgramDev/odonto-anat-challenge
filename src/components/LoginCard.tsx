'use client'
import Image from 'next/image'
import LogoImg from '../../public/assets/logo.svg' 
import { useState } from "react";
import InputComponents from "./InputAccess";

interface ILoginCard {   
    children?: string;
    onClick?: React.MouseEventHandler;

}

export const LoginCard = (props:ILoginCard) => {

    const [showLogins, setShowLogins] = useState(false);

    return (

        <div className="flex flex-col gap-5 items-center h-screen justify-center">
            <Image className='w-50 pb-5' src={LogoImg} alt="logotipo" />

            <div className="flex flex-col gap-2 w-screen px-6 " >
                <InputComponents placeholder="Insert name" type="text">User Name</InputComponents>
                <InputComponents placeholder="***********" type="password">Password</InputComponents>
            </div>
            <div className="flex w-full justify-between px-6">
                <button className="text-cyan-50 border-l-2 border-b-2 rounded-lg px-2" onClick={props.onClick}>Log In</button>
                <button className="text-cyan-50 border-r-2 border-b-2  border-cyan-50 rounded-lg px-2" >Create new account</button>
            </div>
        </div>

    
    )
}