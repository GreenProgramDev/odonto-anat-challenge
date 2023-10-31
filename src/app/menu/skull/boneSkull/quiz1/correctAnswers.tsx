import generateQuestions from '@/app/utils/helper/generateQuestions';
import namesBones from '@/app/utils/constants/namesBones';

export const correctAnswers: string[] = [
    "Osso Frontal",
    "Osso Nasal",
    "Lamina Orbit. Osso Etmoide",
    "Sutura Coronal",
    "Osso Pariental",
    "Proce. Frontal Osso Zigo.",
    "Asa Maior Osso Esfenoide",
    "Superf. Orbit. Osso Zigo.",
    "Superf. Orbital Maxila",
    "Proce. Zigo. Maxila",
    "Forame Infraorbital",
    "Forame Mentual",
    "Corpo da Mandibula",
    "Proce. Alveolar Maxila",
    "Espinha Nasal Ante. Maxila",
    "Ramo da Mandíbula",
    "Osso Etmoide",
    "Osso Zigomático",
    "Proce. Temporal Osso Zigo.",
    "Osso Esfenoide",
    "Processo Frontal da Maxila",
    "Osso Temporal",
    "Asa Menor do Osso Esfeno.",
    "Superf. Orbital Osso Front.",
    "Forame Supraorbital",
    "Glabela Osso Frontal",
];

export const structure = correctAnswers.map((correctAnswer: string) => generateQuestions(namesBones, correctAnswer));