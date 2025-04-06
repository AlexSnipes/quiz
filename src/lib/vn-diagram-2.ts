import { Question } from "@/lib/data";

export const mockDiagramVn2Questions: Question[] = [
  {
    id: "q11",
    text: "Según las consideraciones del documento, ¿qué tipo de maniobras se asumen para establecer los factores de carga límite?",
    answers: [
      { id: "a1", text: "Maniobras simétricas" },
      { id: "a2", text: "Maniobras asimétricas" },
      { id: "a3", text: "Maniobras de frenado" },
      { id: "a4", text: "Maniobras de despegue" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "vn-diagram",
  },
  {
    id: "q12",
    text: "Además de los coeficientes máximos de sustentación, ¿qué otro parámetro debe considerarse en estas maniobras?",
    answers: [
      {
        id: "a1",
        text: "Las velocidades de cabeceo apropiadas para maniobras de encabritado y giro constante",
      },
      { id: "a2", text: "La altitud de vuelo" },
      { id: "a3", text: "El consumo de combustible" },
      { id: "a4", text: "La temperatura del motor" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "vn-diagram",
  },
  {
    id: "q13",
    text: "¿Cuál es la ecuación que define el factor de carga positivo límite en el diagrama V-n?",
    answers: [
      { id: "a1", text: "n = 2,1 + 24000/(W + 10000)" },
      { id: "a2", text: "n = 2,1 + 24000/(W - 10000)" },
      { id: "a3", text: "n = 1,8 + 24000/(W + 10000)" },
      { id: "a4", text: "n = 2,1 + 12000/(W + 10000)" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "vn-diagram",
  },
  {
    id: "q14",
    text: "Según las especificaciones, ¿cuáles son los límites permitidos para el factor de carga positivo?",
    answers: [
      {
        id: "a1",
        text: "No puede ser menor que 2,5 y no necesita ser mayor que 3,8",
      },
      { id: "a2", text: "No puede ser menor que 2,0 y no mayor que 4,0" },
      { id: "a3", text: "No puede ser menor que 1,5 y no mayor que 3,5" },
      { id: "a4", text: "No puede ser menor que 3,0 y no mayor que 4,5" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "vn-diagram",
  },
  {
    id: "q15",
    text: "Para el límite inferior del diagrama V-n, ¿cuál es el valor mínimo del factor de carga permitido?",
    answers: [
      { id: "a1", text: "-1" },
      { id: "a2", text: "0" },
      { id: "a3", text: "-2" },
      { id: "a4", text: "1" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "vn-diagram",
  },
  {
    id: "q16",
    text: "¿Cómo varía el factor de carga inferior en función de la velocidad desde Vc hasta VD?",
    answers: [
      {
        id: "a1",
        text: "Varía linealmente desde el valor en Vc hasta 0 en VD",
      },
      { id: "a2", text: "Permanece constante en todo el rango" },
      { id: "a3", text: "Varía exponencialmente desde Vc hasta VD" },
      { id: "a4", text: "Varía de forma inversa a la velocidad" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "vn-diagram",
  },
  {
    id: "q17",
    text: "¿Qué representa la línea diagonal inferior derecha del diagrama V-n?",
    answers: [
      {
        id: "a1",
        text: "La variación lineal del factor de carga inferior desde Vc hasta VD",
      },
      { id: "a2", text: "El límite de velocidad de entrada en pérdida" },
      { id: "a3", text: "La velocidad de cálculo de picada" },
      { id: "a4", text: "El límite normativo de la aeronave" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "vn-diagram",
  },
  {
    id: "q18",
    text: "¿Bajo qué condiciones se pueden utilizar factores de carga de maniobra inferiores a los especificados?",
    answers: [
      {
        id: "a1",
        text: "Si el avión tiene características de diseño que imposibilitan superar los valores especificados",
      },
      { id: "a2", text: "Si la aeronave opera a altitudes muy bajas" },
      { id: "a3", text: "Cuando se utiliza combustible de alta calidad" },
      { id: "a4", text: "Si se reduce el peso del avión en vuelo" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "vn-diagram",
  },
];
