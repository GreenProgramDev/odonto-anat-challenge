// 'use client'

// import ButtonBack from "@/components/ButtonBack";
// import Link from "next/link";

// export default function Structure02() {

//     return (
//         <div className="bg-black h-screen flex flex-col gap-4 text-center">

//             <h1 className="text-cyan-50">
//                 Structure 02
//             </h1>
//             <div className="flex justify-around">
//             <ButtonBack/>
//             <Link className="text-cyan-50 border-b-2  rounded-md px-3 " href="/menu"> 
//                 Menu
//             </Link>
//             <Link className="text-cyan-50 border-r-2 border-b-2 rounded-md px-3 font-bold " href="/menu/occipital/structure03"> 
//                 Next
//             </Link>
//             </div>
//         </div>
//     )
// }



'use client'
import Image from 'next/image'
import PageOne from '../../../../../public/assets/pageB1.png';
import OptionsAnswer from '@/components/OptionsAnswer';
import ButtonBack from '@/components/ButtonBack';
import Link from 'next/link';

export default function Structure02() {


    return (
        <>
            <div className=" bg-black h-screen flex flex-col items-center ">
            <form >
                <Image className='w-screen ' src={PageOne} alt="img" />
            {/* the tag h2 received component what render each structure*/}
                <h2 className='text-red-50 text-lg text-center my-5'>Structure 01</h2>
                <div className='flex justify-around items-center px-5'>
                    <div className='mr-10 pr-5'>
            {/* options from quest received component what render four wrong and one correct*/}
                        <OptionsAnswer name='option' >Quest 01</OptionsAnswer>
                        <OptionsAnswer name='option' >Quest 02</OptionsAnswer>
                        <OptionsAnswer name='option' >Quest 03</OptionsAnswer>
                        <OptionsAnswer name='option' >Quest 04</OptionsAnswer>
                        <OptionsAnswer name='option' >Quest 05</OptionsAnswer>
                    </div>
                    <button className='text-cyan-50 mr-6 my-6 p-3 h-5  bg-zinc-700 flex items-center text-center border-b-2 border-r-2 rounded-lg'  type='button'>Next Quest</button>
                </div>

                <div className='bg-slate-800 flex flex-col pb-2 mx-16 my-10 border-b-4 rounded-xl'>
                    <p className='text-cyan-50 flex justify-center mt-5'>Counter</p>
                    <div className='flex justify-around px-2 py-3'>
                        <div>
                            <h1 className='text-cyan-50 flex justify-center' >Correct</h1>
                            <p className='text-cyan-50 flex justify-center' >0</p>
                        </div>
                        <div>
                            <h1 className='text-cyan-50 flex justify-center' >Wrong</h1>
                            <p className='text-cyan-50 flex justify-center' >0</p>
                        </div>
                    </div>
                </div>

            
            </form> 
            <div className='fixed bottom-5 flex gap-16 pt-10'>
                <ButtonBack/>
                <Link className="text-cyan-50 border-b-2  rounded-md px-3 " href="/menu"> 
                Menu
                </Link>
                <Link className="text-cyan-50 border-r-2 border-b-2 rounded-md px-3 font-bold " href="/menu/occipital/structure03"> 
                Next
                </Link>
            </div>
            </div>
        </>
    )
}
