'use client'

import { answerStore } from "@/store/answerStore"


const Counter = () => {

    const [correctAnswer, wrongAnswer] = answerStore((state) => [state.correctAnswer, state.wrongAnswer] )

    return(

        <div className='bg-slate-800 flex flex-col text-right w-fit px-5 ml-5 mt-4 border-b-4 rounded-xl'>
            <div className='flex flex-col justify-around px-1 py-2'>
                <h1 className='text-cyan-50 flex justify-center' >Correct: {correctAnswer} </h1>
                <h1 className='text-cyan-50 flex justify-center' >Wrong: {wrongAnswer} </h1>
            </div>
        </div>
    )


}

export default Counter
