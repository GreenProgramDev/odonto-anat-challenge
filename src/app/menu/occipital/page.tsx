import QuizLink from '@/components/QuizLink'
import PagA2 from '../../../../public/assets/pagA2.svg' 
import PagB2 from '../../../../public/assets/pagB2.svg' 
import PagC2 from '../../../../public/assets/pagC2.svg' 

export default function OcciptalGroup(){


    return(
        <>
        <div className='mt-5 border p-2 text-center'>
            
        <h2 className=' text-cyan-50'>Occiptal</h2>
        <div className='grid grid-cols-3  gap-x-3 gap-y-2 py-1 '>                            
                {/* temporary files for illustration */}                            
            <QuizLink src={PagA2} href="/menu/occipital/structure01">Option 01</QuizLink>
            <QuizLink src={PagB2} href="/menu/occipital/structure02">Option 02</QuizLink>
            <QuizLink src={PagC2} href="/menu/occipital/structure03">Option 03</QuizLink>
        </div>   
        </div>
        </>


    )
}