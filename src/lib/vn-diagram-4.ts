import { Question } from "@/lib/data";

export const mockDiagramVn4Questions: Question[] = [
  {
    id: "q31",
    text: "¿Qué es la velocidad de cálculo de maniobra (Va)?",
    answers: [
      {
        id: "a1",
        text: "La máxima velocidad a la que se calcula la estructura de la aeronave para un desplazamiento máximo de los mandos de vuelo en condiciones de vuelo horizontal y nivelado.",
      },
      {
        id: "a2",
        text: "La velocidad a la que se inicia el encendido de la bujía.",
      },
      {
        id: "a3",
        text: "La velocidad de crucero en condiciones normales de operación.",
      },
      {
        id: "a4",
        text: "La velocidad mínima para alcanzar la sustentación necesaria en maniobra.",
      },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "vn-diagram",
  },
  {
    id: "q32",
    text: "Según la norma, ¿cuál es la condición que debe cumplir Va en relación a VS1 y al factor de carga n?",
    answers: [
      {
        id: "a1",
        text: "Va no puede ser inferior a VS1 multiplicada por la raíz cuadrada de n.",
      },
      {
        id: "a2",
        text: "Va debe ser inferior a VS1 multiplicada por la raíz cuadrada de n.",
      },
      {
        id: "a3",
        text: "Va debe ser igual a VS1 dividida por la raíz cuadrada de n.",
      },
      { id: "a4", text: "No existe relación entre Va, VS1 y n." },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "vn-diagram",
  },
  {
    id: "q33",
    text: "¿Qué requisitos debe cumplir la velocidad de cálculo de crucero (Vc)?",
    answers: [
      {
        id: "a1",
        text: "Debe ser suficientemente mayor que VB para compensar aumentos de velocidad inesperados por turbulencia.",
      },
      { id: "a2", text: "No puede ser menor que VB + 1.32 Uref." },
      {
        id: "a3",
        text: "No necesita exceder la velocidad máxima en vuelo nivelado a máxima potencia continua para la altitud correspondiente.",
      },
      { id: "a4", text: "Todas las anteriores son condiciones a cumplir." },
    ],
    correctAnswers: ["a1", "a2", "a3"],
    multipleCorrect: true,
    category: "vn-diagram",
  },
  {
    id: "q34",
    text: "En altitudes donde Vc está limitada por el número de Mach, ¿cuáles afirmaciones son ciertas?",
    answers: [
      {
        id: "a1",
        text: "VB puede elegirse para proporcionar un margen óptimo entre los límites del buffeting de baja y alta velocidad.",
      },
      { id: "a2", text: "VB no necesita ser mayor que Vc." },
      {
        id: "a3",
        text: "Vc puede estar limitada a un número de Mach seleccionado.",
      },
    ],
    correctAnswers: ["a1", "a2", "a3"],
    multipleCorrect: true,
    category: "vn-diagram",
  },
  {
    id: "q35",
    text: "¿Qué es la velocidad de cálculo de picada (VD)?",
    answers: [
      {
        id: "a1",
        text: "Es la velocidad escogida por el diseñador para asegurar que una maniobra de picada nunca exceda la velocidad de picada, y se relaciona con la velocidad máxima operativa.",
      },
      {
        id: "a2",
        text: "Es la velocidad a la que se produce la entrada en pérdida de sustentación.",
      },
      {
        id: "a3",
        text: "Es la velocidad mínima operativa para maniobras de encabritado.",
      },
      {
        id: "a4",
        text: "Es la velocidad de crucero bajo condiciones de emergencia.",
      },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "vn-diagram",
  },
  {
    id: "q36",
    text: "Para mantener un margen de seguridad, ¿qué relación debe cumplir la velocidad de crucero (Vc) respecto a la velocidad de picada (VD) en términos de Mach?",
    answers: [
      {
        id: "a1",
        text: "La relación de Mach de Vc debe ser menor o igual a 0,8 la relación de Mach de VD.",
      },
      {
        id: "a2",
        text: "La relación de Mach de Vc debe ser mayor que la de VD.",
      },
      { id: "a3", text: "Vc y VD deben tener la misma relación de Mach." },
      {
        id: "a4",
        text: "No existe relación entre Vc y VD en términos de Mach.",
      },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "vn-diagram",
  },
  {
    id: "q37",
    text: "¿Cómo se define la velocidad de cálculo para máxima intensidad de ráfaga (VB)?",
    answers: [
      {
        id: "a1",
        text: "VB se determina a partir de la velocidad de pérdida VS1, incorporando un factor que incluye Vc, Uref, la carga alar y el factor de atenuación, y se obtiene aplicando la raíz cuadrada a la suma de términos.",
      },
      {
        id: "a2",
        text: "VB es igual a la velocidad de crucero en condiciones de turbulencia.",
      },
      {
        id: "a3",
        text: "VB se define únicamente por la velocidad de entrada en pérdida.",
      },
      { id: "a4", text: "VB es la velocidad máxima operativa de la aeronave." },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "vn-diagram",
  },
  {
    id: "q38",
    text: "¿Qué función cumple el factor de atenuación (Kg) en la ecuación para VB?",
    answers: [
      {
        id: "a1",
        text: "Determina el periodo de transición para alcanzar la intensidad máxima de la ráfaga.",
      },
      {
        id: "a2",
        text: "Depende de las características de la aeronave, como su geometría, peso y características aerodinámicas.",
      },
      { id: "a3", text: "No influye en el cálculo de VB." },
      {
        id: "a4",
        text: "Se utiliza para ajustar la velocidad de cálculo de picada.",
      },
    ],
    correctAnswers: ["a1", "a2"],
    multipleCorrect: true,
    category: "vn-diagram",
  },
  {
    id: "q39",
    text: "¿Qué consecuencias estructurales se describen si se exceden los límites de carga y velocidad establecidos en el diagrama?",
    answers: [
      {
        id: "a1",
        text: "Se produce daño estructural, que implica una deformación permanente de la estructura.",
      },
      {
        id: "a2",
        text: "Si se continúa excediendo, se alcanza la zona de falla estructural, en la que la estructura puede romperse.",
      },
      { id: "a3", text: "El avión mejora su rendimiento aerodinámico." },
      {
        id: "a4",
        text: "No hay consecuencias si se exceden brevemente los límites.",
      },
    ],
    correctAnswers: ["a1", "a2"],
    multipleCorrect: true,
    category: "vn-diagram",
  },
  {
    id: "q310",
    text: "¿Qué sucede en la zona trasera del diagrama al exceder la velocidad límite VD?",
    answers: [
      {
        id: "a1",
        text: "Se genera una zona de falla estructural debido al exceso de velocidad.",
      },
      { id: "a2", text: "La sustentación aumenta drásticamente." },
      { id: "a3", text: "El factor de carga se reduce a cero." },
      {
        id: "a4",
        text: "El avión entra en una maniobra de emergencia controlada.",
      },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "vn-diagram",
  },
];
