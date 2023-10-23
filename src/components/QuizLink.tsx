'use client';
import Image from "next/image";
interface IQuizLink {
    children?: string;
    href?: string,
    src?: any;
}

const QuizLink = (props:IQuizLink) => { 

    return (
        <div className="flex flex-col justify-center items-center 
        border border-indigo-600 rounded-lg overflow-hidden">
                <a  className="text-center text-cyan-50 flex flex-col 
                gap-1" href={props.href}>
                {props.children}
                <Image src={props.src} alt="" />
                </a>
        </div>
    )
}

export default QuizLink