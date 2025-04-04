import { Question } from "@/lib/data";

export const mockDiagramVnQuestions: Question[] = [
  {
    id: "q1",
    text: "¿Qué representa el límite superior del diagrama V-n?",
    answers: [
      { id: "a1", text: "El factor de carga máximo negativo" },
      { id: "a2", text: "La velocidad de cálculo de picada (V D)" },
      { id: "a3", text: "El factor de carga máximo positivo" },
      { id: "a4", text: "La velocidad de entrada en pérdida invertida" },
    ],
    correctAnswers: ["a3"],
    multipleCorrect: false,
    category: "vn-diagram",
    image: "https://cdn.freakoffice.com/winter/47507/diagramavn.jpg",
  },
  {
    id: "q2",
    text: "¿Qué significa V A en el diagrama?",
    answers: [
      { id: "a1", text: "La velocidad de cálculo de crucero" },
      {
        id: "a2",
        text: "La velocidad de entrada en pérdida en vuelo recto y nivelado",
      },
      { id: "a3", text: "La velocidad de cálculo de maniobra" },
      {
        id: "a4",
        text: "La velocidad de cálculo para ráfagas de intensidad máxima",
      },
    ],
    correctAnswers: ["a3"],
    multipleCorrect: false,
    category: "vn-diagram",
    image: "https://cdn.freakoffice.com/winter/47507/diagramavn.jpg",
  },
  {
    id: "q3",
    text: "¿Cuáles de las siguientes afirmaciones describen correctamente el límite inferior del diagrama V-n?",
    answers: [
      {
        id: "a1",
        text: "Está relacionado con factores de carga máximos negativos",
      },
      {
        id: "a2",
        text: "Se determina por la velocidad de cálculo de crucero (V C)",
      },
      {
        id: "a3",
        text: "Es una parábola asociada a la sustentación negativa",
      },
      {
        id: "a4",
        text: "Corresponde a la intersección con el factor de carga +1",
      },
    ],
    correctAnswers: ["a1", "a3"],
    multipleCorrect: true,
    category: "vn-diagram",
    image: "https://cdn.freakoffice.com/winter/47507/diagramavn.jpg",
  },
  {
    id: "q4",
    text: "¿Qué sucede si la aeronave vuela por debajo de la velocidad de entrada en pérdida (en la parte superior del diagrama)?",
    answers: [
      { id: "a1", text: "Se incrementa el factor de carga positivo" },
      {
        id: "a2",
        text: "La aeronave no genera suficiente sustentación y se desploma",
      },
      {
        id: "a3",
        text: "Se produce la velocidad de cálculo de maniobra (V A)",
      },
      { id: "a4", text: "Se estabiliza en vuelo recto y nivelado" },
    ],
    correctAnswers: ["a2"],
    multipleCorrect: false,
    category: "vn-diagram",
    image: "https://cdn.freakoffice.com/winter/47507/diagramavn.jpg",
  },
  {
    id: "q5",
    text: "¿Cuál es la velocidad de cálculo de picada según el texto?",
    answers: [
      { id: "a1", text: "V C" },
      { id: "a2", text: "V D" },
      { id: "a3", text: "V B" },
      { id: "a4", text: "V A" },
    ],
    correctAnswers: ["a2"],
    multipleCorrect: false,
    category: "vn-diagram",
    image: "https://cdn.freakoffice.com/winter/47507/diagramavn.jpg",
  },
  {
    id: "q6",
    text: "¿Cuáles de las siguientes descripciones se asocian con la curva parabólica en el lado izquierdo del diagrama?",
    answers: [
      {
        id: "a1",
        text: "Está definida por la raíz cuadrada de los factores de carga positivos o negativos",
      },
      {
        id: "a2",
        text: "Determina las velocidades de entrada en pérdida en maniobra",
      },
      {
        id: "a3",
        text: "Se relaciona únicamente con la velocidad de crucero (V C)",
      },
      { id: "a4", text: "Representa la velocidad de cálculo de picada" },
    ],
    correctAnswers: ["a1", "a2"],
    multipleCorrect: true,
    category: "vn-diagram",
    image: "https://cdn.freakoffice.com/winter/47507/diagramavn.jpg",
  },
  {
    id: "q7",
    text: "¿Qué indica la intersección de la parábola superior con el factor de carga 1?",
    answers: [
      {
        id: "a1",
        text: "La velocidad de entrada en pérdida en vuelo recto y nivelado",
      },
      { id: "a2", text: "El límite de velocidad de picada (V D)" },
      { id: "a3", text: "La velocidad de maniobra (V A)" },
      { id: "a4", text: "La velocidad de cálculo para ráfagas (V B)" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "vn-diagram",
    image: "https://cdn.freakoffice.com/winter/47507/diagramavn.jpg",
  },
  {
    id: "q8",
    text: "¿Qué características se asocian a la velocidad V B?",
    answers: [
      {
        id: "a1",
        text: "Es la velocidad de cálculo para ráfagas de intensidad máxima",
      },
      { id: "a2", text: "Se ubica por encima de V D en el diagrama" },
      {
        id: "a3",
        text: "Es siempre menor que la velocidad de entrada en pérdida",
      },
      {
        id: "a4",
        text: "Se utiliza para el cálculo estructural frente a turbulencias",
      },
    ],
    correctAnswers: ["a1", "a4"],
    multipleCorrect: true,
    category: "vn-diagram",
    image: "https://cdn.freakoffice.com/winter/47507/diagramavn.jpg",
  },
  {
    id: "q9",
    text: "¿Qué representa la línea diagonal que aparece en el extremo derecho del diagrama?",
    answers: [
      { id: "a1", text: "Un límite normativo de velocidad" },
      { id: "a2", text: "La velocidad de crucero (V C)" },
      { id: "a3", text: "La velocidad de maniobra (V A)" },
      { id: "a4", text: "El factor de carga negativo máximo" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "vn-diagram",
    image: "https://cdn.freakoffice.com/winter/47507/diagramavn.jpg",
  },
  {
    id: "q10",
    text: "¿Cuáles de los siguientes factores se consideran para definir las velocidades límite en el diagrama V-n?",
    answers: [
      {
        id: "a1",
        text: "Los factores de carga máximos (positivos y negativos)",
      },
      {
        id: "a2",
        text: "Las velocidades de entrada en pérdida (en vuelo recto y nivelado, e invertido)",
      },
      { id: "a3", text: "La velocidad del viento lateral en la pista" },
      { id: "a4", text: "Las velocidades de cálculo (V A, V B, V C, V D)" },
    ],
    correctAnswers: ["a1", "a2", "a4"],
    multipleCorrect: true,
    category: "vn-diagram",
    image: "https://cdn.freakoffice.com/winter/47507/diagramavn.jpg",
  },
];
