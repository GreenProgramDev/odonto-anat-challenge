import generateQuestions from '@/app/utils/helper/generateQuestions';
import namesBones from '@/app/utils/constants/namesBones';

export const correctAnswers: string[] = [
    "Proc. zigomático",
    "Tubérculo articular",
    "Fossa mandibular",
    "Poro acústico externo",
    "Proc. mastóide",
    "Incisura mastóidea",
    "Forame mastóideo",
    "Forame estilomastóideo",
    "Fossa jugular",
    "Proc. estilóide",
    "Canal carótico",
    
];

export const structure = correctAnswers.map((correctAnswer: string) => generateQuestions(namesBones, correctAnswer));