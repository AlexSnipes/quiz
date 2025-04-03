import { Question } from "@/lib/data";

export const mockMotoresQuestions: Question[] = [
  {
    id: "q1",
    text: "¿Cuál es la diferencia principal entre el motor Diesel y el motor de ciclo Otto?",
    answers: [
      {
        id: "a1",
        text: "El motor Diesel utiliza inyectores en lugar de bujías",
      },
      {
        id: "a2",
        text: "El motor Diesel utiliza bujías en lugar de inyectores",
      },
      { id: "a3", text: "El motor Diesel opera en dos tiempos" },
      { id: "a4", text: "El motor Diesel no utiliza válvulas" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "Motor Diesel",
  },
  {
    id: "q2",
    text: "¿Durante qué tiempo se produce la inyección de combustible en un motor Diesel?",
    answers: [
      { id: "a1", text: "Durante el tiempo de admisión" },
      { id: "a2", text: "Durante el tiempo de escape" },
      {
        id: "a3",
        text: "Al final de la compresión, en el punto muerto superior",
      },
      { id: "a4", text: "Durante la expansión" },
    ],
    correctAnswers: ["a3"],
    multipleCorrect: false,
    category: "Motor Diesel",
  },
  {
    id: "q3",
    text: "¿Qué sucede durante el tiempo de compresión en un motor Diesel?",
    answers: [
      { id: "a1", text: "El aire se comprime y su temperatura se eleva" },
      { id: "a2", text: "Se abre la válvula de escape" },
      { id: "a3", text: "Se inyecta el combustible inmediatamente" },
      { id: "a4", text: "Se produce la expansión de los gases" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "Motor Diesel",
  },
  {
    id: "q4",
    text: "¿Qué valor de compresión se menciona para el motor Diesel en el texto?",
    answers: [
      { id: "a1", text: "10:1" },
      { id: "a2", text: "24:1" },
      { id: "a3", text: "12:1" },
      { id: "a4", text: "8:1" },
    ],
    correctAnswers: ["a2"],
    multipleCorrect: false,
    category: "Motor Diesel",
  },
  {
    id: "q5",
    text: "¿A qué temperatura puede llegar el aire comprimido en un motor Diesel, según el texto?",
    answers: [
      { id: "a1", text: "400°C" },
      { id: "a2", text: "600°C" },
      { id: "a3", text: "800°C" },
      { id: "a4", text: "1000°C" },
    ],
    correctAnswers: ["a2"],
    multipleCorrect: false,
    category: "Motor Diesel",
  },
  {
    id: "q6",
    text: "¿Cómo se produce la combustión en el motor Diesel?",
    answers: [
      { id: "a1", text: "Por una chispa generada por una bujía" },
      {
        id: "a2",
        text: "Por autoencendido debido a la alta temperatura y la inyección de microgotas de combustible",
      },
      { id: "a3", text: "Por la mezcla de aire frío con combustible" },
      { id: "a4", text: "Por combustión a volumen constante" },
    ],
    correctAnswers: ["a2"],
    multipleCorrect: false,
    category: "Motor Diesel",
  },
  {
    id: "q7",
    text: "¿Cuál es la diferencia fundamental en la combustión entre el ciclo Diesel y el ciclo Otto?",
    answers: [
      {
        id: "a1",
        text: "En el Diesel la combustión es a presión constante, mientras que en el Otto es a volumen constante",
      },
      {
        id: "a2",
        text: "En el Diesel la combustión es a volumen constante, mientras que en el Otto es a presión constante",
      },
      { id: "a3", text: "Ambos ciclos tienen combustión a presión constante" },
      { id: "a4", text: "Ambos ciclos tienen combustión a volumen constante" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "Motor Diesel",
  },
  {
    id: "q8",
    text: "¿Qué ocurre durante el tiempo de expansión en el motor Diesel?",
    answers: [
      { id: "a1", text: "El pistón comprime el aire" },
      { id: "a2", text: "Se produce la combustión a presión constante" },
      { id: "a3", text: "Los gases quemados se expanden y empujan el pistón" },
      { id: "a4", text: "Se inicia el proceso de admisión" },
    ],
    correctAnswers: ["a3"],
    multipleCorrect: false,
    category: "Motor Diesel",
  },
  {
    id: "q9",
    text: "Seleccione todas las afirmaciones correctas sobre el funcionamiento del motor Diesel:",
    answers: [
      {
        id: "a1",
        text: "El motor Diesel no utiliza bujías, sino inyectores para inyectar el combustible",
      },
      { id: "a2", text: "La combustión se produce a presión constante" },
      {
        id: "a3",
        text: "Durante la compresión, el aire se comprime y su temperatura puede alcanzar aproximadamente 600°C",
      },
      {
        id: "a4",
        text: "En el ciclo Diesel, el combustible se mezcla con el aire durante el tiempo de admisión",
      },
    ],
    correctAnswers: ["a1", "a2", "a3"],
    multipleCorrect: true,
    category: "Motor Diesel",
  },
  {
    id: "q10",
    text: "¿Qué ocurre cuando se abre la válvula de escape en el motor Diesel?",
    answers: [
      { id: "a1", text: "Se inicia el proceso de admisión" },
      {
        id: "a2",
        text: "El pistón se mueve del punto muerto inferior al punto muerto superior evacuando los gases quemados",
      },
      { id: "a3", text: "El combustible se inyecta" },
      { id: "a4", text: "Se comprime el aire" },
    ],
    correctAnswers: ["a2"],
    multipleCorrect: false,
    category: "Motor Diesel",
  },
];
