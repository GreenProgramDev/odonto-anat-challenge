'use client';
import Image from 'next/image'
import Link from 'next/link';
import ButtonBack from '@/components/ButtonBack';
import LogoImg from '../../../public/assets/logo.svg' 
import OccipitalGroup from '../menu/occipital/page';
import ParientalGroup from '../menu/parietal/page';

export default function Menu02(){


    return (

        <div className='bg-black h-screen w-screen px-8 pt-12 flex flex-col items-center '>
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
                      <ParientalGroup/>
                    </div>
                    {/* Insert Frame Components Here */}

                </div>
            </div>
            <div className='flex fixed bottom-3 gap-10 '>
                <Link className="text-cyan-50 border-l-2 border-b-2 rounded-md 
                px-3 font-bold" href="/menu">Back</Link>
                <Link className="text-cyan-50 border-r-2 border-b-2 rounded-md 
                px-3 font-bold" href="/menu02">Next</Link>
            </div>
        </div>
    )
}