import generateQuestions from '@/app/utils/helper/generateQuestions';
import namesBones from '@/app/utils/constants/namesBones';

export const correctAnswers: string[] = [
   
    "Asa menor",
    "Crista esfenoidal",
    "Abertura do seio esfenoidal",
    "Face orbital",
    "Face temporal",
    "Forame redondo",
    "Lâmina medial",
    "Lâmina lateral",
    "Hâmulo pterigóideo",
    "Fossa pterigóidea",
    "Canal pterigóideo",
    "Fissura orbital superior",
    
];

export const structure = correctAnswers.map((correctAnswer: string) => generateQuestions(namesBones, correctAnswer));