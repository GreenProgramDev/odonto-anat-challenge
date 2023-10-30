import generateQuestions from '@/app/utils/helper/generateQuestions';
import namesBones from '@/app/utils/constants/namesBones';

export const correctAnswers: string[] = [
   
    "Sulcos arteriais",
    "Proc. zigomático",
    "Poro acústico externo",
    "Ápice da parte petrosa",
    "Proc. estilóide",
    "Sulco do seio sigmóide",
    "Forame mastóideo",
    
];

export const structure = correctAnswers.map((correctAnswer: string) => generateQuestions(namesBones, correctAnswer));