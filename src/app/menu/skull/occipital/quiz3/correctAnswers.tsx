import generateQuestions from '@/app/utils/helper/generateQuestions';
import namesBones from '@/app/utils/constants/namesBones';

export const correctAnswers: string[] = [

    "Asa menor",
    "Canal óptico",
    "Jugo esfenoidal",
    "Fissura Orbital Superior",
    "Asa maior",
    "Forame redondo",
    "Proc. clinóide anterior",
    "Proc. clinóide posterior",
    "Fossa hipofisial",
    "Sela turca",
    "Forame espinhoso",
    "Forame oval",

];

export const structure = correctAnswers.map((correctAnswer: string) => generateQuestions(namesBones, correctAnswer));