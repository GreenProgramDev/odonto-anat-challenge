import QuizLink from '@/components/QuizLink'
import PagA1 from '../../../../../public/assets/imgBoneSkull/pagA1.svg' 
import PagB1 from '../../../../../public/assets/imgBoneSkull/pagB1.svg' 
import PagC1 from '../../../../../public/assets/imgBoneSkull/pagC1.svg' 
import PagD1 from '../../../../../public/assets/imgBoneSkull/pagD1.svg' 
 

export default function BoneSkullGroup(){

    return(
        <>
            <div className='mt-3 border-x-2 p-2 text-center rounded-xl'>
                
                <h2 className=' text-cyan-50'>Skull Bones View</h2>
                <div className='grid grid-cols-3  gap-x-3 gap-y-2 py-1 justify-center '>                            
                                 {/* temporary files for illustration */}                            
                    <QuizLink src={PagA1} href="/menu/skull/boneSkull/quiz1"></QuizLink>
                    <QuizLink src={PagB1} href="/menu/skull/boneSkull/quiz2"></QuizLink>
                    <QuizLink src={PagD1} href="/menu/skull/boneSkull/quiz3"></QuizLink>
                    <QuizLink src={PagC1} href="/menu/skull/boneSkull/quiz4"></QuizLink>
                </div>   
            </div>
        </>

    )
}



