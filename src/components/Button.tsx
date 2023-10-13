'use client'
import { MouseEventHandler } from "react";

interface IButton {
children: string;
onClick: React.MouseEventHandler;
}

const Button = (props:IButton) => { 

    return (
        <button 
        className=" bg-white w-16 border-solid border-2 border-red-600 rounded-md  
        hover:w-30 transition-width ease-in-out "  
        onClick={props.onClick}
        >
            {props.children}
        </button>
    )
}

export default Button