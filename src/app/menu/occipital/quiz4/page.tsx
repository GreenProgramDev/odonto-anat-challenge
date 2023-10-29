'use client'



'use client'
import Image from 'next/image'
import PageOne from '../../../../../public/assets/pageD1.svg';
import OptionsAnswer from '@/components/OptionsAnswer';
import ButtonBack from '@/components/ButtonBack';
import Link from 'next/link';
import generateQuestions from '@/app/utils/helper/generateQuestions';
import namesBones from '@/app/utils/constants/namesBones';
import Counter from '@/components/Counter';
import { useState } from 'react';


export default function Quiz4() {

    const [structureIndex, setStructureIndex] = useState(0)
    
    let structure = [
        generateQuestions(namesBones, "Asa menor"),
        generateQuestions(namesBones, "Crista esfenoidal"),
        generateQuestions(namesBones, "Abertura do seio esfenoidal"),
        generateQuestions(namesBones, "Asa maior"),
        generateQuestions(namesBones, "Forame redondo"),
        generateQuestions(namesBones, "Lâmina medial"),
        generateQuestions(namesBones, "Lâmina lateral"),
        generateQuestions(namesBones, "Forame oval"),
        generateQuestions(namesBones, "Forame espinhoso"),
        generateQuestions(namesBones, "Fossa pterigóidea"),
        generateQuestions(namesBones, "Corpo"),
        generateQuestions(namesBones, "Fissura orbital superior"),
        generateQuestions(namesBones, "Hâmulo pterigóideo"),
        generateQuestions(namesBones, "Face temporal"),

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
   ?   <Link className="" href="/menu">Finish</Link> 
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
                <button className='text-cyan-50 my-6 p-3  h-5  bg-zinc-700 flex items-center text-center border-b-2 border-r-2 rounded-lg' onClick={handleNextQuest} type='button'>{nextButtonText}</button>
            </div>
            
            <Counter />
            
            </form> 
            <div className='fixed bottom-5 flex gap-16 pt-10'>
                <ButtonBack/>
                <Link className="text-cyan-50 border-r-2 border-b-2 rounded-md px-3 font-bold  " href="/menu"> 
                    Menu
                </Link>
                </div>
            </div>
        </>
    )
}










