import {create } from 'zustand'


interface IAnswerStoreProps {
    
    correctAnswer: number;
    setCorrectAnswer: (value: number) => void;
    wrongAnswer: number;
    setWrongAnswer: (value: number) => void;
}

export const answerStore = create<IAnswerStoreProps>((set) => ({

    correctAnswer: 0,
    setCorrectAnswer: (value: number) => set({correctAnswer: value}),
    wrongAnswer: 0,
    setWrongAnswer: (value: number) => set({wrongAnswer: value})

}))