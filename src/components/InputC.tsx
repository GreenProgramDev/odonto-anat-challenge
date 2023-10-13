'use client'

interface IInputC {
    type: string;
    children?: string;
    id?: string;
}

const InputC = (props:IInputC) => { 

    const creatId = (index: number) => {
        return `${index}`
    }

    return (
        <div className="flex justify-between  ">
            <label className="text-cyan-50 flex  gap-x-2 px-1" >
            <input className=" text-justify" type={props.type} id={props.id} /> 
                {props.children}</label>
        </div>
    )
}

export default InputC