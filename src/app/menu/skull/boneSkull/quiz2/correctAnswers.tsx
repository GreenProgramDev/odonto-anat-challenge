import generateQuestions from '@/app/utils/helper/generateQuestions';
import namesBones from '@/app/utils/constants/namesBones';

export const correctAnswers: string[] = [
    "Linha Temporal Superior",
    "Sutura Escamosa",
    "Meato Acúst. Ext. O. Temp.",
    "Part Petrosa Osso Temp.",
    "Osso Occipital",
    "Proce. Mastoide O. Temp.",
    "Proce. Estiloide O. Temp.",
    "Arco Zigomático",
    "Proce. Zigo. Osso Temp.",
    "Part Escamosa Osso Temp.",
    "Fossa Temporal",
    "Sutura Esfenopariental",
    "Linha Temporal Inferior",
];

export const structure = correctAnswers.map((correctAnswer: string) => generateQuestions(namesBones, correctAnswer));