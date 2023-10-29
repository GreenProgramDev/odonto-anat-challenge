'use client'
import Image from 'next/image'
import PageOne from '../../../../../public/assets/pageA1.png';
import OptionsAnswer from '@/components/OptionsAnswer';
import Link from 'next/link';
import generateQuestions from '@/app/utils/helper/generateQuestions';
import namesBones from '@/app/utils/constants/namesBones';
import Counter from '@/components/Counter';
import { useState } from 'react';


export default function Quiz1() {

    const [structureIndex, setStructureIndex] = useState(0)
    
    let structure = [
        generateQuestions(namesBones, "Face Temporal"),
        generateQuestions(namesBones, "Poro acústico externo"),
        generateQuestions(namesBones, "Forame mastóideo"),
        generateQuestions(namesBones, "Meato acústico externo"),
        generateQuestions(namesBones, "Fissura timpanomastóidea"),
        generateQuestions(namesBones, "Proc. mastóide"),
        generateQuestions(namesBones, "Proc. estilóide"),
        generateQuestions(namesBones, "Sulcos arteriais"),
        generateQuestions(namesBones, "Fossa mandibular"),
        generateQuestions(namesBones, "Poro acústico externo"),
        generateQuestions(namesBones, "Proc. zigomático"),
        
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
   ?   <Link className=" text-sm" href="/menu/occipital/quiz2">Next Quiz</Link> 
   : "Next"


   
    return (
        <>
            <div className=" bg-black h-screen flex flex-col items-center ">
            <form >
                <Image className='w-screen ' src={PageOne} alt="img" />
            {/* the tag h2 received component what render each structure*/}
                <h2 className='text-red-50 text-lg text-center my-5'>{structureTitle}</h2>
                <div className='grid grid-cols-3 grid-rows-1 px-4 '>
                    <div className='grid grid-rows-5  col-span-2 '>
                     {/* options from quest received component what render four wrong and one correct*/}
                        {structure[structureIndex].map( (quest) => (<OptionsAnswer key={quest} name='option' >{quest}</OptionsAnswer>))}
                    </div>
                    <div className='col-span-1 w-auto flex items-end justify-end flex-grow'>
                        <button className='text-cyan-50 absolute  p-3  h-5  bg-zinc-700 flex items-center text- text-center border-b-2 border-r-2 rounded-lg' onClick={handleNextQuest} type='button'>{nextButtonText}</button>
                    </div>
                </div>
            
            <Counter />
            
            </form> 
            <div className='fixed bottom-5 flex gap-16 pt-10'>
                {/* <ButtonBack/> */}
                <Link className='text-cyan-50 border-l-2 border-b-2 rounded-md px-3 ' href="/menu/">Menu</Link>
                <Link className="text-cyan-50 border-r-2 border-b-2 rounded-md px-3 font-bold" href="/menu/occipital/quiz2">Next</Link>
            </div>
            </div>
        </>
    )
}
