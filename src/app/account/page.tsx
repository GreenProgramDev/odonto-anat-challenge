'use client'

import Button from "@/components/Button"
import Image from 'next/image'
import LogoImg from '../../../public/assets/logo.svg' 
import Link from "next/link"

export default function Welcome() {    
    
    return (
        <>

            <div className="bg-black min-h-screen flex flex-col gap-8 justify-center items-center ">
                <Image className='w-50' src={LogoImg} alt="logotipo" />
                <div className="flex flex-col items-center gap-5">
                    <div className="flex flex-col items-center gap-1">
                        <h2 className="text-cyan-400 font-bold">Welcome to Challenge</h2>
                        <p className="text-cyan-800 text-center w-screen px-10">Access whit your account or create new, for aces the content</p>
                    </div>
                    <div className="flex flex-col gap-3">
                    <Link href="/account/login"><Button  >Access Account</Button></Link>
                    <Link href="/account/register"><Button >Create an Account</Button></Link>
                    </div>
                </div>
            </div>             



        </>
    )
}