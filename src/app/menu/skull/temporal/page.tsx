import QuizLink from '@/components/QuizLink'
import PagA1 from '../../../../../public/assets/imgTemporal/pagA1.svg' 
import PagB1 from '../../../../../public/assets/imgTemporal/pagB1.svg' 
import PagC1 from '../../../../../public/assets/imgTemporal/pagC1.svg' 

export default function TemporalGroup(){

    return(
        <>
            <div className='mt-3 border-x-2 p-2 text-center rounded-xl'>
                
                <h2 className=' text-cyan-50'>Temporal Bones View</h2>
                <div className='grid grid-cols-3  gap-x-3 gap-y-2 py-1 '>                            
                                 {/* temporary files for illustration */}                            
                    <QuizLink src={PagA1} href="/menu/skull/temporal/quiz1">Quiz 01</QuizLink>
                    <QuizLink src={PagB1} href="/menu/skull/temporal/quiz2">Quiz 02</QuizLink>
                    <QuizLink src={PagC1} href="/menu/skull/temporal/quiz3">Quiz 03</QuizLink>
                </div>   
            </div>
        </>

    )
}



