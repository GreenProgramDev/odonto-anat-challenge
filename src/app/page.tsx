'use client'
import { useState } from 'react'
import Image from 'next/image'
import LogoImg from '../../public/assets/logo.svg' 
import Button from '@/components/Button'
import Menu from './menu/skull/page'
import { LoginCard } from '@/components/LoginCard'
import Login from './account/page'
import Welcome from './account/page'

export default function MyApp() {

    
      const [showLogins, setShowLogins] = useState(false)
    
    const handleBtnLogin = () => {
        setShowLogins(false)
    }
    const handleBtnRegister = () => {
        setShowLogins(true)
    }

    return (
    <main className="bg-black" >
        <>
        <Welcome/>
        </>
    </main>

    )
}