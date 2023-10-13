'use client'
import Image from 'next/image'
import LogoImg from '../assets/logo.svg' 
import InputC from '@/components/InputC'
import Button from '@/components/Button'




export default function Menu(){

    const handleButtonClick = () => {
        console.log('passei')

    }

    return (

        <div className=' h-screen w-screen px-8 pt-20 flex flex-col gap-4 items-center justify-around  '>
            <Image className=' w-36' src={LogoImg} alt="" />

            <div className='flex flex-col gap-5  items-start '>
                <div className='flex flex-col'>
                    <label className='text-xl font-bold text-zinc-50 '  htmlFor="">Presets <span className='text-sm font-normal italic pr-1 text-zinc-600'>(configurações pré-definidas)</span></label>
                    <select className='flex p-2  rounded bg-slate-' 
                    name="options" id="">
                        <option className='' value="">Personalizado</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                        <option value="option4">Option 4</option>
                    </select>
                </div>

                <div className='flex flex-col ' >
                    <span className='text-xl font-bold text-zinc-50 '>Configurações</span>
                    <p className='text-sm font-normal italic text-zinc-600'>Escolha o conjunto de perguntas que serão adicionados no quiz.</p>
                </div>

                <div className='flex flex-col gap-2'>
                    <InputC type='radio' id=''>Name 1</InputC>
                    <InputC type='radio' >Name 2</InputC>
                    <InputC type='radio' >Name 3</InputC>
                    <InputC type='radio' >Name 4</InputC>
                    <InputC type='radio' >Name 5</InputC>
                </div>
            </div>

            <Button onClick={handleButtonClick} >Start</Button>
        </div>
    )
}

