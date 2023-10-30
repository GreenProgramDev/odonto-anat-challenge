import QuizLink from '@/components/QuizLink'
import PagA2 from '../../../../public/assets/imgSkull/pagA1.svg'

export default function SkullGroup(){

    return(
        <>
            <div className='mt-3 border-x-2 p-2 text-center rounded-xl'>
                
                <h2 className=' text-cyan-50'>Occiptal</h2>
                <div className='grid grid-cols-3  gap-x-3 gap-y-2 py-1 '>                            
                                 {/* temporary files for illustration */}                            
                    <QuizLink src={PagA2} href="/menu/skull/frontSkull">Quiz 01</QuizLink>
                </div>   
            </div>
        </>

    )
}



