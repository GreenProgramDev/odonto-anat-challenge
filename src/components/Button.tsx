'use client'
interface IButton {
    children?: string ;
    onClick?: React.MouseEventHandler;
}

const Button = (props:IButton) => { 

    return (
        <button className="w-60 h-8 bg-white border-solid border-2 
        rounded-md font-bold hover:w-30 transition-width ease-in-out "
        onClick={props.onClick}>
            {props.children} 
        </button>
    )
}

export default Button