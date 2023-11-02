'use client';
import Image from 'next/image';
import LogoImg from '../../../../public/assets/logo.svg';
import OccipitalGroup from './occipital/page';
import FrontGroup from './boneSkull/page';
import TemporalGroup from './temporal/page';
import Link from 'next/link';

export default function Menu(){

    return (
        <div className='bg-black min-h-screen max-w-screen-lg px-2 pt-5 flex flex-col items-center '>
            <Image className=' top-5 w-32' src={LogoImg} alt="Logotype" />
            <div className='flex flex-col gap-2 items-center  '>
                    <div className='flex flex-col pl-2'>
                        <span className='text-xl font-bold text-zinc-50 '>Menu</span>
                        <p className='text-sm font-normal italic text-zinc-600'>
                            Choose a structure to study and train Anatomy
                        </p>
                    </div>
                    <div className='flex flex-col px-10 '>
                        <FrontGroup/>
                        <OccipitalGroup/>
                        <TemporalGroup/>
                    </div>
            </div>
            
            <div className='flex fixed bottom-3 '>
                <Link className=" text-cyan-50 border-x-2 border-b-2 rounded-md px-3 font-bold" href="menu02"> 
                    Next
                </Link>
            </div>
        </div>
    )
}