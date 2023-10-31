import generateQuestions from '@/app/utils/helper/generateQuestions';
import namesBones from '@/app/utils/constants/namesBones';

export const correctAnswers: string[] = [
   
    "Asa Menor",
    "Crista Esfenoidal",
    "Abertura do Seio Esfenoidal",
    "Face Orbital",
    "Face Temporal",
    "Forame Redondo",
    "Lâmina Medial",
    "Lâmina Lateral",
    "Hâmulo Pterigóideo",
    "Fossa Pterigóidea",
    "Canal Pterigóideo",
    "Fissura Orbital Superior",
    
];

export const structure = correctAnswers.map((correctAnswer: string) => generateQuestions(namesBones, correctAnswer));