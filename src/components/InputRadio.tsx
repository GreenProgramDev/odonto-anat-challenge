'use client'

interface IInputRadio {
    type: string;
    children: string;
    id?: string;
}

const InputRadio = (props:IInputRadio) => { 

    const creatId = (index: number) => {
        return `${index}`
    }

    return (
        <div className="flex justify-between ">
            <label className="text-cyan-50 flex  gap-x-2 px-1" >
            <input className=" text-justify" type="radio" name="inpMenu" /> 
                {props.children}</label>
        </div>
    )
}

export default InputRadio