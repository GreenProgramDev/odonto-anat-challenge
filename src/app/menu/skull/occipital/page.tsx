import QuizLink from '@/components/QuizLink'
import PagA1 from '../../../../../public/assets/imgOccipital/pagA1.svg' 
import PagB1 from '../../../../../public/assets/imgOccipital/pagB1.svg' 
import PagC1 from '../../../../../public/assets/imgOccipital/pagC1.svg' 
import PagD1 from '../../../../../public/assets/imgOccipital/pagD1.svg' 

export default function OcciptalGroup(){
    return(
        <>
            <div className='mt-3 border-x-2 p-2 text-center rounded-xl'>
                
                <h2 className=' text-cyan-50'>Occiptal Bones View</h2>
                <div className='grid grid-cols-3  gap-x-3 gap-y-2 py-1 '>                            
                                 {/* temporary files for illustration */}                            
                    <QuizLink src={PagA1} href="/menu/skull/occipital/quiz1">Quiz 01</QuizLink>
                    <QuizLink src={PagB1} href="/menu/skull/occipital/quiz2">Quiz 02</QuizLink>
                    <QuizLink src={PagC1} href="/menu/skull/occipital/quiz3">Quiz 03</QuizLink>
                    <QuizLink src={PagD1} href="/menu/skull/occipital/quiz4">Quiz 04</QuizLink>
                    
                </div>   
            </div>
        </>

    )
}



