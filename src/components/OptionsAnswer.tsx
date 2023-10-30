'use client'

interface IOptionsAnswer {
    children?: string;
    name?: string;
    onClick?: () => void;
    value: string;
    setSelectedAnswer: (selectedAnswer: string) => void;
}

const OptionsAnswer = (props:IOptionsAnswer) => { 

    return (
        <div className="flex justify-start text-cyan-50">
            <label className="flex gap-2 ">
                <input
                    type="radio"
                    name={props.name}
                    value={props.value}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.setSelectedAnswer(e.target.value)}
                />
                {props.children}
            </label>
        </div>
    )
}

export default OptionsAnswer