'use client';
import Image from 'next/image';
import LogoImg from '../../../../public/assets/logo.svg';
import OccipitalGroup from './occipital/page';
import FrontGroup from './boneSkull/page';
import TemporalGroup from './temporal/page';

export default function Menu(){

    return (
        <div className='bg-black min-h-screen min-w-screen px-8 pt-12 flex flex-col items-center '>
            <Image className=' fixed top-5 w-36' src={LogoImg} alt="Logotype" />
            <div className='flex flex-col '>
                <div className='flex flex-col items-center  '>
                    <div className='relative top-7'>
                        <span className='text-xl font-bold text-zinc-50 '>Menu</span>
                        <p className='text-sm font-normal italic text-zinc-600'>
                            Choose a structure to study and train Anatomy
                        </p>
                    </div>

                    {/* Insert Frame Components Here */}
                    <div className='flex flex-col fixed px-6 top-36'>
                        <FrontGroup/>
                        <OccipitalGroup/>
                        <TemporalGroup/>
                    </div>
                    {/* Insert Frame Components Here */}

                </div>
            </div>
            
            {/* <div className='flex fixed bottom-3 '>
                <Link className=" text-cyan-50 border-x-2 border-b-2 rounded-md px-3 font-bold" href="menu02"> 
                    Next
                </Link>
            </div> */}
        </div>
    )
}