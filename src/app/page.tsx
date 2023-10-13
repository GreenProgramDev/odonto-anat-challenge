'use client'
import { useState } from 'react'
import Image from 'next/image'
import LogoImg from '../assets/logo.svg' 
import Button from '@/components/Button'
import Menu from '@/menu/Menu'

export default function Home() {

    const [displayHome, setDisplayHome] = useState('block')
    const [displayMenu, setDisplayMenu] = useState('none')

    const handleButtonClick = () => {
        setDisplayHome('none');
        setDisplayMenu('block');
    }


    return (
    <main className="" >
        <>
            <div style={{display: displayHome}}  >
                <div className={` gap-10 flex flex-col justify-center items-center w-screen h-screen `}>
                    <Image src={LogoImg} width={193} height={59} alt="" />
                    <Button onClick={handleButtonClick}>Start</Button>
                </div>
            </div>

            <div style={{display: displayMenu}}>
                <div className={` flex flex-col justify-center items-center `}>
                    <Menu/>
                </div>
            </div>
        </>
    </main>

  )
}
