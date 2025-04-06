import { Question } from "@/lib/data";

export const mockDiagramVn3Questions: Question[] = [
  {
    id: "q21",
    text: "¿Qué se entiende por velocidades de cálculo dentro del diagrama V-n?",
    answers: [
      {
        id: "a1",
        text: "Son velocidades utilizadas para el cálculo estructural, establecidas por el diseñador y sujetas a normas mínimas",
      },
      {
        id: "a2",
        text: "Son velocidades máximas que la aeronave puede alcanzar en cualquier situación",
      },
      {
        id: "a3",
        text: "Son velocidades que sólo se usan en condiciones de emergencia",
      },
      {
        id: "a4",
        text: "Son velocidades calculadas para optimizar el consumo de combustible",
      },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "vn-diagram",
  },
  {
    id: "q22",
    text: "¿Cuáles son las velocidades de cálculo que se mencionan en el documento?",
    answers: [
      { id: "a1", text: "Va: velocidad de cálculo de maniobra" },
      { id: "a2", text: "Vc: velocidad de cálculo de crucero" },
      { id: "a3", text: "VD: velocidad de cálculo de picada" },
      {
        id: "a4",
        text: "VB: velocidad de cálculo para ráfagas de intensidad máxima",
      },
    ],
    correctAnswers: ["a1", "a2", "a3", "a4"],
    multipleCorrect: true,
    category: "vn-diagram",
  },
  {
    id: "q23",
    text: "¿Qué determina la intersección de la parábola con el factor de carga 1?",
    answers: [
      {
        id: "a1",
        text: "La velocidad de entrada en pérdida en vuelo recto y nivelado",
      },
      { id: "a2", text: "La velocidad de cálculo de picada" },
      { id: "a3", text: "La velocidad de crucero" },
      { id: "a4", text: "La velocidad para ráfagas de intensidad máxima" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "vn-diagram",
  },
  {
    id: "q24",
    text: "¿Qué consecuencia tiene operar a una velocidad inferior a la velocidad de entrada en pérdida?",
    answers: [
      { id: "a1", text: "La aeronave no genera sustentación y se caerá" },
      {
        id: "a2",
        text: "La aeronave mejora su eficiencia en consumo de combustible",
      },
      { id: "a3", text: "Se incrementa el factor de carga" },
      {
        id: "a4",
        text: "El avión realiza una transición suave a vuelo invertido",
      },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "vn-diagram",
  },
  {
    id: "q25",
    text: "¿Qué indica la intersección de la parábola con el valor de factor de carga -1?",
    answers: [
      {
        id: "a1",
        text: "La velocidad de entrada en pérdida para el vuelo recto y nivelado en condición de sustentación negativa, es decir, el vuelo invertido (VG)",
      },
      { id: "a2", text: "La velocidad de cálculo de maniobra" },
      { id: "a3", text: "La velocidad de cálculo de picada" },
      { id: "a4", text: "La velocidad de crucero" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "vn-diagram",
  },
  {
    id: "q26",
    text: "¿Quién establece las velocidades de cálculo de la aeronave según el documento?",
    answers: [
      {
        id: "a1",
        text: "El diseñador, basándose en normas que determinan los valores mínimos",
      },
      { id: "a2", text: "El piloto, mediante el control de potencia" },
      { id: "a3", text: "El fabricante, de forma arbitraria" },
      {
        id: "a4",
        text: "La autoridad aeronáutica, sin intervención del diseñador",
      },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "vn-diagram",
  },
  {
    id: "q27",
    text: "¿Para qué se utiliza la velocidad de entrada en pérdida que se determina en el diagrama V-n?",
    answers: [
      {
        id: "a1",
        text: "Para definir una velocidad límite por debajo de la cual la aeronave no tiene sustentación",
      },
      {
        id: "a2",
        text: "Para aumentar la eficiencia en el consumo de combustible",
      },
      { id: "a3", text: "Para calcular la velocidad de despegue" },
      { id: "a4", text: "Para mejorar la maniobrabilidad en tierra" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "vn-diagram",
  },
];
