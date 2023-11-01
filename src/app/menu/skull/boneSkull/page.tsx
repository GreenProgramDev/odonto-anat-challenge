import QuizLink from '@/components/QuizLink'
import PagA2 from '../../../../../public/assets/imgBoneSkull/pagA1.svg' 
import PagB2 from '../../../../../public/assets/imgBoneSkull/pagB1.svg' 
import PagC2 from '../../../../../public/assets/imgBoneSkull/pagC1.svg' 
 

export default function BoneSkullGroup(){

    return(
        <>
            <div className='mt-3 border-x-2 p-2 text-center rounded-xl'>
                
                <h2 className=' text-cyan-50'>Skull Bones View</h2>
                <div className='grid grid-cols-3  gap-x-3 gap-y-2 py-1 justify-center '>                            
                                 {/* temporary files for illustration */}                            
                    <QuizLink src={PagA2} href="/menu/skull/boneSkull/quiz1">Quiz 01</QuizLink>
                    <QuizLink src={PagB2} href="/menu/skull/boneSkull/quiz2">Quiz 02</QuizLink>
                    <QuizLink src={PagC2} href="/menu/skull/boneSkull/quiz3">Quiz 03</QuizLink>
                </div>   
            </div>
        </>

    )
}



