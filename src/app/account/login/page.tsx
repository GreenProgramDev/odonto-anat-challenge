'use client'

import Menu from "@/app/menu/skull/page"
import { LoginCard } from "@/components/LoginCard"
import { RegisterCard } from "@/components/RegisterCard"
import { useState } from "react"

export default function Login() {

    
    const [showMenu, setShowMenu] = useState(false)
    
    const handleBtnMenu = () => {
        setShowMenu(!showMenu)
    }
    
    return (
        <>
            <div className="bg-black">

                {!showMenu ? (
                    <div className={` gap-10 flex flex-col justify-center items-center w-screen h-screen `}>
                        <LoginCard onClick={handleBtnMenu} />
                    </div>
                ):(
                    <div className={` flex flex-col justify-center items-center `}>
                    <Menu/>
                </div>
                )}

            </div>
        </>
    )
}