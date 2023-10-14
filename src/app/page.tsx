'use client'
import { useState } from 'react'
import Image from 'next/image'
import LogoImg from '../../public/assets/logo.svg' 
import Button from '@/components/Button'
import Menu from '@/app/Menu/page'

export default function MyApp() {

    const [showMenu, setShowMenu] = useState(false)

    const handleButtonClick = () => {
        setShowMenu(!showMenu)
    }

    return (
    <main className="bg-black" >
        <>
            {!showMenu ? (
            <div className={` gap-10 flex flex-col justify-center items-center w-screen h-screen `}>
                <Image className='w-60' src={LogoImg} alt="logotipo" />
                <Button onClick={handleButtonClick}>Menu</Button>
            </div>
            ):(
            <div className={` flex flex-col justify-center items-center `}>
                <Menu/>
            </div>
            )}
        </>
    </main>

    )
}
