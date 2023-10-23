'use client'

interface IOptionsAnswer {
    children?: string;
    name?: string,
    // response?: {array.Correct ? correct : wrong},
}

const OptionsAnswer = (props:IOptionsAnswer) => { 

    return (
        <div className="flex justify-between text-cyan-50">
            <label className="flex gap-2">
                <input  type="radio" name={props.name} />
                {props.children}
            </label>
        </div>
    )
}

export default OptionsAnswer