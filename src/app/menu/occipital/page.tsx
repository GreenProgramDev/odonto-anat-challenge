import QuizLink from '@/components/QuizLink'
import PagA2 from '../../../../public/assets/pagA2.svg' 
import PagB2 from '../../../../public/assets/pagB2.svg' 
import PagC2 from '../../../../public/assets/pagC2.svg' 
import PagD2 from '../../../../public/assets/pagD2.svg' 

export default function OcciptalGroup(){


    return(
        <>
        <div className='mt-3 border-x-2 p-2 text-center rounded-xl'>
            
        <h2 className=' text-cyan-50'>Occiptal</h2>
        <div className='grid grid-cols-3  gap-x-3 gap-y-2 py-1 '>                            
                {/* temporary files for illustration */}                            
            <QuizLink src={PagA2} href="/menu/occipital/quiz1">Quiz 01</QuizLink>
            <QuizLink src={PagB2} href="/menu/occipital/quiz2">Quiz 02</QuizLink>
            <QuizLink src={PagC2} href="/menu/occipital/quiz3">Quiz 03</QuizLink>
            <QuizLink src={PagD2} href="/menu/occipital/quiz4">Quiz 04</QuizLink>
        </div>   
        </div>
        </>


    )
}



