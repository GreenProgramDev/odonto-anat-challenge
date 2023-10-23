'use client'

import ButtonBack from "@/components/ButtonBack";
import Link from "next/link";

export default function Structure03() {

    return (
        <div className="bg-black h-screen flex flex-col gap-4 text-center">

            <h1 className="text-cyan-50">
                Structure 03
            </h1>
            <div className="flex justify-around">
            <ButtonBack/>
            <Link className="text-cyan-50 border-r-2 border-b-2 rounded-md px-3 font-bold  " href="/menu"> 
                Menu
            </Link>
            
            </div>
        </div>
    )
}
