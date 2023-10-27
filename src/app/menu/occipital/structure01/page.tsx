'use client'
import Image from 'next/image'
import PageOne from '../../../../../public/assets/pageA1.png';
import OptionsAnswer from '@/components/OptionsAnswer';
import ButtonBack from '@/components/ButtonBack';
import Link from 'next/link';
import generateQuestions from '@/app/utils/helper/generateQuestions';
import namesBones from '@/app/utils/constants/namesBones';


export default function Structure01() {

    let quests = generateQuestions(namesBones, "temporal")
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
            {quests.map((quest) => (
                <OptionsAnswer key={quest} name='option'>{quest}</OptionsAnswer>
            ))}
   
                       
                    </div>
                    <button className='text-cyan-50      my-6 p-3  h-5  bg-zinc-700 flex items-center text-center border-b-2 border-r-2 rounded-lg'  type='button'>Next Quest</button>
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
                {/* <ButtonBack/> */}
                <Link className='text-cyan-50 border-l-2 border-b-2 rounded-md px-3 ' href="/menu/">Menu</Link>
                <Link className="text-cyan-50 border-r-2 border-b-2 rounded-md px-3 font-bold" href="/menu/occipital/structure02">Next</Link>
            </div>
            </div>
        </>
    )
}
