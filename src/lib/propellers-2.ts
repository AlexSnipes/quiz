import { Question } from "@/lib/data";

export const mockPropellers2Questions: Question[] = [
  {
    id: "q21",
    text: "¿Cuáles son las dos formas de generar un esfuerzo propulsivo mencionadas en el texto?",
    answers: [
      {
        id: "a1",
        text: "Variación de la cantidad de movimiento dentro del sistema (motor a reacción)",
      },
      { id: "a2", text: "Componente exterior al sistema (hélice)" },
      { id: "a3", text: "Transformación de energía térmica" },
      { id: "a4", text: "Expansión isotérmica del fluido" },
    ],
    correctAnswers: ["a1", "a2"],
    multipleCorrect: true,
    category: "propellers",
    explanation:
      "El texto describe la propulsión por variación interna de cantidad de movimiento (motor a reacción) y por un componente exterior como la hélice.",
  },
  {
    id: "q22",
    text: "¿Qué propiedades tiene el disco actuador ideal según la teoría elemental?",
    answers: [
      { id: "a1", text: "Es infinitamente delgado" },
      { id: "a2", text: "No ofrece resistencia al aire" },
      { id: "a3", text: "Transfiere energía al fluido en forma de presión" },
      { id: "a4", text: "Genera calor en el flujo" },
    ],
    correctAnswers: ["a1", "a2", "a3"],
    multipleCorrect: true,
    category: "propellers",
    explanation:
      "El disco ideal es muy delgado, no resiste el flujo y añade energía al aire como un salto de presión uniforme.",
  },
  {
    id: "q23",
    text: "Según la teoría elemental, ¿qué ocurre con la velocidad y la presión del flujo antes de llegar al disco?",
    answers: [
      { id: "a1", text: "La velocidad del fluido aumenta" },
      { id: "a2", text: "La presión del fluido disminuye" },
      { id: "a3", text: "La temperatura del fluido sube" },
      { id: "a4", text: "El flujo se vuelve turbulento" },
    ],
    correctAnswers: ["a1", "a2"],
    multipleCorrect: true,
    category: "propellers",
    explanation:
      "Al converger las líneas de corriente la velocidad crece y la presión cae antes del salto que impone el disco.",
  },
  {
    id: "q24",
    text: "¿En qué consiste la teoría de elementos de pala para el análisis de hélices?",
    answers: [
      {
        id: "a1",
        text: "Dividir la pala en secciones y estudiar cada perfil aerodinámico",
      },
      { id: "a2", text: "Tratar la hélice como un cilindro sólido" },
      { id: "a3", text: "Analizar el flujo en régimen transitorio" },
      {
        id: "a4",
        text: "Ignorar la sustentación y considerar solo la resistencia",
      },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "propellers",
    explanation:
      "Se toman varios cortes a lo largo de la pala para calcular fuerzas en cada perfil aerodinámico.",
  },
  {
    id: "q25",
    text: "¿Qué fuerzas aerodinámicas actúan sobre cada sección de la pala?",
    answers: [
      { id: "a1", text: "Sustentación" },
      { id: "a2", text: "Resistencia" },
      { id: "a3", text: "Empuje directo" },
      { id: "a4", text: "Presión de frenado" },
    ],
    correctAnswers: ["a1", "a2"],
    multipleCorrect: true,
    category: "propellers",
    explanation:
      "Cada perfil genera sustentación (lift) y resistencia (drag) por la interacción con el viento relativo.",
  },
  {
    id: "q26",
    text: "¿Cuáles son las componentes de la resultante de sustentación y resistencia en la hélice?",
    answers: [
      { id: "a1", text: "Tracción (empuje)" },
      { id: "a2", text: "Torque" },
      { id: "a3", text: "Fuerza centrífuga" },
      { id: "a4", text: "Momento de vuelco" },
    ],
    correctAnswers: ["a1", "a2"],
    multipleCorrect: true,
    category: "propellers",
    explanation:
      "La componente paralela al eje es la tracción y la compuesta en el plano de rotación es el torque.",
  },
  {
    id: "q27",
    text: "¿Cómo se define el ángulo β en un elemento de pala?",
    answers: [
      { id: "a1", text: "Entre la cuerda geométrica y el plano de rotación" },
      { id: "a2", text: "Entre la cuerda y el viento relativo" },
      { id: "a3", text: "Entre el eje y la cuerda" },
      { id: "a4", text: "Entre el plano de vuelo y la cuerda" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "propellers",
    explanation:
      "El ángulo geométrico β se mide entre la cuerda de la pala y el plano de rotación.",
  },
  {
    id: "q28",
    text: "¿Qué es el paso geométrico de una hélice?",
    answers: [
      {
        id: "a1",
        text: "Distancia que avanzaría en una vuelta si fuera un tornillo",
      },
      { id: "a2", text: "Ángulo entre viento relativo y cuerda" },
      { id: "a3", text: "Velocidad tangencial de la pala" },
      { id: "a4", text: "Paso producido solo por sustentación" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "propellers",
    explanation:
      "El paso geométrico es la distancia longitudinal recorrida en una revolución ideal.",
  },
  {
    id: "q29",
    text: "¿Cómo se define el paso efectivo o aerodinámico?",
    answers: [
      {
        id: "a1",
        text: "Distancia resultante de la sustentación y resistencia reales",
      },
      { id: "a2", text: "Ángulo geométrico de instalación" },
      { id: "a3", text: "Paso ideal sin pérdidas" },
      { id: "a4", text: "Velocidad de rotación de la hélice" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "propellers",
    explanation:
      "El paso efectivo surge de las fuerzas reales de sustentación y resistencia que desplazan la aeronave.",
  },
  {
    id: "q30",
    text: "¿Qué es el deslizamiento en una hélice?",
    answers: [
      { id: "a1", text: "Diferencia entre paso geométrico y efectivo" },
      { id: "a2", text: "Relación entre torque y sustentación" },
      { id: "a3", text: "Velocidad tangencial menos velocidad axial" },
      { id: "a4", text: "Ángulo de torsión de la pala" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "propellers",
    explanation:
      "El deslizamiento mide la pérdida entre lo geométrico y lo realmente obtenido por la aerodinámica.",
  },
  {
    id: "q31",
    text: "¿Cuáles son los esfuerzos que debe resistir la hélice?",
    answers: [
      { id: "a1", text: "Fuerza centrífuga" },
      { id: "a2", text: "Flexión por torque" },
      { id: "a3", text: "Flexión por tracción" },
      {
        id: "a4",
        text: "Torsión aerodinámica y torsión por fuerza centrífuga",
      },
    ],
    correctAnswers: ["a1", "a2", "a3", "a4"],
    multipleCorrect: true,
    category: "propellers",
    explanation:
      "La hélice soporta fuerzas centrífugas, momentos de flexión por torque y tracción, y torsiones aerodinámica y centrífuga.",
  },
  {
    id: "q32",
    text: "¿Qué provoca la torsión aerodinámica en la pala?",
    answers: [
      { id: "a1", text: "Descentrado del centro de presión respecto al eje" },
      { id: "a2", text: "Distribución uniforme de masa" },
      { id: "a3", text: "Variación de temperatura" },
      { id: "a4", text: "Velocidad constante en todo el radio" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "propellers",
    explanation:
      "El centro de presión desplazado genera un momento que tiende a aumentar el ángulo de paso.",
  },
  {
    id: "q33",
    text: "¿Cómo afecta la torsión por fuerza centrífuga al paso de la hélice?",
    answers: [
      { id: "a1", text: "Disminuye el paso" },
      { id: "a2", text: "Incrementa el paso" },
      { id: "a3", text: "No altera el paso" },
      { id: "a4", text: "Provoca vibraciones" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "propellers",
    explanation:
      "La torsión centrífuga alinea la masa y tiende a reducir el ángulo de paso.",
  },
  {
    id: "q34",
    text: "¿Qué partes componen el elemento de pala de hélice?",
    answers: [
      { id: "a1", text: "Raíz de pala (cubo)" },
      { id: "a2", text: "Sección medial" },
      { id: "a3", text: "Puntera (extremo)" },
      { id: "a4", text: "Diámetro del disco" },
    ],
    correctAnswers: ["a1", "a2", "a3"],
    multipleCorrect: true,
    category: "propellers",
    explanation:
      "La pala va desde su raíz en el cubo, continua por varias secciones y termina en la puntera.",
  },
  {
    id: "q35",
    text: "¿Por qué la pala de la hélice presenta torsión geométrica a lo largo del radio?",
    answers: [
      { id: "a1", text: "Porque la velocidad tangencial varía con el radio" },
      { id: "a2", text: "Para contrarrestar la fuerza centrífuga" },
      { id: "a3", text: "Para mantener constante el ángulo de ataque real" },
      { id: "a4", text: "Para facilitar el montaje en el cubo" },
    ],
    correctAnswers: ["a1", "a3"],
    multipleCorrect: true,
    category: "propellers",
    explanation:
      "La variación de velocidad tangencial exige ajustar la torsión para conservar un ángulo de ataque adecuado.",
  },
  {
    id: "q36",
    text: "¿Por qué la raíz de la pala es más gruesa estructuralmente?",
    answers: [
      { id: "a1", text: "Para resistir esfuerzos de flexión" },
      { id: "a2", text: "Para soportar esfuerzos de tracción" },
      { id: "a3", text: "Para reducir el momento de inercia" },
      { id: "a4", text: "Para mejorar la aerodinámica en el borde de ataque" },
    ],
    correctAnswers: ["a1", "a2"],
    multipleCorrect: true,
    category: "propellers",
    explanation:
      "La raíz soporta las mayores cargas de flexión y tracción generadas en operación.",
  },
];
