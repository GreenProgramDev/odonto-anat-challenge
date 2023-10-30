'use client'
import Image from 'next/image'
import PageOne from '../../../../../public/assets/pageB1.png';
import OptionsAnswer from '@/components/OptionsAnswer';
import Link from 'next/link';
import Counter from '@/components/Counter';
import { useState } from 'react';
import { answerStore } from '@/store/answerStore';
import { correctAnswers, structure } from './correctAnswers';
import ButtonBack from '@/components/ButtonBack';



export default function Quiz2() {

    const [structureIndex, setStructureIndex] = useState(0);
    
    const [correctAnswer, setCorrectAnswer] = answerStore((state) => [state.correctAnswer, state.setCorrectAnswer]);
    const [wrongAnswer, setWrongAnswer] = answerStore((state) => [state.wrongAnswer, state.setWrongAnswer]);

    const [selectedAnswer, setSelectedAnswer] = useState<string>("");

   const handleNextQuest = () => {
    if (selectedAnswer === correctAnswers[structureIndex]) {

        setCorrectAnswer(correctAnswer + 1);
        
    } else {
        setWrongAnswer(wrongAnswer + 1);
    }

    if(structureIndex < structure.length - 1) {
        setStructureIndex(structureIndex + 1)

    }


   }

   const structureTitle = `Structure ${structureIndex + 1}`
   const nextButtonText = structureIndex === structure.length - 1 
   ?   <Link className=" text-sm" href="/menu/occipital/quiz3">Next Quiz</Link> 
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
                            {
                                structure[structureIndex].map( (quest) => (
                                    <OptionsAnswer 
                                        key={quest}
                                        name='option'
                                        value={quest}
                                        setSelectedAnswer={setSelectedAnswer}
                                    >
                                        {quest}
                                    </OptionsAnswer>
                                ))
                            }
                        </div>
                        <div className='col-span-1 w-auto flex items-end justify-end flex-grow'>
                            <button className='text-cyan-50 absolute  p-3  h-5  bg-zinc-700 flex items-center text- text-center border-b-2 border-r-2 rounded-lg' onClick={handleNextQuest} type='button'>{nextButtonText}</button>
                        </div>
                    </div>
                <Counter />
                
                </form> 
                <div className='fixed bottom-5 flex gap-16 pt-10'>
                    <ButtonBack/>
                    <Link className="text-cyan-50 border-b-2  rounded-md px-3 " href="/menu"> 
                    Menu
                    </Link>
                    <Link className="text-cyan-50 border-r-2 border-b-2 rounded-md px-3 font-bold " href="/menu/occipital/quiz3"> 
                    Next
                    </Link>
                </div>
                </div>
        </>
    )
}
