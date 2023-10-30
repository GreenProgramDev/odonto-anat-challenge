import generateQuestions from '@/app/utils/helper/generateQuestions';
import namesBones from '@/app/utils/constants/namesBones';

export const correctAnswers: string[] = [
   
    "Asa menor",
    "Crista esfenoidal",
    "Abertura do seio esfenoidal",
    "Asa maior",
    "Forame redondo",
    "Lâmina medial",
    "Lâmina lateral",
    "Forame oval",
    "Forame espinhoso",
    "Fossa pterigóidea",
    "Corpo",
    "Fissura orbital superior",
    "Hâmulo pterigóideo",
    "Face temporal",

    
];

export const structure = correctAnswers.map((correctAnswer: string) => generateQuestions(namesBones, correctAnswer));