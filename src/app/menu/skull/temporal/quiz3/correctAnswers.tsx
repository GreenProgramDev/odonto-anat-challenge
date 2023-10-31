import generateQuestions from '@/app/utils/helper/generateQuestions';
import namesBones from '@/app/utils/constants/namesBones';

export const correctAnswers: string[] = [
   
    "Sulcos Arteriais",
    "Proce. Zigomático",
    "Poro Acústico Externo",
    "Ápice da Parte Petrosa",
    "Proce. Estilóide",
    "Sulco do Seio Sigmóide",
    "Forame Mastóideo",
    
];

export const structure = correctAnswers.map((correctAnswer: string) => generateQuestions(namesBones, correctAnswer));