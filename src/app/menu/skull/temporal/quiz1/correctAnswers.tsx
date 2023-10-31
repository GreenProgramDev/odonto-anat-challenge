import generateQuestions from '@/app/utils/helper/generateQuestions';
import namesBones from '@/app/utils/constants/namesBones';

export const correctAnswers: string[] = [
    "Face Temporal",
    "Poro Acústico Externo",
    "Forame Mastóideo",
    "Meato Acústico Externo",
    "Fissura Timpanomastóidea",
    "Proc. Mastóide",
    "Proc. Estilóide",
    "Sulcos Arteriais",
    "Fossa Mandibular",
    "Poro Acústico Externo",
    "Proc. Zigomático"
];

export const structure = correctAnswers.map((correctAnswer: string) => generateQuestions(namesBones, correctAnswer));