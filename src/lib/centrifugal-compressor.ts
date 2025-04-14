import { Question } from "@/lib/data";

export const mockCentrifugalCompressorQuestions: Question[] = [
  {
    id: "q1",
    text: "¿Cuáles son los dos tipos de compresores en motores a reacción mencionados en el texto?",
    answers: [
      { id: "a1", text: "Compresor centrífugo" },
      { id: "a2", text: "Compresor axial" },
      { id: "a3", text: "Compresor rotativo" },
      { id: "a4", text: "Compresor de pistón" },
    ],
    correctAnswers: ["a1", "a2"],
    multipleCorrect: true,
    category: "centrifugal-compressor",
    explanation:
      "El texto indica que existen dos tipos: el compresor centrífugo y el compresor axial.",
  },
  {
    id: "q2",
    text: "¿Cuál es la composición de una etapa en un compresor centrífugo?",
    answers: [
      { id: "a1", text: "Rotor, difusor y colector" },
      { id: "a2", text: "Rotor, estator y compresor" },
      { id: "a3", text: "Difusor, estator y colector" },
      { id: "a4", text: "Cilindro, pistón y válvulas" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "centrifugal-compressor",
    explanation:
      "Una etapa en un compresor centrífugo está formada por tres elementos: rotor, difusor y colector.",
  },
  {
    id: "q3",
    text: "¿Cómo ingresa el fluido al rotor en un compresor centrífugo?",
    answers: [
      { id: "a1", text: "Axialmente, paralelo al eje de giro" },
      { id: "a2", text: "Radialmente, perpendicular al eje de giro" },
      { id: "a3", text: "A través de una entrada oblicua" },
      { id: "a4", text: "Desde la parte inferior del rotor" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "centrifugal-compressor",
    explanation:
      "El fluido ingresa al rotor de forma axial, es decir, paralelo al eje de giro del rotor.",
  },
  {
    id: "q4",
    text: "¿Qué ángulo de desviación adquiere el fluido al pasar por los alabes del rotor en un compresor centrífugo?",
    answers: [
      { id: "a1", text: "90°" },
      { id: "a2", text: "45°" },
      { id: "a3", text: "180°" },
      { id: "a4", text: "0°" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "centrifugal-compressor",
    explanation:
      "Los alabes del rotor están diseñados para desviar el fluido 90°: el fluido ingresa axialmente y sale de forma radial.",
  },
  {
    id: "q5",
    text: "¿Cómo influye la forma de los álabes del rotor en la velocidad resultante del fluido?",
    answers: [
      {
        id: "a1",
        text: "La forma divergente produce diferencias en la componente tangencial y radial",
      },
      { id: "a2", text: "Todos los álabes producen siempre un ángulo de 90°" },
      {
        id: "a3",
        text: "La curvatura de los álabes no afecta la velocidad resultante",
      },
      {
        id: "a4",
        text: "Los álabes rectos incrementan la velocidad axial del fluido",
      },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "centrifugal-compressor",
    explanation:
      "La forma de los álabes (curvados o rectos) modifica el ángulo entre la componente tangencial y la radial, afectando la velocidad resultante del fluido.",
  },
  {
    id: "q6",
    text: "¿Qué función cumple el difusor en un compresor centrífugo?",
    answers: [
      {
        id: "a1",
        text: "Disminuir la velocidad del fluido y aumentar su presión",
      },
      {
        id: "a2",
        text: "Aumentar la velocidad del fluido y disminuir su presión",
      },
      {
        id: "a3",
        text: "Reorientar el flujo de aire sin cambiar la velocidad",
      },
      { id: "a4", text: "Recalentar el fluido antes de la salida" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "centrifugal-compressor",
    explanation:
      "El difusor, al ser divergente, reduce la velocidad del fluido, lo que incrementa su presión.",
  },
  {
    id: "q7",
    text: "¿Cuál es la función del colector en el compresor centrífugo?",
    answers: [
      {
        id: "a1",
        text: "Redireccionar el flujo de aire en forma paralela al eje del motor",
      },
      { id: "a2", text: "Aumentar la velocidad del fluido" },
      { id: "a3", text: "Disminuir la presión del fluido" },
      { id: "a4", text: "Proveer refrigeración al compresor" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "centrifugal-compressor",
    explanation:
      "El colector reorienta el flujo, girándolo 90° para que salga paralelo al eje del motor y pueda dirigirse a la cámara de combustión.",
  },
  {
    id: "q8",
    text: "¿Cuál es el propósito general de un compresor centrífugo en un motor a reacción?",
    answers: [
      {
        id: "a1",
        text: "Incrementar la presión del aire mediante saltos de presión en las etapas",
      },
      { id: "a2", text: "Reducir el consumo de combustible del motor" },
      { id: "a3", text: "Producir una mezcla homogénea de aire y combustible" },
      { id: "a4", text: "Generar turbulencias en el flujo de aire" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "centrifugal-compressor",
    explanation:
      "El compresor centrífugo aumenta la presión del aire a través de saltos de presión generados en cada etapa (rotor, difusor, colector) antes de enviarlo a la cámara de combustión.",
  },
  {
    id: "q9",
    text: "¿Qué cambio experimenta el aire al pasar por el conjunto del rotor, difusor y colector?",
    answers: [
      {
        id: "a1",
        text: "Inicialmente ingresa axialmente, gira 90° y es desacelerado para aumentar la presión",
      },
      {
        id: "a2",
        text: "Ingresa radialmente, se acelera y disminuye la presión",
      },
      {
        id: "a3",
        text: "No sufre cambios significativos en su velocidad ni presión",
      },
      {
        id: "a4",
        text: "Aumenta la velocidad de forma continua y se mantiene a presión constante",
      },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "centrifugal-compressor",
    explanation:
      "El aire ingresa en el rotor de manera axial, es desviado 90° y, al pasar por el difusor, su velocidad disminuye provocando un aumento de presión; luego, el colector reorienta el flujo para enviarlo a la cámara de combustión.",
  },
  {
    id: "q10",
    text: "¿Qué efecto tienen los saltos de presión en un compresor centrífugo?",
    answers: [
      {
        id: "a1",
        text: "Incrementan la presión del aire a través de cada etapa del compresor",
      },
      {
        id: "a2",
        text: "Disminuyen la presión del aire, facilitando su entrada a los cilindros",
      },
      { id: "a3", text: "No afectan la presión, solo la velocidad del aire" },
      { id: "a4", text: "Generan calor excesivo que debe ser disipado" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "centrifugal-compressor",
    explanation:
      "Los saltos de presión que se producen en las etapas (rotor, difusor, colector) incrementan la presión del aire, lo cual es crucial para el funcionamiento del motor a reacción.",
  },
];
