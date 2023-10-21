import Image from 'next/image'
import PageOne from '../../../../../public/assets/pageA1.png';
import OptionsAnswer from '@/components/OptionsAnswer';


export default function Structure01() {

    return (
        <>
            <form id="" className=" bg-black h-screen justify-center " >
                <Image className='w-screen ' src={PageOne} alt="img" />
                {/* the tag h2 received component what render each structure*/}
                <h2 className='text-red-50 text-lg text-center my-5'>Structure 01</h2>
                <div className='flex justify-between px-5'>
                    <div>
                        {/* options from quest received component what render four wrong and one correct(*/}
                        <OptionsAnswer name='option' >Option 01</OptionsAnswer>
                        <OptionsAnswer name='option' >Option 02</OptionsAnswer>
                        <OptionsAnswer name='option' >Option 03</OptionsAnswer>
                        <OptionsAnswer name='option' >Option 04</OptionsAnswer>
                        <OptionsAnswer name='option' >Option 05</OptionsAnswer>
                    </div>
                    <button className='mr-6 my-6 p-3 h-5  bg-white flex items-center  text-center '  type='button'>Proximo</button>
                </div>


                <div>
                    <p className='text-cyan-50 flex justify-center mt-5'>Counter</p>
                    <br />
                    <h1 className='text-cyan-50 flex justify-center' >win</h1>
                    <p className='text-cyan-50 flex justify-center' >0</p>

                    <h1 className='text-cyan-50 flex justify-center' >wrong</h1>
                    <p className='text-cyan-50 flex justify-center' >0</p>

                </div>
                <div className='flex justify-center'>
                    <button className='mr-6 my-6 p-3 h-5  bg-white flex items-center  text-center '  type='button'><a href="/menu">Menu</a></button>
                </div>
            
            </form> 
            {/* ask={props.asks ? "arrayRandom" : false} */}
        </>
    )
}
