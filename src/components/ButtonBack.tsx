'use client'
import { useRouter } from 'next/navigation';


const ButtonBack = () => {

    const { back } = useRouter();

    return (

        <button className="text-cyan-50 border-l-2 border-b-2 rounded-md px-3 font-bold " 
        onClick={() => back()}>
            Back
        </button>
    )
}

export default ButtonBack