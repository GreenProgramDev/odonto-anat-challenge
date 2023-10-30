import generateQuestions from '@/app/utils/helper/generateQuestions';
import namesBones from '@/app/utils/constants/namesBones';

export const correctAnswers: string[] = [
    "Face Temporal",
    "Poro acústico externo",
    "Forame mastóideo",
    "Meato acústico externo",
    "Fissura timpanomastóidea",
    "Proc. mastóide",
    "Proc. estilóide",
    "Sulcos arteriais",
    "Fossa mandibular",
    "Poro acústico externo",
    "Proc. zigomático"
];

export const structure = correctAnswers.map((correctAnswer: string) => generateQuestions(namesBones, correctAnswer));