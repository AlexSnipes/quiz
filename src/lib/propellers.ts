import { Question } from "@/lib/data";

export const mockPropellersQuestions: Question[] = [
  {
    id: "q1",
    text: "¿Cuáles son las dos formas de generar un esfuerzo propulsivo mencionadas en el texto?",
    answers: [
      {
        id: "a1",
        text: "Variación de la cantidad de movimiento dentro del sistema (motor a reacción)",
      },
      { id: "a2", text: "Componente exterior al sistema (hélice)" },
      { id: "a3", text: "Turbina centrífuga" },
      { id: "a4", text: "Compresor axial" },
    ],
    correctAnswers: ["a1", "a2"],
    multipleCorrect: true,
    category: "propellers",
    explanation:
      "El texto menciona que la propulsión puede lograrse por variación interna de cantidad de movimiento (motor a reacción) o por una pieza exterior al sistema, como la hélice.",
  },
  {
    id: "q2",
    text: "¿Qué características se asumen del disco actuador ideal?",
    answers: [
      { id: "a1", text: "Es infinitamente delgado" },
      { id: "a2", text: "No ofrece resistencia al aire" },
      { id: "a3", text: "Tiene un área S" },
      { id: "a4", text: "Genera un gradiente de temperatura en el flujo" },
    ],
    correctAnswers: ["a1", "a2", "a3"],
    multipleCorrect: true,
    category: "propellers",
    explanation:
      "El disco ideal es infinitamente delgado, sin resistencia al aire y de área S, transfiriendo energía en forma de presión.",
  },
  {
    id: "q3",
    text: "Según la teoría elemental de la cantidad de movimiento, ¿qué sucede con la velocidad y la presión del fluido al atravesar el disco?",
    answers: [
      { id: "a1", text: "La velocidad del fluido aumenta antes del disco" },
      { id: "a2", text: "La presión del fluido disminuye antes del disco" },
      { id: "a3", text: "El disco produce un salto de presión" },
      { id: "a4", text: "La velocidad del fluido disminuye en el disco" },
    ],
    correctAnswers: ["a1", "a2", "a3"],
    multipleCorrect: true,
    category: "propellers",
    explanation:
      "El flujo se acelera (velocidad ↑) y pierde presión antes del disco; al pasar, se produce un salto de presión gracias a la energía que transfiere el disco.",
  },
  {
    id: "q4",
    text: "¿Cómo se analiza la pala de la hélice en la teoría de elementos de pala?",
    answers: [
      {
        id: "a1",
        text: "Dividiéndola en secciones para estudiar distintos perfiles aerodinámicos",
      },
      { id: "a2", text: "Considerándola como un disco uniforme" },
      { id: "a3", text: "Estudiando el flujo en estado transitorio" },
      { id: "a4", text: "Calculando la temperatura del aire" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "propellers",
    explanation:
      "La teoría de elementos de pala divide la pala en secciones para analizar las fuerzas en cada perfil aerodinámico.",
  },
  {
    id: "q5",
    text: "¿Qué fuerzas aerodinámicas actúan sobre cada perfil de pala?",
    answers: [
      { id: "a1", text: "Sustentación" },
      { id: "a2", text: "Resistencia" },
      { id: "a3", text: "Empuje directo" },
      { id: "a4", text: "Fuerza centrífuga" },
    ],
    correctAnswers: ["a1", "a2"],
    multipleCorrect: true,
    category: "propellers",
    explanation:
      "Sobre cada perfil actúan la sustentación (lift) y la resistencia (drag), que resultan de su interacción con el viento relativo.",
  },
  {
    id: "q6",
    text: "¿Cuáles son las componentes de la resultante de sustentación y resistencia en la hélice?",
    answers: [
      { id: "a1", text: "Torque de la hélice" },
      { id: "a2", text: "Tracción" },
      { id: "a3", text: "Fuerza centrífuga" },
      { id: "a4", text: "Momentos de flexión" },
    ],
    correctAnswers: ["a1", "a2"],
    multipleCorrect: true,
    category: "propellers",
    explanation:
      "La resultante de sustentación y resistencia tiene una componente paralela al eje (tracción) y otra en el plano de rotación (torque).",
  },
  {
    id: "q7",
    text: "¿Cómo se define el ángulo β (beta) en un elemento de pala?",
    answers: [
      {
        id: "a1",
        text: "Ángulo entre la cuerda geométrica de la pala y el plano de rotación",
      },
      {
        id: "a2",
        text: "Ángulo entre la cuerda geométrica y la dirección de vuelo",
      },
      { id: "a3", text: "Ángulo entre el viento relativo y la cuerda" },
      { id: "a4", text: "Ángulo entre el eje de la hélice y la cuerda" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "propellers",
    explanation:
      "El ángulo β es geométrico y se mide entre la cuerda de la pala y el plano de referencia de la rotación.",
  },
  {
    id: "q8",
    text: "¿Qué es el paso geométrico de una hélice?",
    answers: [
      {
        id: "a1",
        text: "Distancia longitudinal recorrida en una revolución de la hélice",
      },
      { id: "a2", text: "Ángulo entre la cuerda y el viento relativo" },
      { id: "a3", text: "Paso producido por la aerodinámica" },
      { id: "a4", text: "Velocidad tangencial del extremo de la pala" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "propellers",
    explanation:
      "El paso geométrico es la distancia que avanzaría la hélice en una vuelta si cortara un tornillo ideal.",
  },
  {
    id: "q9",
    text: "¿Cómo se define el paso aerodinámico o efectivo?",
    answers: [
      {
        id: "a1",
        text: "Distancia recorrida resultante de la generación de sustentación y resistencia",
      },
      { id: "a2", text: "Ángulo geométrico de instalación de la pala" },
      { id: "a3", text: "Paso producido por la aerodinámica real del perfil" },
      { id: "a4", text: "Paso sin presencia de rendimiento" },
    ],
    correctAnswers: ["a1", "a3"],
    multipleCorrect: true,
    category: "propellers",
    explanation:
      "El paso efectivo es el producido por las fuerzas aerodinámicas reales de sustentación y resistencia en la pala.",
  },
  {
    id: "q10",
    text: "¿Qué es el deslizamiento de una hélice?",
    answers: [
      {
        id: "a1",
        text: "Diferencia entre el paso geométrico y el paso efectivo",
      },
      { id: "a2", text: "Relación entre tracción y torque" },
      { id: "a3", text: "Ángulo de paso relativo al viento" },
      { id: "a4", text: "Variación de velocidad tangencial con el radio" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "propellers",
    explanation:
      "El deslizamiento mide la pérdida entre el movimiento geométrico esperado y el real obtenido por la aerodinámica.",
  },
  {
    id: "q11",
    text: "¿Qué define la cuerda de sustentación cero en un perfil de pala?",
    answers: [
      {
        id: "a1",
        text: "La posición en la que no se genera sustentación cuando incide el viento relativo",
      },
      { id: "a2", text: "La cuerda donde la resistencia es máxima" },
      { id: "a3", text: "La sección de la pala con torque cero" },
      { id: "a4", text: "La línea media del perfil aerodinámico" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "propellers",
    explanation:
      "La cuerda de sustentación cero es aquella en la que la distribución de presiones no genera fuerza de sustentación.",
  },
  {
    id: "q12",
    text: "¿Para qué sirve calcular la sumatoria de tracción y torque de todos los perfiles?",
    answers: [
      { id: "a1", text: "Determinar el rendimiento o eficiencia de la hélice" },
      { id: "a2", text: "Calcular el empuje máximo del avión" },
      { id: "a3", text: "Diseñar la punta de la pala" },
      { id: "a4", text: "Evaluar la vibración de la hélice" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "propellers",
    explanation:
      "La eficiencia de la hélice se obtiene al comparar la tracción total frente al torque necesario para vencerlo.",
  },
];
