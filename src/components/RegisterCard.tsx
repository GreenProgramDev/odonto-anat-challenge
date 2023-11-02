'use client'

import Image from 'next/image'
import LogoImg from '../../public/assets/logo.svg' 
import InputComponents from "./InputAccess";

interface IRegisterCard {
    children?: string;
    onClick?: React.MouseEventHandler;
}

export const RegisterCard = (props:IRegisterCard) => {

    return (
        <div className="flex flex-col gap-5 items-center h-screen justify-center">
            <Image className='w-50 pb-5' src={LogoImg} alt="logotipo" />
            <div className="flex flex-col gap-2 w-screen px-6 " >
                <InputComponents placeholder="Insert name" type="text">User Name</InputComponents>
                <InputComponents placeholder="***********" type="password">Password</InputComponents>
                <InputComponents placeholder="exemplo@ex.com" type="email">E-mail</InputComponents>
            </div>
            <div className="flex w-full justify-between px-6">
                <button className="text-cyan-50 border-l-2 border-b-2 rounded-lg px-2">Sign Up</button>
               <p className="text-cyan-600 text-xs ">Already have an account? <button className="text-cyan-50 text-base border-r-2 border-b-2  border-cyan-50 rounded-lg px-2" onClick={props.onClick}>{props.children}</button></p>
            </div>

        </div>
    )
}