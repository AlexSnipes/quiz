import { Question } from "@/lib/data";

export const mockWindTunnelsQuestions: Question[] = [
  {
    id: "q1",
    text: "¿Cuáles son algunos de los objetivos del estudio experimental de la aerodinámica?",
    answers: [
      {
        id: "a1",
        text: "Medir las fuerzas ejercidas por el aire sobre cuerpos en movimiento",
      },
      {
        id: "a2",
        text: "Medir las fuerzas ejercidas por el viento sobre cuerpos estáticos",
      },
      {
        id: "a3",
        text: "Ayudar a desarrollar o validar teorías aerodinámicas",
      },
      {
        id: "a4",
        text: "Ayudar a diseñar cuerpos móviles o estáticos para optimizar su eficiencia aerodinámica",
      },
    ],
    correctAnswers: ["a1", "a2", "a3", "a4"],
    multipleCorrect: true,
    category: "wind-tunnels",
    explanation:
      "El documento enumera estos cuatro objetivos como metas principales del estudio experimental de la aerodinámica.",
  },
  {
    id: "q2",
    text: "Para que un modelo en un túnel aerodinámico sea representativo, ¿qué semejanzas deben cumplirse?",
    answers: [
      { id: "a1", text: "Semejanza geométrica" },
      { id: "a2", text: "Semejanza cinemática" },
      { id: "a3", text: "Semejanza dinámica" },
      { id: "a4", text: "Semejanza térmica" },
    ],
    correctAnswers: ["a1", "a2", "a3"],
    multipleCorrect: true,
    category: "wind-tunnels",
    explanation:
      "El modelo debe cumplir la semejanza geométrica, cinemática y dinámica para ser representativo del objeto real.",
  },
  {
    id: "q3",
    text: "¿Qué implica la semejanza geométrica entre un modelo y el objeto real?",
    answers: [
      {
        id: "a1",
        text: "Que todas las dimensiones lineales son proporcionales",
      },
      {
        id: "a2",
        text: "Que los vectores de velocidad son iguales en todos los puntos",
      },
      { id: "a3", text: "Que las fuerzas se distribuyen de manera idéntica" },
      {
        id: "a4",
        text: "Que la densidad del modelo es la misma que la del objeto real",
      },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "wind-tunnels",
    explanation:
      "La semejanza geométrica se cumple cuando todas las dimensiones lineales del modelo son proporcionales a las del objeto real.",
  },
  {
    id: "q4",
    text: "¿Cuál es el criterio de semejanza predominante en los túneles aerodinámicos de baja velocidad?",
    answers: [
      { id: "a1", text: "Igualdad por número de Reynolds" },
      { id: "a2", text: "Igualdad por número de Mach" },
      { id: "a3", text: "Semejanza cinemática" },
      { id: "a4", text: "Semejanza dinámica" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "wind-tunnels",
    explanation:
      "En túneles de baja velocidad se busca la igualdad del número de Reynolds para replicar los efectos de inercia y viscosidad.",
  },
  {
    id: "q5",
    text: "En los túneles aerodinámicos de alta velocidad, ¿cuál es el criterio de semejanza predominante?",
    answers: [
      { id: "a1", text: "Igualdad por número de Mach" },
      { id: "a2", text: "Igualdad por número de Reynolds" },
      { id: "a3", text: "Semejanza geométrica" },
      { id: "a4", text: "Semejanza térmica" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "wind-tunnels",
    explanation:
      "El criterio predominante en túneles de alta velocidad es la igualdad por número de Mach para capturar los efectos de compresibilidad.",
  },
  {
    id: "q6",
    text: "¿Cómo se pueden clasificar los túneles aerodinámicos según el documento?",
    answers: [
      { id: "a1", text: "Por velocidad (baja o alta)" },
      {
        id: "a2",
        text: "Según el fluido (presión atmosférica o densidad variable)",
      },
      { id: "a3", text: "Por tamaño (normal o full size)" },
      { id: "a4", text: "Por finalidad (investigación, diseño, calibración)" },
    ],
    correctAnswers: ["a1", "a2", "a3", "a4"],
    multipleCorrect: true,
    category: "wind-tunnels",
    explanation:
      "Los túneles se pueden clasificar por velocidad, tipo de fluido, tamaño y finalidad, según lo descrito en el documento.",
  },
  {
    id: "q7",
    text: "¿Qué características definen a un túnel aerodinámico tipo Eiffel?",
    answers: [
      { id: "a1", text: "Es un circuito abierto" },
      { id: "a2", text: "Se clasifica en vena abierta o vena cerrada" },
      { id: "a3", text: "Utiliza recirculación interna del fluido" },
      { id: "a4", text: "Solo se usa para ensayos de modelos a escala" },
    ],
    correctAnswers: ["a1", "a2"],
    multipleCorrect: true,
    category: "wind-tunnels",
    explanation:
      "El túnel tipo Eiffel es un circuito abierto y se clasifica en vena abierta o vena cerrada.",
  },
  {
    id: "q8",
    text: "¿Qué componentes integran un túnel aerodinámico tipo Prandtl según el documento?",
    answers: [
      { id: "a1", text: "Cámara de seteo" },
      { id: "a2", text: "Zona de contracción" },
      { id: "a3", text: "Cámara de testeo" },
      { id: "a4", text: "Difusor y drive" },
    ],
    correctAnswers: ["a1", "a2", "a3", "a4"],
    multipleCorrect: true,
    category: "wind-tunnels",
    explanation:
      "El túnel tipo Prandtl incluye cámara de seteo, zona de contracción, cámara de testeo, difusor y drive, y se caracteriza por la recirculación interna del fluido.",
  },
  {
    id: "q9",
    text: "¿Cuál es la función de la zona de acondicionamiento de flujo (setting chamber) en un túnel aerodinámico?",
    answers: [
      {
        id: "a1",
        text: "Preparar el flujo de aire para que tenga las condiciones adecuadas para el ensayo",
      },
      { id: "a2", text: "Aumentar la velocidad del aire" },
      { id: "a3", text: "Medir la presión atmosférica" },
      { id: "a4", text: "Enfriar el aire antes del ensayo" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "wind-tunnels",
    explanation:
      "La zona de acondicionamiento de flujo se utiliza para preparar el aire y asegurar que tenga las condiciones necesarias para un ensayo representativo.",
  },
  {
    id: "q10",
    text: "¿Qué papel desempeñan los motores o fans en los túneles aerodinámicos?",
    answers: [
      { id: "a1", text: "Accionan el flujo de aire dentro del túnel" },
      {
        id: "a2",
        text: "Pueden ser simples o múltiples, dependiendo del diseño del túnel",
      },
      { id: "a3", text: "Se utilizan únicamente en túneles de alta velocidad" },
      { id: "a4", text: "Determinan la recirculación del fluido" },
    ],
    correctAnswers: ["a1", "a2"],
    multipleCorrect: true,
    category: "wind-tunnels",
    explanation:
      "Los motores o fans generan el flujo de aire y pueden variar en cantidad según el diseño del túnel, como se ilustra en ejemplos de túneles de la NASA.",
  },
  {
    id: "q11",
    text: "¿Cuáles son los objetivos principales del estudio experimental de la aerodinámica?",
    answers: [
      {
        id: "a1",
        text: "Medir las fuerzas ejercidas por el aire sobre cuerpos en movimiento",
      },
      {
        id: "a2",
        text: "Medir las fuerzas ejercidas por el viento sobre cuerpos estáticos",
      },
      { id: "a3", text: "Validar teorías aerodinámicas" },
      {
        id: "a4",
        text: "Optimizar el diseño de cuerpos móviles o estáticos",
      },
    ],
    correctAnswers: ["a1", "a2", "a3", "a4"],
    multipleCorrect: true,
    category: "wind-tunnels",
    explanation:
      "El estudio experimental en túneles se utiliza para medir fuerzas, validar teorías y optimizar diseños en diversas aplicaciones.",
  },
  {
    id: "q12",
    text: "¿Qué semejanzas deben cumplirse para que un modelo sea representativo en un túnel aerodinámico?",
    answers: [
      { id: "a1", text: "Semejanza geométrica" },
      { id: "a2", text: "Semejanza cinemática" },
      { id: "a3", text: "Semejanza dinámica" },
      { id: "a4", text: "Semejanza térmica" },
    ],
    correctAnswers: ["a1", "a2", "a3"],
    multipleCorrect: true,
    category: "wind-tunnels",
    explanation:
      "Para que un modelo sea representativo se requiere cumplir la semejanza geométrica, cinemática y dinámica.",
  },
  {
    id: "q13",
    text: "¿Cuál es el criterio de semejanza predominante en los túneles de baja velocidad?",
    answers: [
      { id: "a1", text: "Igualdad del número de Reynolds" },
      { id: "a2", text: "Igualdad del número de Mach" },
      { id: "a3", text: "Semejanza geométrica" },
      { id: "a4", text: "Semejanza cinemática" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "wind-tunnels",
    explanation:
      "En túneles de baja velocidad, se busca que el número de Reynolds sea igual al del vuelo real.",
  },
  {
    id: "q14",
    text: "¿Cuál es el criterio de semejanza predominante en los túneles de alta velocidad?",
    answers: [
      { id: "a1", text: "Igualdad del número de Mach" },
      { id: "a2", text: "Igualdad del número de Reynolds" },
      { id: "a3", text: "Semejanza dinámica" },
      { id: "a4", text: "Semejanza térmica" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "wind-tunnels",
    explanation:
      "En túneles de alta velocidad, el criterio principal es la igualdad del número de Mach para capturar efectos de compresibilidad.",
  },
  {
    id: "q15",
    text: "¿Cómo se pueden clasificar los túneles aerodinámicos según el documento?",
    answers: [
      { id: "a1", text: "Por velocidad (baja o alta)" },
      {
        id: "a2",
        text: "Según el fluido (a presión atmosférica o a densidad variable)",
      },
      { id: "a3", text: "Por tamaño (normal o full size)" },
      {
        id: "a4",
        text: "Por finalidad (ensayos de modelos, investigación, calibración, etc.)",
      },
    ],
    correctAnswers: ["a1", "a2", "a3", "a4"],
    multipleCorrect: true,
    category: "wind-tunnels",
    explanation:
      "El documento clasifica los túneles según varios criterios: velocidad, tipo de fluido, tamaño y finalidad.",
  },
  {
    id: "q16",
    text: "¿Qué diferencia fundamental existe entre los túneles tipo Eiffel y los túneles tipo Prandtl?",
    answers: [
      {
        id: "a1",
        text: "Los túneles Eiffel son de circuito abierto y los Prandtl son de circuito cerrado",
      },
      {
        id: "a2",
        text: "Los túneles Eiffel utilizan recirculación interna y los Prandtl no",
      },
      {
        id: "a3",
        text: "Los túneles Eiffel están diseñados para alta velocidad y los Prandtl para baja velocidad",
      },
      {
        id: "a4",
        text: "Los túneles Eiffel son más costosos de construir que los Prandtl",
      },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "wind-tunnels",
    explanation:
      "La diferencia clave es que los túneles Eiffel son de circuito abierto, mientras que los túneles Prandtl son de circuito cerrado.",
  },
  {
    id: "q17",
    text: "¿Qué dispositivos componen la zona de acondicionamiento (setting chamber) en un túnel aerodinámico?",
    answers: [
      { id: "a1", text: "Paneles de abeja" },
      { id: "a2", text: "Pantalla de turbulencia" },
      { id: "a3", text: "Cono de contracción" },
      { id: "a4", text: "Difusor" },
    ],
    correctAnswers: ["a1", "a2"],
    multipleCorrect: true,
    category: "wind-tunnels",
    explanation:
      "La zona de acondicionamiento se compone de paneles de abeja, que orientan el flujo, y de una pantalla de turbulencia que uniformiza el perfil de velocidad.",
  },
  {
    id: "q18",
    text: "¿Cuál es la función principal del cono de contracción en un túnel aerodinámico?",
    answers: [
      {
        id: "a1",
        text: "Acelerar el flujo de aire hacia la cámara de testeo",
      },
      { id: "a2", text: "Reducir el grosor de la capa límite" },
      {
        id: "a3",
        text: "Evitar la formación de vórtices en la cámara de ensayo",
      },
      { id: "a4", text: "Medir la presión del flujo" },
    ],
    correctAnswers: ["a1", "a2", "a3"],
    multipleCorrect: true,
    category: "wind-tunnels",
    explanation:
      "El cono de contracción acelera el flujo, reduce la capa límite y evita la formación de vórtices, facilitando ensayos precisos en la cámara de testeo.",
  },
  {
    id: "q19",
    text: "¿Qué formas puede tener la cámara de testeo en un túnel aerodinámico?",
    answers: [
      { id: "a1", text: "Rectangular" },
      { id: "a2", text: "Hexagonal" },
      { id: "a3", text: "Circular" },
      { id: "a4", text: "Elíptica" },
    ],
    correctAnswers: ["a1", "a2", "a3", "a4"],
    multipleCorrect: true,
    category: "wind-tunnels",
    explanation:
      "La cámara de testeo puede ser de varias formas, lo que permite adaptar el túnel a diferentes tipos de ensayos.",
  },
  {
    id: "q20",
    text: "¿Cuál es la función del difusor en un túnel aerodinámico?",
    answers: [
      { id: "a1", text: "Disminuir la velocidad del flujo" },
      { id: "a2", text: "Incrementar la presión del flujo" },
      {
        id: "a3",
        text: "Evitar la influencia del fan sobre la zona de testeo",
      },
      { id: "a4", text: "Aumentar la turbulencia en el flujo" },
    ],
    correctAnswers: ["a1", "a2", "a3"],
    multipleCorrect: true,
    category: "wind-tunnels",
    explanation:
      "El difusor reduce la velocidad y aumenta la presión del flujo, además de aislar la zona de testeo de la influencia directa del fan.",
  },
  {
    id: "q21",
    text: "¿Cuáles son algunas ventajas del túnel aerodinámico tipo Eiffel?",
    answers: [
      {
        id: "a1",
        text: "Se puede construir tanto en forma horizontal como vertical",
      },
      {
        id: "a2",
        text: "Permite ensayar motores a combustión eliminando fácilmente el humo",
      },
      {
        id: "a3",
        text: "Control sencillo del flujo y ocupación de poco espacio",
      },
      { id: "a4", text: "Bajo costo de construcción" },
    ],
    correctAnswers: ["a1", "a2", "a3", "a4"],
    multipleCorrect: true,
    category: "wind-tunnels",
    explanation:
      "El túnel Eiffel destaca por su flexibilidad de construcción, facilidad para ensayar motores, control del flujo y bajo costo inicial.",
  },
  {
    id: "q22",
    text: "¿Cuáles son algunas desventajas del túnel aerodinámico tipo Eiffel?",
    answers: [
      {
        id: "a1",
        text: "Baja calidad de flujo en la cámara de prueba comparado con el túnel Prandtl",
      },
      { id: "a2", text: "Alto costo de operación" },
      {
        id: "a3",
        text: "Mayor consumo de energía y posibles requerimientos de enfriamiento",
      },
      { id: "a4", text: "Dificultad para controlar el flujo" },
    ],
    correctAnswers: ["a1", "a2", "a3"],
    multipleCorrect: true,
    category: "wind-tunnels",
    explanation:
      "Entre las desventajas del túnel Eiffel se incluyen la baja calidad de flujo, altos costos operativos y mayor consumo de energía.",
  },
  {
    id: "q23",
    text: "¿Qué características distinguen a los túneles aerodinámicos de tipo Prandtl?",
    answers: [
      {
        id: "a1",
        text: "Circuito cerrado con recirculación interna del fluido",
      },
      {
        id: "a2",
        text: "Reducción en el consumo de energía y operación más silenciosa",
      },
      {
        id: "a3",
        text: "Mayor costo de construcción y requerimiento de mayor espacio",
      },
      { id: "a4", text: "Posible necesidad de enfriamiento del fluido" },
    ],
    correctAnswers: ["a1", "a2", "a3", "a4"],
    multipleCorrect: true,
    category: "wind-tunnels",
    explanation:
      "Los túneles Prandtl se caracterizan por ser de circuito cerrado, consumir menos energía, operar de forma silenciosa, pero a costa de mayores costos y espacio.",
  },
  {
    id: "q24",
    text: "¿Cómo se diferencia un túnel supersónico de uno subsónico en términos de diseño?",
    answers: [
      {
        id: "a1",
        text: "En un túnel supersónico, la garganta tiene un Mach igual a 1",
      },
      {
        id: "a2",
        text: "La cámara de testeo en un túnel supersónico presenta un Mach superior a 1",
      },
      {
        id: "a3",
        text: "La presión en la cámara de testeo es menor en un túnel supersónico",
      },
      {
        id: "a4",
        text: "El diseño y parámetros del flujo son idénticos en ambos casos",
      },
    ],
    correctAnswers: ["a1", "a2", "a3"],
    multipleCorrect: true,
    category: "wind-tunnels",
    explanation:
      "Un túnel supersónico se distingue por tener una garganta donde el Mach es 1, una cámara de testeo con Mach >1 y menor presión, a diferencia del túnel subsónico.",
  },
  {
    id: "q25",
    text: "¿Qué zonas se pueden identificar en el diseño de un túnel supersónico?",
    answers: [
      { id: "a1", text: "Zona de alta presión" },
      { id: "a2", text: "Zona de contracción y garganta" },
      { id: "a3", text: "Cámara de testeo" },
      { id: "a4", text: "Zona de baja presión con bomba de vacío" },
    ],
    correctAnswers: ["a1", "a2", "a3", "a4"],
    multipleCorrect: true,
    category: "wind-tunnels",
    explanation:
      "El diseño de un túnel supersónico incluye zonas de alta presión, una sección de contracción con garganta, una cámara de testeo y una zona de baja presión para evacuar el fluido.",
  },
];
