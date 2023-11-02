import generateQuestions from '@/app/utils/helper/generateQuestions';
import namesBones from '@/app/utils/constants/namesBones';

export const correctAnswers: string[] = [
   
    "Asa menor",
    "Canal óptico",
    "Proc. clinóide posterior",
    "Fissura orbital superior",
    "Asa maior face cerebral",
    "Forame redondo",
    "Trabéculas do osso esponj.",
    "Lâmina medial",
    "Lâmina lateral",
    "Dorso da sela",
    "Fossa pterigódea",
    "Canal pterigódea",
    "Proc. clinóide anterior",
]

export const structure = correctAnswers.map((correctAnswer: string) => generateQuestions(namesBones, correctAnswer));