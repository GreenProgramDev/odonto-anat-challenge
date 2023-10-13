'use client'
const creatId = (index: number) => {
    return `${index}`
}

interface IInputC {
    type: string;
    children?: string;
    id?: string;
}

const InputC = (props:IInputC) => { 

    return (
        <div className="flex gap-2">
            <input type={props.type} id={props.id} /> 
            <label className="text-cyan-50" >{props.children}</label>
        </div>
    )
}

export default InputC