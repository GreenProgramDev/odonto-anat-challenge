import generateQuestions from '@/app/utils/helper/generateQuestions';
import namesBones from '@/app/utils/constants/namesBones';

export const correctAnswers: string[] = [
    "Osso frontal",
    "Osso nasal",
    "Lamina orbit. osso etmoide",
    "Sutura coronal",
    "Osso pariental",
    "Proce. frontal do osso zigo.",
    "Asa maior do osso esfeno.",
    "Superf. orbit. do osso zigo.",
    "Superf. orbital da maxila",
    "Proce. zigo. da maxila",
    "Forame infraorbital",
    "Forame mentual",
    "Corpo da mandibula",
    "Proce. alveolar da maxila",
    "Espinha nasal int. da maxila",
    "Ramo da mandíbula",
    "Osso etmoide",
    "Osso zigomático",
    "Proce. temporal do osso zigo.",
    "Osso esfenoide",
    "Processo frontal da maxila",
    "Osso temporal",
    "Asa menor do osso esfeno.",
    "Superf. orbital osso front",
    "Forame supraorbital",
    "Glabela  do osso frontal",
];

export const structure = correctAnswers.map((correctAnswer: string) => generateQuestions(namesBones, correctAnswer));