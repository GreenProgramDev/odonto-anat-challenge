'use client'

import { LoginCard } from "@/components/LoginCard"
import { RegisterCard } from "@/components/RegisterCard"
import { useState } from "react"

export default function Register() {

    const [showRegister, setShowRegister] = useState(false)
    
 
    
    const handleBtnLogin = () => {
        setShowRegister(true)
    }
    const handleBtnRegister = () => {
        setShowRegister(false)
    }


    return (
        <>
            {!showRegister ? (   
                <div className="bg-black min-h-screen flex flex-col justify-around items-center ">
                    <RegisterCard onClick={handleBtnLogin}>Access</RegisterCard>
                </div>             
            ):(
                <div className="bg-black min-h-screen flex flex-col justify-around items-center ">
                    <LoginCard onClick={handleBtnRegister} >Create new account</LoginCard>
                </div>
            )} 
        </>
    )
}