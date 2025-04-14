import { Question } from "@/lib/data";

export const mockTurbinesQuestions: Question[] = [
  {
    id: "q1",
    text: "¿Cuáles son los dos tipos de diseño de turbinas mencionados en el texto?",
    answers: [
      { id: "a1", text: "Turbina de reacción" },
      { id: "a2", text: "Turbina de impulso" },
      { id: "a3", text: "Turbina axial" },
      { id: "a4", text: "Turbina centrífuga" },
    ],
    correctAnswers: ["a1", "a2"],
    multipleCorrect: true,
    category: "turbines",
    explanation:
      "El texto menciona dos diseños principales: la turbina de reacción y la turbina de impulso.",
  },
  {
    id: "q2",
    text: "¿Qué forma tienen los álabes fijos (estatores) en ambas turbinas y cuál es su función?",
    answers: [
      {
        id: "a1",
        text: "Tienen una forma convergente que acelera el flujo de aire",
      },
      {
        id: "a2",
        text: "Tienen una forma divergente que desacelera el flujo de aire",
      },
      { id: "a3", text: "Son rectos, sin influir en la velocidad del flujo" },
      {
        id: "a4",
        text: "Tienen forma de ala invertida para generar sustentación",
      },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "turbines",
    explanation:
      "Los álabes fijos tienen forma convergente para acelerar el flujo de aire y facilitar su entrada en la etapa rotora.",
  },
  {
    id: "q3",
    text: "¿Cuál es la principal diferencia de diseño entre los álabes móviles de una turbina de impulso y una de reacción?",
    answers: [
      {
        id: "a1",
        text: "Los álabes de impulso tienen mayor espesor y un perfil simétrico, mientras que los de reacción tienen menor espesor y un perfil que se estrecha desde el borde de ataque al de fuga",
      },
      {
        id: "a2",
        text: "Ambos tipos de álabes tienen el mismo espesor, pero difieren en el material",
      },
      {
        id: "a3",
        text: "Los álabes de impulso están curvados y los de reacción son rectos",
      },
      {
        id: "a4",
        text: "Los álabes de reacción son más gruesos en la puntera que en la raíz",
      },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "turbines",
    explanation:
      "La diferencia clave es que los álabes de impulso presentan un mayor espesor y perfil simétrico, mientras que los de reacción son más delgados y su perfil se estrecha, optimizando el rendimiento aerodinámico.",
  },
  {
    id: "q4",
    text: "¿Cómo varía el perfil de un mismo álabe en la turbina desde la raíz hasta la puntera?",
    answers: [
      {
        id: "a1",
        text: "La raíz se diseña con un perfil de impulso (más grueso) y la puntera se adapta a un perfil de reacción (más delgado)",
      },
      {
        id: "a2",
        text: "La raíz tiene un perfil de reacción y la puntera un perfil de impulso",
      },
      {
        id: "a3",
        text: "El perfil se mantiene uniforme a lo largo de toda la longitud del álabe",
      },
      {
        id: "a4",
        text: "El álabe presenta un perfil variable sin un patrón definido",
      },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "turbines",
    explanation:
      "El mismo álabe muestra un doble formato: un perfil de impulso en la raíz para resistir altos esfuerzos y un perfil de reacción en la puntera para mejorar la eficiencia.",
  },
  {
    id: "q5",
    text: "¿Qué efecto tiene la aceleración del fluido dentro de la turbina?",
    answers: [
      {
        id: "a1",
        text: "Genera una mayor velocidad de salida del fluido, produciendo una mayor reacción en los álabes rotatorios",
      },
      { id: "a2", text: "Reduce la presión interna de la turbina" },
      { id: "a3", text: "Disminuye la velocidad del compresor" },
      { id: "a4", text: "Enfría el flujo de aire en la cámara de combustión" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "turbines",
    explanation:
      "La aceleración del fluido aumenta su velocidad de salida, lo que se traduce en una mayor fuerza de reacción en los álabes rotatorios.",
  },
  {
    id: "q6",
    text: "¿Cómo contribuye la forma convergente de los álabes fijos al funcionamiento de la turbina?",
    answers: [
      {
        id: "a1",
        text: "Acelera el flujo de aire incrementando su velocidad al ingresar a la etapa rotora",
      },
      {
        id: "a2",
        text: "Disminuye la velocidad del aire antes de entrar a la cámara de combustión",
      },
      { id: "a3", text: "Modera la turbulencia en la salida del motor" },
      {
        id: "a4",
        text: "Aumenta la presión en la cámara de combustión sin afectar la velocidad",
      },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "turbines",
    explanation:
      "Los álabes fijos de forma convergente aceleran el flujo de aire, preparándolo para la acción en la etapa del rotor.",
  },
  {
    id: "q7",
    text: "¿Qué mecanismo se utiliza para refrigerar los álabes en las turbinas?",
    answers: [
      {
        id: "a1",
        text: "Se utiliza refrigeración por aire en los álabes tanto de rotor como de estatores",
      },
      { id: "a2", text: "Se emplea refrigeración por agua en los álabes" },
      {
        id: "a3",
        text: "La refrigeración se logra mediante intercambiadores de calor internos",
      },
      {
        id: "a4",
        text: "No se implementa un sistema de refrigeración en las turbinas",
      },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "turbines",
    explanation:
      "El sistema de refrigeración por aire se aplica en los álabes para mantener la temperatura y evitar fatiga térmica.",
  },
  {
    id: "q8",
    text: "¿Por qué se combinan perfiles de impulso y de reacción en un mismo álabe?",
    answers: [
      {
        id: "a1",
        text: "Para que la raíz resista altos esfuerzos mecánicos y la puntera optimice la eficiencia aerodinámica",
      },
      { id: "a2", text: "Para reducir el costo de fabricación de los álabes" },
      { id: "a3", text: "Para aumentar la turbulencia en el flujo de aire" },
      { id: "a4", text: "Para simplificar el mantenimiento del motor" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "turbines",
    explanation:
      "La combinación de perfiles permite que la raíz, más gruesa, soporte los esfuerzos mecánicos, mientras que la puntera, más delgada, mejora la eficiencia aerodinámica.",
  },
  {
    id: "q9",
    text: "¿Qué función desempeña el encastre de los álabes en el eje de la turbina?",
    answers: [
      {
        id: "a1",
        text: "Asegura la fijación de los álabes y la transmisión del movimiento rotatorio",
      },
      { id: "a2", text: "Disminuye la fricción entre los álabes" },
      { id: "a3", text: "Reduce la velocidad de rotación del eje" },
      { id: "a4", text: "Aumenta la eficiencia de la refrigeración" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "turbines",
    explanation:
      "El encastre es crucial para fijar los álabes de forma segura en el eje y garantizar una correcta transmisión del movimiento rotatorio.",
  },
  {
    id: "q10",
    text: "¿Por qué es importante que el flujo de aire salga con mayor velocidad al final del proceso en la turbina?",
    answers: [
      {
        id: "a1",
        text: "Porque genera una mayor fuerza de reacción en los álabes, lo que impulsa el motor",
      },
      {
        id: "a2",
        text: "Para reducir la temperatura del aire en la cámara de combustión",
      },
      {
        id: "a3",
        text: "Para disminuir la presión del aire antes de la salida",
      },
      { id: "a4", text: "Para facilitar el mantenimiento del sistema" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "turbines",
    explanation:
      "Una mayor velocidad de salida del flujo de aire aumenta la fuerza de reacción sobre los álabes, lo que es esencial para generar el empuje deseado.",
  },
  {
    id: "q11",
    text: "¿Cómo influye el espesor de los álabes en el rendimiento y la resistencia de una turbina?",
    answers: [
      {
        id: "a1",
        text: "Un mayor espesor en la raíz permite resistir momentos flectores y esfuerzos centrífugos, mientras que en la puntera se opta por menor espesor para mejorar la eficiencia aerodinámica",
      },
      {
        id: "a2",
        text: "Un menor espesor en toda la longitud del álabe es ideal para reducir el peso",
      },
      {
        id: "a3",
        text: "El espesor no afecta significativamente el rendimiento",
      },
      {
        id: "a4",
        text: "Un mayor espesor en la puntera aumenta la velocidad del flujo",
      },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "turbines",
    explanation:
      "El diseño de los álabes varía: la raíz debe ser gruesa para resistir esfuerzos, y la puntera, más delgada, favorece la eficiencia aerodinámica.",
  },
  {
    id: "q12",
    text: "¿Qué significa que los álabes móviles de reacción tengan una forma que genere un conducto convergente?",
    answers: [
      {
        id: "a1",
        text: "Que su geometría reduce la sección de paso y acelera el flujo, aumentando la velocidad de salida",
      },
      { id: "a2", text: "Que el flujo se desacelera y la presión disminuye" },
      { id: "a3", text: "Que el fluido es recalentado antes de salir" },
      {
        id: "a4",
        text: "Que el flujo se distribuye de manera uniforme sin aceleración",
      },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "turbines",
    explanation:
      "El diseño de los álabes de reacción induce un conducto convergente que reduce la sección, acelerando el flujo y aumentando la velocidad de salida.",
  },
  {
    id: "q13",
    text: "¿Qué ocurre cuando el flujo de aire se acelera dentro de la turbina?",
    answers: [
      {
        id: "a1",
        text: "Se incrementa la velocidad del fluido, lo que produce una mayor acción sobre los álabes rotatorios",
      },
      { id: "a2", text: "La presión del aire aumenta drásticamente" },
      { id: "a3", text: "Se reduce la turbulencia en el flujo" },
      { id: "a4", text: "El flujo se invierte en dirección" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "turbines",
    explanation:
      "Al acelerar el flujo de aire, la mayor velocidad del fluido genera una fuerte reacción en los álabes rotatorios.",
  },
  {
    id: "q14",
    text: "¿Cuál es la importancia de la refrigeración por aire en las turbinas?",
    answers: [
      {
        id: "a1",
        text: "Previene el sobrecalentamiento y la fatiga térmica de los álabes",
      },
      { id: "a2", text: "Aumenta la velocidad del flujo de aire" },
      { id: "a3", text: "Reduce la presión en la cámara de combustión" },
      { id: "a4", text: "Mejora la combustión del combustible" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "turbines",
    explanation:
      "La refrigeración por aire es crucial para evitar que los álabes se sobrecalienten y sufran fatiga térmica, prolongando su vida útil.",
  },
  {
    id: "q15",
    text: "¿Qué diferencias estructurales se deben considerar en el diseño de una turbina para resistir esfuerzos mecánicos?",
    answers: [
      {
        id: "a1",
        text: "La raíz de los álabes debe ser más gruesa para soportar momentos flectores y esfuerzos centrífugos",
      },
      {
        id: "a2",
        text: "La puntera puede ser diseñada con menor espesor, ya que los esfuerzos son menores",
      },
      { id: "a3", text: "Ambas respuestas son correctas" },
      {
        id: "a4",
        text: "No es necesario variar el espesor a lo largo del álabe",
      },
    ],
    correctAnswers: ["a3"],
    multipleCorrect: true,
    category: "turbines",
    explanation:
      "El diseño adecuado implica una raíz gruesa que resista los altos esfuerzos y una puntera más delgada, por lo que ambas consideraciones son necesarias.",
  },
  {
    id: "q16",
    text: "¿Cómo se integran los álabes fijos y móviles en una turbina para lograr un rendimiento óptimo?",
    answers: [
      {
        id: "a1",
        text: "Los álabes fijos tienen una forma convergente que acelera el flujo, mientras que los móviles varían su perfil (impulso en la raíz y reacción en la puntera) para generar la aceleración necesaria.",
      },
      {
        id: "a2",
        text: "Todos los álabes tienen el mismo diseño para mantener uniformidad en el flujo",
      },
      {
        id: "a3",
        text: "Solo los álabes móviles determinan el rendimiento, sin influencia de los fijos",
      },
      {
        id: "a4",
        text: "La integración depende únicamente de la refrigeración de los álabes",
      },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "turbines",
    explanation:
      "La combinación de álabes fijos convergentes y móviles de doble perfil permite acelerar el flujo y generar una reacción eficaz, optimizando el rendimiento global de la turbina.",
  },
  {
    id: "q17",
    text: "¿Qué papel desempeña la curvatura y forma de los álabes en la eficiencia de la turbina?",
    answers: [
      {
        id: "a1",
        text: "Afecta la combinación de las componentes radial y tangencial del flujo, determinando la velocidad resultante y la eficiencia del impulso",
      },
      { id: "a2", text: "Solo influye en la estética del motor" },
      {
        id: "a3",
        text: "No tiene impacto en la eficiencia si se mantiene un ángulo de 90° siempre",
      },
      { id: "a4", text: "Aumenta el consumo de combustible" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "turbines",
    explanation:
      "La curvatura de los álabes es clave para combinar correctamente las componentes radial y tangencial, lo que impacta directamente en la velocidad del fluido y la eficiencia de la turbina.",
  },
];
