import { Question } from "@/lib/data";

export const mockPropellers4Questions: Question[] = [
  {
    id: "q52",
    text: "¿Qué permiten hacer las curvas de desempeño de hélice cuando conocemos tres de sus parámetros?",
    answers: [
      { id: "a1", text: "Obtener el cuarto parámetro" },
      { id: "a2", text: "Determinar la potencia del motor sin datos" },
      { id: "a3", text: "Calcular el diámetro óptimo" },
      { id: "a4", text: "Estimar la densidad del aire" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "propellers",
    explanation:
      "Con tres parámetros conocidos en las curvas se puede leer el cuarto directamente.",
  },
  {
    id: "q53",
    text: "¿Cómo se definen las hélices de paso constante durante el vuelo?",
    answers: [
      { id: "a1", text: "No tienen control de paso en vuelo" },
      { id: "a2", text: "Su paso solo se ajusta en tierra" },
      { id: "a3", text: "Mantienen rpm constantes" },
      { id: "a4", text: "Controlan automáticamente la potencia" },
    ],
    correctAnswers: ["a1", "a2"],
    multipleCorrect: true,
    category: "propellers",
    explanation:
      "Estas hélices no varían el paso en vuelo; solo pueden ajustarse en tierra o vienen fijas de fábrica.",
  },
  {
    id: "q54",
    text: "¿En qué tipo de aeronaves se suelen usar hélices de paso fijo con ajuste en tierra?",
    answers: [
      { id: "a1", text: "Aviones de entrenamiento" },
      { id: "a2", text: "Jets comerciales" },
      { id: "a3", text: "Helicópteros" },
      { id: "a4", text: "Aviones de carga pesada" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "propellers",
    explanation:
      "En entrenamiento se buscan buenas prestaciones en despegue/aterrizaje y luego ajuste en tierra para crucero.",
  },
  {
    id: "q55",
    text: "¿Qué formas de hélice de paso variable durante el vuelo menciona el texto?",
    answers: [
      {
        id: "a1",
        text: "Posiciones fijas preestablecidas (despegue, crucero, aterrizaje)",
      },
      { id: "a2", text: "Control continuo en función del tipo de vuelo" },
      { id: "a3", text: "Ajuste solo en tierra" },
      { id: "a4", text: "Paso fijo por constructor" },
    ],
    correctAnswers: ["a1", "a2"],
    multipleCorrect: true,
    category: "propellers",
    explanation:
      "Se puede tener paso variable con posiciones fijas o controlable según condiciones de vuelo.",
  },
  {
    id: "q56",
    text: "¿Cómo funcionan las hélices de velocidad constante con control de potencia?",
    answers: [
      {
        id: "a1",
        text: "Mantienen rpm constantes variando el paso automáticamente",
      },
      { id: "a2", text: "El piloto ajusta el paso manualmente" },
      { id: "a3", text: "Varían rpm manteniendo paso fijo" },
      { id: "a4", text: "Controlan la densidad del aire" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "propellers",
    explanation:
      "Estas hélices ajustan el paso para equilibrar la potencia entregada y absorbida, manteniendo rpm constantes.",
  },
  {
    id: "q57",
    text: "¿En qué se basa el funcionamiento de las hélices de velocidad constante con control de paso (beta control)?",
    answers: [
      {
        id: "a1",
        text: "El piloto regula el paso y un sistema de combustible mantiene rpm",
      },
      {
        id: "a2",
        text: "Automáticamente cambia potencia para constancia de paso",
      },
      { id: "a3", text: "El paso se ajusta solo en tierra" },
      { id: "a4", text: "Varía diámetro según altitud" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "propellers",
    explanation:
      "En beta control el piloto fija el paso y un regulador de combustible ajusta potencia para conservar rpm.",
  },
  {
    id: "q58",
    text: "¿Cuáles son las ventajas de las hélices de paso fijo?",
    answers: [
      { id: "a1", text: "Facilidad de construcción" },
      { id: "a2", text: "Menor costo" },
      { id: "a3", text: "Mayor eficiencia en todas las fases" },
      { id: "a4", text: "Menor mantenimiento" },
    ],
    correctAnswers: ["a1", "a2", "a4"],
    multipleCorrect: true,
    category: "propellers",
    explanation: "Son sencillas, económicas y ligeras, con poco mantenimiento.",
  },
  {
    id: "q59",
    text: "¿Cuál es la principal desventaja de las hélices de paso fijo?",
    answers: [
      { id: "a1", text: "Rendimiento limitado en despegue y trepada" },
      { id: "a2", text: "Requieren mucho mantenimiento" },
      { id: "a3", text: "Peso excesivo" },
      { id: "a4", text: "Incompatibilidad con motores turbofan" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "propellers",
    explanation:
      "Su eficiencia óptima solo se da en crucero, no absorben toda la potencia en despegue/trepada.",
  },
  {
    id: "q60",
    text: "¿Qué es el sistema de bandera (feathering) en hélices de control de potencia?",
    answers: [
      {
        id: "a1",
        text: "Posición de paso nulo para reducir resistencia en caso de fallo",
      },
      { id: "a2", text: "Modo de reversa para frenado" },
      { id: "a3", text: "Ajuste automático de rpm" },
      { id: "a4", text: "Control de densidad de aceite" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "propellers",
    explanation:
      "En feathering la pala se alinea con el flujo para minimizar resistencia y evitar daño al motor.",
  },
  {
    id: "q61",
    text: "¿Para qué sirve el paso negativo en hélices de velocidad constante con control de potencia?",
    answers: [
      {
        id: "a1",
        text: "Invertir la tracción y actuar como freno en aterrizaje",
      },
      { id: "a2", text: "Incrementar la potencia en ascenso" },
      { id: "a3", text: "Reducir la densidad del aire" },
      { id: "a4", text: "Ajustar la rpm a bajas velocidades" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "propellers",
    explanation:
      "Un paso negativo genera tracción opuesta para acortar carrera de aterrizaje.",
  },
  {
    id: "q62",
    text: "¿Qué hace la restricción automática de paso en caso de caída de presión de aceite?",
    answers: [
      { id: "a1", text: "Bloquea el paso para evitar que la hélice embale" },
      { id: "a2", text: "Permite paso libre para autogiro" },
      { id: "a3", text: "Incrementa automáticamente rpm" },
      { id: "a4", text: "Activa el sistema de reversa" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "propellers",
    explanation:
      "Al perder aceite, un pistón fija el paso para impedir ángulos de ataque inferiores que causen embalo.",
  },
  {
    id: "q63",
    text: "¿Cuál es la función del governor en el control de hélice?",
    answers: [
      {
        id: "a1",
        text: "Regular automáticamente el ángulo de paso para mantener rpm constantes",
      },
      { id: "a2", text: "Controlar la densidad del aire" },
      { id: "a3", text: "Medir la temperatura del motor" },
      { id: "a4", text: "Ajustar el diámetro de la hélice" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "propellers",
    explanation:
      "El governor varía el paso según sea necesario para conservar las rpm establecidas.",
  },
  {
    id: "q64",
    text: "¿Qué factores pueden variar las rpm del motor durante el vuelo?",
    answers: [
      { id: "a1", text: "Potencia del motor" },
      { id: "a2", text: "Velocidad del aire" },
      { id: "a3", text: "Densidad del aire" },
      { id: "a4", text: "Diámetro de la hélice" },
    ],
    correctAnswers: ["a1", "a2", "a3"],
    multipleCorrect: true,
    category: "propellers",
    explanation:
      "La potencia, el flujo de aire y la densidad afectan directamente la tendencia de las rpm.",
  },
  {
    id: "q65",
    text: "Si las rpm se mantienen constantes y aumenta la potencia del motor, ¿cómo debe variar el paso de la hélice?",
    answers: [
      {
        id: "a1",
        text: "Incrementarse para generar mayor torque y reducir rpm al equilibrio",
      },
      { id: "a2", text: "Disminuirse para aumentar rpm" },
      { id: "a3", text: "Mantenerse fijo" },
      { id: "a4", text: "Invertirse para frenar" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "propellers",
    explanation:
      "Al subir potencia, el paso sube para ofrecer más resistencia y devolver rpm a la condición establecida.",
  },
  {
    id: "q66",
    text: "Si las rpm se mantienen constantes y la velocidad del aire aumenta, ¿qué ocurre con el paso?",
    answers: [
      {
        id: "a1",
        text: "Incrementa para contrarrestar el efecto de molino y bajar rpm",
      },
      { id: "a2", text: "Disminuye para dejar que rpm suban" },
      { id: "a3", text: "Se bloquea en paso fijo" },
      { id: "a4", text: "Cambia el diámetro" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "propellers",
    explanation:
      "Con más viento relativo el paso sube y así se modera la aceleración de la hélice.",
  },
  {
    id: "q67",
    text: "Si las rpm se mantienen constantes y disminuye la densidad del aire, ¿cómo debe variar el paso?",
    answers: [
      {
        id: "a1",
        text: "Incrementarse (inversamente a la densidad) para aumentar resistencia",
      },
      { id: "a2", text: "Disminuirse para aprovechar rpm libres" },
      { id: "a3", text: "Mantenerse fijo" },
      { id: "a4", text: "Invertirse automáticamente" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "propellers",
    explanation:
      "Al bajar densidad la hélice gira más libre, por lo que el paso sube para generar la resistencia necesaria.",
  },
];
