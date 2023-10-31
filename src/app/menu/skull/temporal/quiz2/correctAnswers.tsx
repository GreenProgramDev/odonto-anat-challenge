import generateQuestions from '@/app/utils/helper/generateQuestions';
import namesBones from '@/app/utils/constants/namesBones';

export const correctAnswers: string[] = [
    "Proc. Zigomático",
    "Tubérculo Articular",
    "Fossa Mandibular",
    "Poro Acústico Externo",
    "Proc. Mastóide",
    "Incisura Mastóidea",
    "Forame Mastóideo",
    "Forame Estilomastóideo",
    "Fossa Jugular",
    "Proc. Estilóide",
    "Canal Carótico",
    
];

export const structure = correctAnswers.map((correctAnswer: string) => generateQuestions(namesBones, correctAnswer));