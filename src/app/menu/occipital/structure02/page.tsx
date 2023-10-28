'use client'
import Image from 'next/image'
import PageOne from '../../../../../public/assets/pageB1.png';
import OptionsAnswer from '@/components/OptionsAnswer';
import ButtonBack from '@/components/ButtonBack';
import Link from 'next/link';
import generateQuestions from '@/app/utils/helper/generateQuestions';
import namesBones from '@/app/utils/constants/namesBones';
import Counter from '@/components/Counter';
import { useState } from 'react';


export default function Structure02() {

    const [structureIndex, setStructureIndex] = useState(0)
    
    let structure = [
        generateQuestions(namesBones, "test1"),
        generateQuestions(namesBones, "test2"),
        generateQuestions(namesBones, "test3"),
        generateQuestions(namesBones, "test4"),
        generateQuestions(namesBones, "test5"),
        generateQuestions(namesBones, "test6"),
        generateQuestions(namesBones, "test7"),
        generateQuestions(namesBones, "test8"),
        generateQuestions(namesBones, "test9"),
        generateQuestions(namesBones, "test10"),
        generateQuestions(namesBones, "test11"),
    ]

    

   const handleNextQuest = () => {

    if(structureIndex < structure.length - 1){
        setStructureIndex(structureIndex + 1)

    }

    const rightAnswerInput = document.querySelector('input[name="option"]:checked.rightAnswer')

    if(rightAnswerInput){
        
    }


   }

   const structureTitle = `Structure ${structureIndex + 1}`
   const nextButtonText = structureIndex === structure.length - 1 
   ?   <Link className="" href="/menu/occipital/structure03">Next Quiz</Link> 
   : "Next Quest"


   
    return (
        <>
            <div className=" bg-black h-screen flex flex-col items-center ">
            <form >
                <Image className='w-screen ' src={PageOne} alt="img" />
            {/* the tag h2 received component what render each structure*/}
                <h2 className='text-red-50 text-lg text-center my-5'>{structureTitle}</h2>
                <div className='flex justify-around items-center px-5'>
                    <div className='mr-10 pr-5'>
            {/* options from quest received component what render four wrong and one correct*/}

            <div>
                {structure[structureIndex].map( (quest) => (<OptionsAnswer key={quest} name='option' >{quest}</OptionsAnswer>))}
            </div>
                       
            </div>
                <button className='text-cyan-50      my-6 p-3  h-5  bg-zinc-700 flex items-center text-center border-b-2 border-r-2 rounded-lg' onClick={handleNextQuest} type='button'>{nextButtonText}</button>
            </div>
            
            <Counter />
            
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




