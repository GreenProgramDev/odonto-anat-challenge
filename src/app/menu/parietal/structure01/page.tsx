'use client'

import ButtonBack from "@/components/ButtonBack";
import Link from "next/link";

export default function Structure01() {

    return (
        <div className="bg-black h-screen flex flex-col gap-4 text-center">

            <h1 className="text-cyan-50">
                Structure 01
            </h1>
            <div className="flex justify-around">
            <Link className="text-cyan-50 border-b-2 border-l-2  rounded-md px-3 " href="menu02"> 
                Menu
            </Link>
            <Link className="text-cyan-50 border-b-2 border-r-2 rounded-md px-3 " href="/menu/parietal/structure02"> 
                Next
            </Link>
            </div>
        </div>
    )
}
