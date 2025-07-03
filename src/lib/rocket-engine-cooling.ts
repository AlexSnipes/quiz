import { Question } from "@/lib/data";

export const mockRocketEngineCoolingQuestions: Question[] = [
  {
    id: "q1",
    text: "¿En qué consiste el enfriamiento por descarga (dump cooling)?",
    answers: [
      {
        id: "a1",
        text: "Circular el combustible por canales y devolverlo a la cámara",
      },
      {
        id: "a2",
        text: "Liberar el combustible directamente sobre la pared interna de la tobera",
      },
      { id: "a3", text: "Inyectar una película protectora de gas" },
      { id: "a4", text: "Usar material ablativo que se erosiona" },
    ],
    correctAnswers: ["a2"],
    multipleCorrect: false,
    category: "rocket-engine-cooling",
    explanation:
      "El dump cooling descarga una pequeña fracción de combustible sobre la tobera para crear una capa protectora.",
  },
  {
    id: "q2",
    text: "¿Qué motor usa enfriamiento por descarga como método secundario?",
    answers: [
      { id: "a1", text: "RS‑25" },
      { id: "a2", text: "J‑2" },
      { id: "a3", text: "Merlin Vacuum" },
      { id: "a4", text: "AJ10" },
    ],
    correctAnswers: ["a2"],
    multipleCorrect: false,
    category: "rocket-engine-cooling",
    explanation:
      "El J‑2 emplea dump cooling expulsando hidrógeno líquido a través de orificios en la tobera.",
  },
  {
    id: "q3",
    text: "¿Qué lanzadores usan el motor J‑2 con enfriamiento por descarga?",
    answers: [
      { id: "a1", text: "Saturn V (S‑II) y Saturn IB (S‑II)" },
      { id: "a2", text: "Falcon 9 y Delta IV" },
      { id: "a3", text: "Space Shuttle y SLS" },
      { id: "a4", text: "Ariane 5 y Delta II" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "rocket-engine-cooling",
    explanation: "El J‑2 se usó en la etapa S‑II de Saturn V y Saturn IB.",
  },
  {
    id: "q4",
    text: "¿Cuál es la principal ventaja del enfriamiento regenerativo?",
    answers: [
      { id: "a1", text: "Reutiliza el calor para precalentar el propelente" },
      { id: "a2", text: "Evita completamente materiales ablativos" },
      { id: "a3", text: "No requiere canales internos" },
      { id: "a4", text: "Sólo funciona en vacío" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "rocket-engine-cooling",
    explanation:
      "El propelente absorbe calor en los canales y luego entra precalentado a la cámara, mejorando la eficiencia.",
  },
  {
    id: "q5",
    text: "¿Qué motores citados usan enfriamiento regenerativo?",
    answers: [
      { id: "a1", text: "RS‑25 y Vulcain 2" },
      { id: "a2", text: "F‑1 y TR‑201" },
      { id: "a3", text: "Merlin Vacuum y AJ10" },
      { id: "a4", text: "J‑2 y RS‑68A" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "rocket-engine-cooling",
    explanation:
      "Los RS‑25 (Shuttle/SLS) y Vulcain 2 (Ariane 5) emplean enfriamiento regenerativo.",
  },
  {
    id: "q6",
    text: "¿Cómo funciona el enfriamiento por ablación?",
    answers: [
      { id: "a1", text: "Circula combustión enriquecida" },
      { id: "a2", text: "Un recubrimiento se sublima y absorbe calor" },
      { id: "a3", text: "Inyecta película de combustible" },
      { id: "a4", text: "Emite calor por radiación" },
    ],
    correctAnswers: ["a2"],
    multipleCorrect: false,
    category: "rocket-engine-cooling",
    explanation:
      "El material ablativo se descompone al calor, protegiendo la estructura.",
  },
  {
    id: "q7",
    text: "¿Qué motores usan enfriamiento por ablación?",
    answers: [
      {
        id: "a1",
        text: "TR‑201, RS‑68A, módulo lunar de ascenso y Delta II/III",
      },
      { id: "a2", text: "RS‑25 y Vulcain 2" },
      { id: "a3", text: "F‑1 y J‑2" },
      { id: "a4", text: "Merlin Vacuum y AJ10" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "rocket-engine-cooling",
    explanation:
      "Los motores TR‑201 (Delta II/III), RS‑68A y el ascenso lunar usan ablación.",
  },
  {
    id: "q8",
    text: "¿Cuál es el principal inconveniente del enfriamiento por ablación?",
    answers: [
      { id: "a1", text: "No es reutilizable" },
      { id: "a2", text: "Requiere sistemas complejos" },
      { id: "a3", text: "Aumenta demasiado el peso" },
      { id: "a4", text: "No protege bien la tobera" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "rocket-engine-cooling",
    explanation:
      "El recubrimiento ablativo se consume y no puede reutilizarse en misiones múltiples.",
  },
  {
    id: "q9",
    text: "¿En qué consiste el enfriamiento por película?",
    answers: [
      { id: "a1", text: "Extracción de calor mediante conducción interna" },
      {
        id: "a2",
        text: "Inyección de una capa delgada de refrigerante sobre la pared",
      },
      { id: "a3", text: "Uso de espejos de radiación" },
      { id: "a4", text: "Uso de combustible sólido" },
    ],
    correctAnswers: ["a2"],
    multipleCorrect: false,
    category: "rocket-engine-cooling",
    explanation:
      "Se inyecta una fina película de propelente que forma barrera térmica.",
  },
  {
    id: "q10",
    text: "¿Qué motor F‑1 utilizaba enfriamiento por película?",
    answers: [
      { id: "a1", text: "Saturn V primera etapa" },
      { id: "a2", text: "Saturn IB segunda etapa" },
      { id: "a3", text: "Ariane 5 etapa central" },
      { id: "a4", text: "Delta IV Bobtail" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "rocket-engine-cooling",
    explanation:
      "El motor F‑1 de la primera etapa del Saturn V empleaba film cooling.",
  },
  {
    id: "q11",
    text: "¿Cuál es la desventaja principal del enfriamiento por película respecto al regenerativo?",
    answers: [
      { id: "a1", text: "Menor eficiencia térmica" },
      { id: "a2", text: "Requiere materiales caros" },
      { id: "a3", text: "Sólo funciona en vacío" },
      { id: "a4", text: "Consume demasiado combustible" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "rocket-engine-cooling",
    explanation:
      "La film cooling no aprovecha el calor para precalentar el propelente, siendo menos eficiente.",
  },
  {
    id: "q12",
    text: "¿Qué método de enfriamiento pasivo usa la radiación?",
    answers: [
      { id: "a1", text: "Enfriamiento por mezcla rica" },
      { id: "a2", text: "Enfriamiento por radiación" },
      { id: "a3", text: "Enfriamiento regenerativo" },
      { id: "a4", text: "Enfriamiento por película" },
    ],
    correctAnswers: ["a2"],
    multipleCorrect: false,
    category: "rocket-engine-cooling",
    explanation:
      "La radiación disipa calor al espacio sin convección, usando emisores térmicos.",
  },
  {
    id: "q13",
    text: "¿Qué motores usan enfriamiento por radiación según el texto?",
    answers: [
      { id: "a1", text: "AJ10 y Merlin Vacuum" },
      { id: "a2", text: "RS‑25 y Vulcain 2" },
      { id: "a3", text: "F‑1 y J‑2" },
      { id: "a4", text: "TR‑201 y RS‑68A" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "rocket-engine-cooling",
    explanation:
      "Los AJ10 del Apollo y el Merlin Vacuum de Falcon 9 usan radiative cooling.",
  },
  {
    id: "q14",
    text: "¿Por qué el enfriamiento por radiación es eficaz en el vacío?",
    answers: [
      { id: "a1", text: "Porque hay mucha convección" },
      { id: "a2", text: "Porque no hay atmósfera que interfiera" },
      { id: "a3", text: "Porque el material se enfría por contacto" },
      { id: "a4", text: "Porque refleja el calor hacia adentro" },
    ],
    correctAnswers: ["a2"],
    multipleCorrect: false,
    category: "rocket-engine-cooling",
    explanation:
      "En el vacío no hay convección ni conducción, sólo radiación térmica hacia el espacio.",
  },
  {
    id: "q15",
    text: "¿En qué consiste el enfriamiento por relación de mezcla rica?",
    answers: [
      { id: "a1", text: "Aumentar la proporción de comburente" },
      {
        id: "a2",
        text: "Usar mezcla con exceso de combustible para absorber calor",
      },
      { id: "a3", text: "Inyectar película de agua" },
      { id: "a4", text: "Cubrir la tobera con ablativo" },
    ],
    correctAnswers: ["a2"],
    multipleCorrect: false,
    category: "rocket-engine-cooling",
    explanation:
      "La mezcla rica en combustible reduce la temperatura de la llama al absorber calor.",
  },
  {
    id: "q16",
    text: "¿Qué sacrificio implica usar mezcla rica como método de enfriamiento?",
    answers: [
      { id: "a1", text: "Pérdida mínima de rendimiento teórico" },
      { id: "a2", text: "Uso de materiales corroídos" },
      { id: "a3", text: "Requiere ignición adicional" },
      { id: "a4", text: "Impide uso de combustibles criogénicos" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "rocket-engine-cooling",
    explanation:
      "Operar con mezcla rica reduce ligeramente el impulso específico teórico.",
  },
  {
    id: "q17",
    text: "¿Cómo complementa la mezcla rica otros métodos de enfriamiento?",
    answers: [
      { id: "a1", text: "Sustituyendo al regenerativo" },
      {
        id: "a2",
        text: "Protegiendo superficies críticas junto a film o regenerativo",
      },
      { id: "a3", text: "Eliminando la necesidad de radiación" },
      { id: "a4", text: "Reemplazando ablativos" },
    ],
    correctAnswers: ["a2"],
    multipleCorrect: false,
    category: "rocket-engine-cooling",
    explanation:
      "La mezcla rica se usa junto a otros sistemas para reforzar la protección térmica.",
  },
  {
    id: "q18",
    text: "¿Cuál de los siguientes es un ejemplo de método activo de enfriamiento?",
    answers: [
      { id: "a1", text: "Radiación infrarroja" },
      { id: "a2", text: "Enfriamiento regenerativo" },
      { id: "a3", text: "Ablación de material" },
      { id: "a4", text: "Mezcla rica" },
    ],
    correctAnswers: ["a2"],
    multipleCorrect: false,
    category: "rocket-engine-cooling",
    explanation:
      "El regenerativo es activo porque usa circulación de propelente por canales.",
  },
  {
    id: "q19",
    text: "¿Qué método es completamente pasivo?",
    answers: [
      { id: "a1", text: "Dump cooling" },
      { id: "a2", text: "Enfriamiento por radiación" },
      { id: "a3", text: "Regenerativo" },
      { id: "a4", text: "Film cooling" },
    ],
    correctAnswers: ["a2"],
    multipleCorrect: false,
    category: "rocket-engine-cooling",
    explanation:
      "La radiación no requiere circulación ni consumibles, sólo emite calor al espacio.",
  },
  {
    id: "q20",
    text: "¿Cuál es el criterio para elegir radiative cooling en un motor?",
    answers: [
      { id: "a1", text: "Alta carga térmica atmosférica" },
      { id: "a2", text: "Operación en vacío con bajas cargas térmicas" },
      { id: "a3", text: "Misiones de corta duración en atmósfera densa" },
      { id: "a4", text: "Reentrada hipersónica" },
    ],
    correctAnswers: ["a2"],
    multipleCorrect: false,
    category: "rocket-engine-cooling",
    explanation:
      "La radiación es útil en vacío donde las cargas térmicas son moderadas y no hay convección.",
  },
  {
    id: "q21",
    text: "¿Qué método de enfriamiento combina precalentamiento de propelente y protección térmica?",
    answers: [
      { id: "a1", text: "Mezcla rica" },
      { id: "a2", text: "Regenerativo" },
      { id: "a3", text: "Dump cooling" },
      { id: "a4", text: "Ablativo" },
    ],
    correctAnswers: ["a2"],
    multipleCorrect: false,
    category: "rocket-engine-cooling",
    explanation:
      "El regenerativo enfría y precalienta el propelente simultáneamente.",
  },
  {
    id: "q22",
    text: "¿Qué método libera directamente propelente al flujo de escape sin recircularlo?",
    answers: [
      { id: "a1", text: "Enfriamiento regenerativo" },
      { id: "a2", text: "Dump cooling" },
      { id: "a3", text: "Film cooling" },
      { id: "a4", text: "Radiación" },
    ],
    correctAnswers: ["a2"],
    multipleCorrect: false,
    category: "rocket-engine-cooling",
    explanation:
      "El dump cooling expulsa el propelente sin retornarlo a la cámara.",
  },
  {
    id: "q23",
    text: "¿Cuál es un ejemplo de método de enfriamiento usado en misiones desechables de corta duración?",
    answers: [
      { id: "a1", text: "Regenerativo" },
      { id: "a2", text: "Ablación" },
      { id: "a3", text: "Radiación" },
      { id: "a4", text: "Mezcla rica" },
    ],
    correctAnswers: ["a2"],
    multipleCorrect: false,
    category: "rocket-engine-cooling",
    explanation:
      "La ablación es simple y ligera, ideal para etapas desechables de corta duración.",
  },
  {
    id: "q24",
    text: "¿Cuál es el propósito de los canales internos en un motor regenerativo?",
    answers: [
      { id: "a1", text: "Guiar la onda de choque" },
      { id: "a2", text: "Extraer calor de la pared antes de la inyección" },
      { id: "a3", text: "Soportar la estructura en vacío" },
      { id: "a4", text: "Formar película de gas" },
    ],
    correctAnswers: ["a2"],
    multipleCorrect: false,
    category: "rocket-engine-cooling",
    explanation:
      "Los canales rodean la cámara y tobera para enfriar las paredes y precalentar el propelente.",
  },
  {
    id: "q25",
    text: "¿Qué método se utiliza como refuerzo localizado en regiones críticas de la tobera?",
    answers: [
      { id: "a1", text: "Dump cooling" },
      { id: "a2", text: "Film cooling" },
      { id: "a3", text: "Radiación" },
      { id: "a4", text: "Ablación" },
    ],
    correctAnswers: ["a2"],
    multipleCorrect: false,
    category: "rocket-engine-cooling",
    explanation:
      "El film cooling refuerza la protección en zonas sometidas a mayores temperaturas.",
  },
  {
    id: "q26",
    text: "¿Cuál de estos métodos no aporta precalentamiento al propelente?",
    answers: [
      { id: "a1", text: "Regenerativo" },
      { id: "a2", text: "Dump cooling" },
      { id: "a3", text: "Mezcla rica" },
      { id: "a4", text: "Film cooling" },
    ],
    correctAnswers: ["a2"],
    multipleCorrect: false,
    category: "rocket-engine-cooling",
    explanation:
      "El dump cooling descarga sin recircular, no precalienta el propelente.",
  },
  {
    id: "q27",
    text: "¿Qué recubrimiento mejora la emisividad en enfriamiento por radiación?",
    answers: [
      { id: "a1", text: "Cerámico" },
      { id: "a2", text: "Polímero" },
      { id: "a3", text: "Ablativo metálico" },
      { id: "a4", text: "Hidrofóbico" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "rocket-engine-cooling",
    explanation:
      "Los recubrimientos cerámicos de alta emisividad mejoran la disipación por radiación.",
  },
  {
    id: "q28",
    text: "¿Qué componente auxiliar puede usarse para film cooling?",
    answers: [
      { id: "a1", text: "Oxígeno líquido adicional" },
      { id: "a2", text: "Agua desmineralizada" },
      { id: "a3", text: "Propelente o componente auxiliar" },
      { id: "a4", text: "Polvo metálico" },
    ],
    correctAnswers: ["a3"],
    multipleCorrect: false,
    category: "rocket-engine-cooling",
    explanation:
      "Se puede inyectar el mismo propelente o un componente auxiliar como refrigerante.",
  },
  {
    id: "q29",
    text: "¿Qué método reduce la temperatura de llama sin cambiar la geometría del motor?",
    answers: [
      { id: "a1", text: "Mezcla rica" },
      { id: "a2", text: "Ablación" },
      { id: "a3", text: "Radiación" },
      { id: "a4", text: "Dump cooling" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "rocket-engine-cooling",
    explanation:
      "La proporción rica en combustible reduce la temperatura de combustión internamente.",
  },
  {
    id: "q30",
    text: "¿Cuál método es crítico en motores de alto rendimiento y reutilizables?",
    answers: [
      { id: "a1", text: "Regenerativo" },
      { id: "a2", text: "Ablativo" },
      { id: "a3", text: "Radiación" },
      { id: "a4", text: "Film cooling" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "rocket-engine-cooling",
    explanation:
      "El enfriamiento regenerativo es esencial en motores de alta eficiencia y reutilización.",
  },
];
