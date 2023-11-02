'use client'


interface IInputComponents {
    children?: string ;
    placeholder?: string
    type?: string
}

const InputComponents = (props:IInputComponents) => { 

    return (
        <label className="flex flex-col text-cyan-600 text-xs"> 
            {props.children}
            <input type={props.type} name="" id="" placeholder={props.placeholder} className="pl-2 h-8 rounded-sm" />
        </label>
    )
}

export default InputComponents

