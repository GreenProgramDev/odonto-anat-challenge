import generateQuestions from '@/app/utils/helper/generateQuestions';
import namesBones from '@/app/utils/constants/namesBones';

export const correctAnswers: string[] = [
    "Osso frontal",
    "Osso nasal",
    "Lamina orbit. osso etmoide",
    "Sutura coronal",
    "Osso pariental",
    "Proce. frontal osso zigo",
    "Asa maior osso esfenoide",
    "Superf. orbit. osso zigo",
    "Superf. orbital maxila",
    "Proce. zigo. maxila",
    "Forame infraorbital",
    "Forame mentual",
    "Corpo da mandibula",
    "Proce. alveolar maxila",
    "Espinha nasal ante. maxila",
    "Ramo da mandíbula",
    "Osso etmoide",
    "Osso zigomático",
    "Proce. temporal osso zigo",
    "Osso esfenoide",
    "Processo frontal da maxila",
    "Osso temporal",
    "Asa menor do osso esfeno.",
    "Superf. orbital osso front",
    "Forame supraorbital",
    "Glabela  do osso frontal",
];

export const structure = correctAnswers.map((correctAnswer: string) => generateQuestions(namesBones, correctAnswer));