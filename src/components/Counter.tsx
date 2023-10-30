'use client'

import { answerStore } from "@/store/answerStore"


const Counter = () => {

    const [correctAnswer, wrongAnswer] = answerStore((state) => [state.correctAnswer, state.wrongAnswer] )

    return(

        <div className='bg-slate-800 flex flex-col pb-2 mx-16 my-10 border-b-4 rounded-xl'>
            <p className='text-cyan-50 flex justify-center mt-5'>Counter</p>
            <div className='flex justify-around px-2 py-3'>
                <div>
                <h1 className='text-cyan-50 flex justify-center' >Correct</h1>
                <p className='text-cyan-50 flex justify-center' >{correctAnswer}</p>
                </div>
                <div>
                <h1 className='text-cyan-50 flex justify-center' >Wrong</h1>
                <p className='text-cyan-50 flex justify-center' >{wrongAnswer}</p>
                </div>
            </div>
        </div>
    )


}

export default Counter
