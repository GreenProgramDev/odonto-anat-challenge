import generateQuestions from '@/app/utils/helper/generateQuestions';
import namesBones from '@/app/utils/constants/namesBones';

export const correctAnswers: string[] = [
   
    "Asa Menor",
    "Crista Esfenoidal",
    "Abertura do Seio Esfenoidal",
    "Asa Maior", 
    "Forame Redondo",
    "Lâmina Medial",
    "Lâmina Lateral",
    "Forame Oval",
    "Forame Espinhoso",
    "Fossa Pterigóidea",
    "Corpo",
    "Fissura Orbital Superior",
    "Hâmulo Pterigóideo",
    "Face Temporal",

    
];

export const structure = correctAnswers.map((correctAnswer: string) => generateQuestions(namesBones, correctAnswer));