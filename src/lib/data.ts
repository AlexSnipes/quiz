export interface Answer {
  id: string;
  text: string;
}

export interface Question {
  id: string;
  text: string;
  answers: Answer[];
  correctAnswers: string[]; // Array de IDs de respuestas correctas
  multipleCorrect: boolean; // Indica si la pregunta puede tener múltiples respuestas correctas
  category: string;
}

// Datos de ejemplo para la aplicación
export const mockQuestions: Question[] = [
  {
    id: "q1",
    text: "¿Cuántas carcasas tiene la cámara de combustión?",
    answers: [
      { id: "a1", text: "Dos: una interior y una exterior" },
      { id: "a2", text: "Tres" },
      { id: "a3", text: "Ninguna" },
      { id: "a4", text: "Una sola" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "Camaras de Combustión",
  },
  {
    id: "q2",
    text: "¿Qué función cumple el aire primario en la cámara de combustión?",
    answers: [
      { id: "a1", text: "Refrigerar la cámara de combustión" },
      { id: "a2", text: "Ninguna de las anteriores" },
      {
        id: "a3",
        text: "Entrar en contacto directamente con el inyector para encender la mezcla",
      },
      { id: "a4", text: "Mezclarse con el combustible no quemado" },
    ],
    correctAnswers: ["a3"],
    multipleCorrect: false,
    category: "Camaras de Combustión",
  },
  {
    id: "q3",
    text: "¿Cuál es la función principal del aire secundario en la cámara de combustión?",
    answers: [
      { id: "a1", text: "Mantener la llama encendida" },
      {
        id: "a2",
        text: "Terminar de mezclarse con el combustible que no fue quemado en un principio",
      },
      { id: "a3", text: "Refrigerar la cámara de combustión" },
      { id: "a4", text: "Activar el inyector" },
    ],
    correctAnswers: ["a2"],
    multipleCorrect: false,
    category: "Camaras de Combustión",
  },
  {
    id: "q4",
    text: "¿Cuál es la función principal del tercer flujo de aire en la cámara de combustión?",
    answers: [
      { id: "a1", text: "Aumentar la temperatura de la combustión" },
      { id: "a2", text: "Refrigerar la cámara de combustión" },
      { id: "a3", text: "Encender el inyector" },
      { id: "a4", text: "Mezclar con el combustible remanente" },
    ],
    correctAnswers: ["a2"],
    multipleCorrect: false,
    category: "Camaras de Combustión",
  },
  {
    id: "q5",
    text: "¿Cuál es la principal desventaja de las cámaras de combustión individuales?",
    answers: [
      { id: "a1", text: "No permiten la combustión completa del combustible" },
      {
        id: "a2",
        text: "Producen puntos de alta temperatura que pueden causar fatiga térmica con el tiempo",
      },
      { id: "a3", text: "No están conectadas entre sí" },
      { id: "a4", text: "Son difíciles de mantener" },
    ],
    correctAnswers: ["a2"],
    multipleCorrect: false,
    category: "Camaras de Combustión",
  },
  {
    id: "q6",
    text: "¿Cómo se relacionan las cámaras de combustión entre sí?",
    answers: [
      { id: "a1", text: "No tienen relación" },
      {
        id: "a2",
        text: "Están conectadas a través de conductos que mantienen la llama encendida en todas",
      },
      { id: "a3", text: "Se unen en el centro para crear una sola llama" },
      { id: "a4", text: "Están completamente aisladas entre sí" },
    ],
    correctAnswers: ["a2"],
    multipleCorrect: false,
    category: "Camaras de Combustión",
  },
  {
    id: "q7",
    text: "¿Cuál es la ventaja principal de las cámaras de combustión individuales?",
    answers: [
      { id: "a1", text: "Distribución uniforme de temperatura" },
      { id: "a2", text: "Bajo consumo de combustible" },
      { id: "a3", text: "Menor emisión de gases" },
      { id: "a4", text: "Fácil mantenimiento" },
    ],
    correctAnswers: ["a4"],
    multipleCorrect: false,
    category: "Camaras de Combustión",
  },
  {
    id: "q8",
    text: "¿Cuáles de las siguientes funciones están asociadas a los diferentes flujos de aire en la cámara de combustión?",
    answers: [
      {
        id: "a1",
        text: "La tercer parte del aire refrigera la cámara de combustión",
      },
      { id: "a2", text: "Un flujo adicional aumenta la presión en la cámara" },
      {
        id: "a3",
        text: "El aire primario entra en contacto directo con el inyector para encender la mezcla",
      },
      {
        id: "a4",
        text: "El aire secundario completa la mezcla con el combustible no quemado",
      },
    ],
    correctAnswers: ["a1", "a3", "a4"],
    multipleCorrect: true,
    category: "Camaras de Combustión",
  },
  {
    id: "q9",
    text: "¿Cómo se mantiene la llama encendida en las cámaras de combustión?",
    answers: [
      { id: "a1", text: "Por el diseño de la cámara que concentra el calor" },
      {
        id: "a2",
        text: "Mediante conductos que conectan las cámaras y mantienen la llama encendida",
      },
      { id: "a3", text: "Gracias a la inyección continua de combustible" },
      {
        id: "a4",
        text: "Por un sistema de encendido eléctrico independiente en cada cámara",
      },
    ],
    correctAnswers: ["a2"],
    multipleCorrect: false,
    category: "Camaras de Combustión",
  },
  {
    id: "q10",
    text: "¿Qué efecto produce la variación de temperatura en la turbina?",
    answers: [
      { id: "a1", text: "Incrementa la eficiencia del sistema" },
      { id: "a2", text: "Mejora la distribución del combustible" },
      { id: "a3", text: "Provoca fatiga térmica en los álabes de la turbina" },
      { id: "a4", text: "Disminuye el rendimiento de la combustión" },
    ],
    correctAnswers: ["a3"],
    multipleCorrect: false,
    category: "Camaras de Combustión",
  },
];

export async function loadQuestionsFromPDF(
  pdfUrl: string,
): Promise<Question[]> {
  console.log(`Cargando preguntas desde: ${pdfUrl}`);

  // Simulamos un retraso de red
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // Devolvemos las preguntas de ejemplo
  return mockQuestions;
}

export const categories = [
  "Todas",
  "Camaras de Combustión",
  "Programación",
  "Redes",
  "Sistemas Operativos",
  "Hardware",
];
