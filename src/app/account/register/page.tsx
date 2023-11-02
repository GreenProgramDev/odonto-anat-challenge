'use client'

import { LoginCard } from "@/components/LoginCard"
import { RegisterCard } from "@/components/RegisterCard"
import { useState } from "react"

export default function Register() {

    const [showRegister, setShowRegister] = useState(false)
    
 
    
   


    return (
        <>
            <div className="bg-black min-h-screen flex flex-col justify-around items-center ">
                <RegisterCard />
            </div>             
           
        </>
    )
}