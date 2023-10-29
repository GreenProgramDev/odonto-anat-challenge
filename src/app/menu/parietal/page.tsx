import QuizLink from '@/components/QuizLink'
import PagA2 from '../../../../public/assets/pagA2.svg' 
import PagB2 from '../../../../public/assets/pagB2.svg' 
import PagC2 from '../../../../public/assets/pagC2.svg' 

export default function ParietalGroup(){


    return(
        <>
        <div className='mt-3 border-x-2 p-2 text-center rounded-xl'>
            
        <h2 className=' text-cyan-50'>Parietal</h2>
        <div className='grid grid-cols-3  gap-x-3 gap-y-2 py-1  '>                            
                {/* temporary files for illustration */}                            
            <QuizLink src={PagA2} href="/menu/parietal/structure01">Quiz 01</QuizLink>
            <QuizLink src={PagB2} href="/menu/parietal/structure02">Quiz 02</QuizLink>
            <QuizLink src={PagC2} href="/menu/parietal/structure03">Quiz 03</QuizLink>
        </div>   
        </div>
        </>


    )
}