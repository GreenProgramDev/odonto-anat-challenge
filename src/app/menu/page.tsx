'use client'
import Image from 'next/image'
import LogoImg from '../../../public/assets/logo.svg' 
import PagA2 from '../../../public/assets/pagA2.svg' 
import PagB2 from '../../../public/assets/pagB2.svg' 
import PagC2 from '../../../public/assets/pagC2.svg' 
import QuizLink from '@/components/QuizLink'

export default function Menu(){

    // const handleBtnStart = () => {
    //     console.log('passei')

    // }


    return (

        <div className='bg-black h-screen w-screen px-8 pt-12 flex flex-col gap-10 items-center justify-normal  '>
            <Image className=' w-36' src={LogoImg} alt="Logotype" />

            <div className='flex flex-col '>
            
                <div className='flex flex-col items-center '>
                    <div>
                        <span className='text-xl font-bold text-zinc-50 '>Menu</span>
                        <p className='text-sm font-normal italic text-zinc-600'>
                            Choose a structure to study and train Anatomy
                        </p>
                    </div>

                    <div className='grid grid-cols-3  gap-x-3 gap-y-3 my-3 pt-3'>
                            <QuizLink src={PagA2} href="/menu/form/structure01">Option 01</QuizLink>
                            <QuizLink src={PagB2} href="/menu/form/structure02">Option 02</QuizLink>
                            <QuizLink src={PagC2} href="/menu/form/structure03">Option 03</QuizLink>
                            {/* temporary files for illustration */}
                            <QuizLink src={PagA2} href="/menu/form/structure01">Option 04</QuizLink>
                            <QuizLink src={PagB2} href="/menu/form/structure02">Option 05</QuizLink>
                            <QuizLink src={PagC2} href="/menu/form/structure03">Option 06</QuizLink>
                    </div>
                </div>
            </div>
            

            
            
            
        </div>
    )
}

 