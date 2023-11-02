'use client'

import Image from 'next/image'
import LogoImg from '../../public/assets/logo.svg' 
import InputComponents from "./InputAccess";
import Link from 'next/link';

interface IRegisterCard {
    onClick?: React.MouseEventHandler;
}

export const RegisterCard = (props:IRegisterCard) => {

    return (
        <div className="flex flex-col gap-5 items-center h-screen justify-center">
            <Image className='w-50 pb-5' src={LogoImg} alt="logotipo" />
            <form action="" className='flex flex-col w-72 gap-2 '>
                <div className="flex flex-col gap-2 " >
                    <InputComponents placeholder="Insert name" type="text">User Name</InputComponents>
                    <InputComponents placeholder="***********" type="password">Password</InputComponents>
                    <InputComponents placeholder="exemplo@ex.com" type="email">E-mail</InputComponents>
                </div>
                <div className="flex w-full justify-between pt-3 items-center">
                    <button type='submit' className="text-cyan-50 text-sm border-l-2 border-b-2 rounded-lg px-2" onClick={props.onClick}>Sign Up</button>
                    <Link href="/account/login"><p className="text-cyan-600 text-xs ">Already have an account? <button className="text-cyan-50 text-xs border-r-2 border-b-2  border-cyan-50 rounded-lg px-1 " >Acess</button></p></Link>

                </div>
            </form>
        </div>
    )
}