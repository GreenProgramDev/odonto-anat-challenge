import generateQuestions from '@/app/utils/helper/generateQuestions';
import namesBones from '@/app/utils/constants/namesBones';

export const correctAnswers: string[] = [
    "Sutura Coronal",
    "Sutura Sagital",
    "Sutura Lambdóide",
    "Osso Occipital",
    "Forame Parietal",
    "Osso Parietal",
    "Osso Frontal",
];

export const structure = correctAnswers.map((correctAnswer: string) => generateQuestions(namesBones, correctAnswer));