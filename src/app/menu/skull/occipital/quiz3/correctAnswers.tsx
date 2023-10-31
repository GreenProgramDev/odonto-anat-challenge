import generateQuestions from '@/app/utils/helper/generateQuestions';
import namesBones from '@/app/utils/constants/namesBones';

export const correctAnswers: string[] = [

    "Asa Menor",
    "Canal Ôptico",
    "Jugo Esfenoidal",
    "Fissura Orbital Superior",
    "Asa Maior",
    "Forame Redondo",
    "Proc. Clinóide Anterior",
    "Proc. Clinóide Posterior",
    "Fossa Hipofisial",
    "Sela Turca",
    "Forame Espinhoso",
    "Forame Oval",

];

export const structure = correctAnswers.map((correctAnswer: string) => generateQuestions(namesBones, correctAnswer));