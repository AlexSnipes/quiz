import { Question } from "@/lib/data";

export const mockPropellers3Questions: Question[] = [
  {
    id: "q40",
    text: "¿Qué es el factor de actividad de una pala de hélice?",
    answers: [
      {
        id: "a40",
        text: "Asociado con la geometría de la pala y la forma de su superficie",
      },
      {
        id: "a41",
        text: "Indica la capacidad de absorción de potencia de la pala a igual rpm",
      },
      { id: "a42", text: "Determina la velocidad tangencial máxima" },
      { id: "a43", text: "Define el diámetro óptimo de la hélice" },
    ],
    correctAnswers: ["a40", "a41"],
    multipleCorrect: true,
    category: "propellers",
    explanation:
      "El factor de actividad relaciona la superficie hacia la puntera con la potencia que la pala puede absorber a las mismas rpm.",
  },
  {
    id: "q41",
    text: "¿Qué parámetros se mantienen constantes en la comparación de hélices con distinto factor de actividad?",
    answers: [
      { id: "a44", text: "Ángulo de ataque" },
      { id: "a45", text: "Ángulo de torsión" },
      { id: "a46", text: "Longitud radial específica" },
      { id: "a47", text: "Rpm de la hélice" },
    ],
    correctAnswers: ["a44", "a45", "a46", "a47"],
    multipleCorrect: true,
    category: "propellers",
    explanation:
      "La comparación se hace a igual ángulo de ataque, ángulo de torsión, estación radial y rpm.",
  },
  {
    id: "q42",
    text: "¿Qué aspectos se consideran en la elección de la hélice durante la etapa de diseño?",
    answers: [
      { id: "a48", text: "Sistema de control del ángulo de pala" },
      { id: "a49", text: "Geometría de la pala (perfiles y torsión)" },
      { id: "a50", text: "Diámetro y velocidad de rotación" },
      { id: "a51", text: "Método de fabricación" },
    ],
    correctAnswers: ["a48", "a49", "a50"],
    multipleCorrect: true,
    category: "propellers",
    explanation:
      "Se evalúan el control de paso, la forma y torsión de la pala, y el diámetro/velocidad para evitar Mach excesivo.",
  },
  {
    id: "q43",
    text: "¿Qué tipos de control de paso de hélice menciona el texto?",
    answers: [
      { id: "a52", text: "Paso fijo" },
      { id: "a53", text: "Rpm constante (varía el paso)" },
      { id: "a54", text: "Paso constante (varía la potencia del motor)" },
      { id: "a55", text: "Control hidrostático del flujo" },
    ],
    correctAnswers: ["a52", "a53", "a54"],
    multipleCorrect: true,
    category: "propellers",
    explanation:
      "El texto describe hélice de paso fijo, de rpm constante (ajusta paso) y de paso constante (ajusta potencia).",
  },
  {
    id: "q44",
    text: "En una hélice de rpm constante, ¿qué varía para mantener las revoluciones constantes?",
    answers: [
      { id: "a56", text: "El paso de la hélice" },
      { id: "a57", text: "La potencia del motor" },
      { id: "a58", text: "La densidad del aire" },
      { id: "a59", text: "El diámetro de la hélice" },
    ],
    correctAnswers: ["a56"],
    multipleCorrect: false,
    category: "propellers",
    explanation:
      "Para rpm constantes, el sistema varía el paso de la hélice según las condiciones de vuelo.",
  },
  {
    id: "q45",
    text: "¿Cómo funciona el beta control según el texto?",
    answers: [
      {
        id: "a60",
        text: "El paso se mantiene constante y varía la potencia del motor para mantener rpm",
      },
      { id: "a61", text: "El paso varía para mantener constante la potencia" },
      { id: "a62", text: "El ángulo beta cambia con la velocidad de vuelo" },
      {
        id: "a63",
        text: "El sistema ajusta automáticamente la densidad del aire",
      },
    ],
    correctAnswers: ["a60"],
    multipleCorrect: false,
    category: "propellers",
    explanation:
      "En beta control, el paso geométrico permanece fijo y la potencia varía para sostener rpm constantes.",
  },
  {
    id: "q46",
    text: "¿Qué efecto produce un aumento del diámetro y la velocidad de rotación de la hélice?",
    answers: [
      {
        id: "a64",
        text: "La velocidad tangencial de la puntera puede acercarse a Mach 1 y generar ondas de choque",
      },
      { id: "a65", text: "Disminuye el factor de actividad" },
      { id: "a66", text: "Aumenta linealmente la eficiencia" },
      { id: "a67", text: "Reduce el coeficiente de tracción" },
    ],
    correctAnswers: ["a64"],
    multipleCorrect: false,
    category: "propellers",
    explanation:
      "Un diámetro mayor y alta rpm pueden llevar la puntera a velocidades transónicas, disminuyendo la eficiencia.",
  },
  {
    id: "q47",
    text: "¿Cómo se define la eficiencia de una hélice?",
    answers: [
      {
        id: "a68",
        text: "Relación entre la potencia útil (tracción por velocidad) y la potencia entregada al eje",
      },
      { id: "a69", text: "Proporción entre torque y rpm" },
      { id: "a70", text: "Valor del coeficiente de sustentación" },
      { id: "a71", text: "Relación entre diámetro y paso geométrico" },
    ],
    correctAnswers: ["a68"],
    multipleCorrect: false,
    category: "propellers",
    explanation:
      "La eficiencia η = (T·V) / P representa cuánto del motor se convierte en tracción efectiva.",
  },
  {
    id: "q48",
    text: "¿Cuáles de estas consideraciones de eficiencia menciona el texto?",
    answers: [
      { id: "a72", text: "La eficiencia es nula en condiciones estáticas" },
      {
        id: "a73",
        text: "Alcanza valores máximos a altas velocidades de vuelo",
      },
      { id: "a74", text: "Puede superar el 85%" },
      {
        id: "a75",
        text: "Es independiente de las fases de despegue y trepada",
      },
    ],
    correctAnswers: ["a72", "a73", "a74"],
    multipleCorrect: true,
    category: "propellers",
    explanation:
      "La eficiencia crece con la velocidad, puede exceder el 85% y es cero en estático; también se evalúan despegue y trepada.",
  },
  {
    id: "q49",
    text: "¿Qué coeficientes adimensionales aparecen en la ecuación de eficiencia?",
    answers: [
      { id: "a76", text: "Coeficiente de tracción (CT)" },
      { id: "a77", text: "Coeficiente de potencia (CP)" },
      { id: "a78", text: "Relación de avance (J)" },
      { id: "a79", text: "Coeficiente de fricción (Cf)" },
    ],
    correctAnswers: ["a76", "a77", "a78"],
    multipleCorrect: true,
    category: "propellers",
    explanation:
      "La fórmula usa los coeficientes CT, CP y la relación de avance J para adimensionalizar tracción y potencia.",
  },
  {
    id: "q50",
    text: "Según el texto, ¿qué datos se necesitan para obtener la eficiencia desde las gráficas?",
    answers: [
      { id: "a80", text: "Relación de avance (J)" },
      { id: "a81", text: "Coeficiente de potencia (CP)" },
      { id: "a82", text: "Ángulo beta al 75% del radio de la pala" },
      { id: "a83", text: "Diámetro de la hélice" },
    ],
    correctAnswers: ["a80", "a81", "a82"],
    multipleCorrect: true,
    category: "propellers",
    explanation:
      "Conociendo J, CP y el ángulo beta al 75% se lee directamente la eficiencia en las curvas.",
  },
  {
    id: "q51",
    text: "¿Qué muestran las gráficas de coeficiente de tracción (CT) en función de la relación de avance (J)?",
    answers: [
      {
        id: "a84",
        text: "La variación de CT para distintos valores de ángulo de paso",
      },
      { id: "a85", text: "La relación entre torque y rpm" },
      { id: "a86", text: "La eficiencia de la hélice" },
      { id: "a87", text: "El factor de actividad de la pala" },
    ],
    correctAnswers: ["a84"],
    multipleCorrect: false,
    category: "propellers",
    explanation:
      "Las curvas de CT vs J muestran cómo cambia la fuerza de tracción con J para diferentes ángulos de paso.",
  },
];
