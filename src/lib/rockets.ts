import { Question } from "@/lib/data";

export const mockRocketsQuestions: Question[] = [
  {
    id: "q1",
    text: "¿Qué es un lanzador o vehículo de lanzamiento espacial?",
    answers: [
      {
        id: "a1",
        text: "Un artefacto para transporte de carga útil al espacio",
      },
      { id: "a2", text: "Un satélite de comunicación" },
      { id: "a3", text: "Una estación espacial" },
      { id: "a4", text: "Un cohete suborbital" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "rockets",
    explanation:
      "El lanzador es el artefacto diseñado para llevar carga útil desde la superficie terrestre al espacio.",
  },
  {
    id: "q2",
    text: "¿Cuál es el objetivo principal de un lanzador?",
    answers: [
      { id: "a1", text: "Transportar astronautas a la Luna" },
      { id: "a2", text: "Situar una carga útil en una órbita específica" },
      { id: "a3", text: "Realizar vuelos turísticos suborbitales" },
      { id: "a4", text: "Probar combustibles hipergólicos" },
    ],
    correctAnswers: ["a2"],
    multipleCorrect: false,
    category: "rockets",
    explanation:
      "El texto indica que el objetivo es situar una carga útil en una cierta órbita.",
  },
  {
    id: "q3",
    text: "¿Cómo se llama la configuración que consta de una única estructura que integra todos los componentes?",
    answers: [
      { id: "a1", text: "Configuración monolítica" },
      { id: "a2", text: "Configuración desechable" },
      { id: "a3", text: "Configuración de etapas múltiples" },
      { id: "a4", text: "Configuración híbrida" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "rockets",
    explanation:
      "La configuración monolítica consta de una única estructura o bloque con todos los componentes.",
  },
  {
    id: "q4",
    text: "¿Qué caracteriza a la configuración de etapas múltiples?",
    answers: [
      { id: "a1", text: "Una sola etapa con combustible sólido" },
      { id: "a2", text: "Dos o más etapas apiladas verticalmente" },
      { id: "a3", text: "Uso exclusivo de pistones hidráulicos" },
      { id: "a4", text: "Carcasa única monolítica" },
    ],
    correctAnswers: ["a2"],
    multipleCorrect: false,
    category: "rockets",
    explanation:
      "La configuración de etapas múltiples tiene dos o más etapas que se encienden y descartan sucesivamente.",
  },
  {
    id: "q5",
    text: "¿Cuál es la función del sistema de separación de etapas?",
    answers: [
      { id: "a1", text: "Conectar cargas útiles a la etapa superior" },
      { id: "a2", text: "Liberar de manera segura una etapa agotada" },
      { id: "a3", text: "Proveer combustible a la segunda etapa" },
      { id: "a4", text: "Controlar la presión aerodinámica máxima" },
    ],
    correctAnswers: ["a2"],
    multipleCorrect: false,
    category: "rockets",
    explanation:
      "El sistema de separación libera una etapa para que la siguiente continúe la misión.",
  },
  {
    id: "q6",
    text: "¿Qué métodos se utilizan para activar la separación de etapas?",
    answers: [
      { id: "a1", text: "Pistones hidráulicos y cilindros neumáticos" },
      { id: "a2", text: "Tornillos pirotécnicos" },
      { id: "a3", text: "Motores de reacción secundarios" },
      { id: "a4", text: "Aletas de control aerodinámico" },
    ],
    correctAnswers: ["a1", "a2"],
    multipleCorrect: true,
    category: "rockets",
    explanation:
      "Se usan pistones hidráulicos o cilindros neumáticos y a veces tornillos pirotécnicos para liberar etapas.",
  },
  {
    id: "q7",
    text: "¿Qué se debe desconectar entre etapas para evitar problemas durante la separación?",
    answers: [
      { id: "a1", text: "Tuberías de combustible" },
      { id: "a2", text: "Cables y conectores eléctricos" },
      { id: "a3", text: "Sensores de presión" },
      { id: "a4", text: "Paracaídas de recuperación" },
    ],
    correctAnswers: ["a2"],
    multipleCorrect: false,
    category: "rockets",
    explanation:
      "Es necesario desconectar cables y conectores eléctricos para una separación limpia.",
  },
  {
    id: "q8",
    text: "¿Cómo se denomina la configuración de lanzador de un solo uso?",
    answers: [
      { id: "a1", text: "Configuración reutilizable (RLV)" },
      { id: "a2", text: "Configuración desechable (ELV)" },
      { id: "a3", text: "Configuración híbrida" },
      { id: "a4", text: "Configuración monolítica" },
    ],
    correctAnswers: ["a2"],
    multipleCorrect: false,
    category: "rockets",
    explanation:
      "La ELV es de un solo uso y sus etapas se desechan tras la misión.",
  },
  {
    id: "q9",
    text: "¿Qué característica define a la configuración reutilizable (RLV)?",
    answers: [
      { id: "a1", text: "La primera etapa se desecha en el océano" },
      { id: "a2", text: "La primera etapa regresa para ser reacondicionada" },
      { id: "a3", text: "Uso exclusivo de combustibles sólidos" },
      { id: "a4", text: "No necesita separación de etapas" },
    ],
    correctAnswers: ["a2"],
    multipleCorrect: false,
    category: "rockets",
    explanation:
      "En los RLV la primera etapa aterriza y es recuperada para futuros vuelos.",
  },
  {
    id: "q10",
    text: "¿Para qué se adaptan las configuraciones de carga útil?",
    answers: [
      { id: "a1", text: "Para diferentes tipos de combustible" },
      {
        id: "a2",
        text: "Para distintos tipos de carga útil como satélites o sondas",
      },
      { id: "a3", text: "Para variar la presión aerodinámica" },
      { id: "a4", text: "Para ajuste de Isp durante vuelo" },
    ],
    correctAnswers: ["a2"],
    multipleCorrect: false,
    category: "rockets",
    explanation:
      "La configuración de carga útil se adapta según el tipo de misión y carga.",
  },
  {
    id: "q11",
    text: "¿Qué permite la configuración de inserción en órbita?",
    answers: [
      {
        id: "a1",
        text: "Encender múltiples veces etapas superiores para precisión orbital",
      },
      { id: "a2", text: "Recuperar todas las etapas" },
      { id: "a3", text: "Eliminar la necesidad de protección térmica" },
      { id: "a4", text: "Aumentar el Isp más allá de valores criogénicos" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "rockets",
    explanation:
      "Esta configuración usa etapas superiores que se encienden y apagan varias veces para colocar la carga en órbita exacta.",
  },
  {
    id: "q12",
    text: "¿Qué ejemplos de combustibles líquidos menciona el texto?",
    answers: [
      { id: "a1", text: "Queroseno y oxígeno líquido" },
      { id: "a2", text: "Hidrógeno y oxígeno líquidos" },
      { id: "a3", text: "Combustible sólido y nitrato de amonio" },
      { id: "a4", text: "Metano y oxígeno gaseoso" },
    ],
    correctAnswers: ["a2"],
    multipleCorrect: false,
    category: "rockets",
    explanation:
      "Se mencionan hidrógeno y oxígeno líquidos por su alta eficiencia.",
  },
  {
    id: "q13",
    text: "¿Cuál es la ventaja principal de los combustibles sólidos?",
    answers: [
      { id: "a1", text: "Mayor Isp que los líquidos" },
      { id: "a2", text: "Fácil manejo y almacenamiento" },
      { id: "a3", text: "Menor costo de motores" },
      { id: "a4", text: "Requieren sistemas criogénicos complejos" },
    ],
    correctAnswers: ["a2"],
    multipleCorrect: false,
    category: "rockets",
    explanation:
      "Los sólidos son menos eficientes pero más fáciles de manejar y almacenar.",
  },
  {
    id: "q14",
    text: "¿Qué tipo de combustibles se encienden espontáneamente al contacto?",
    answers: [
      { id: "a1", text: "Combustibles sólidos" },
      { id: "a2", text: "Combustibles hipergólicos" },
      { id: "a3", text: "Combustibles híbridos" },
      { id: "a4", text: "Combustibles criogénicos" },
    ],
    correctAnswers: ["a2"],
    multipleCorrect: false,
    category: "rockets",
    explanation:
      "Los hipergólicos se encienden sin sistema de ignición al contacto de propelentes.",
  },
  {
    id: "q15",
    text: "¿Qué ofrecen los combustibles híbridos?",
    answers: [
      { id: "a1", text: "La mayor eficiencia Isp posible" },
      { id: "a2", text: "Eficiencia intermedia entre sólidos y líquidos" },
      { id: "a3", text: "Manejo tan sencillo como los líquidos" },
      { id: "a4", text: "Autoinflamación sin ignición" },
    ],
    correctAnswers: ["a2"],
    multipleCorrect: false,
    category: "rockets",
    explanation:
      "Los híbridos combinan características de sólidos y líquidos para eficiencia intermedia.",
  },
  {
    id: "q16",
    text: "¿Cómo se define el impulso específico (Isp)?",
    answers: [
      { id: "a1", text: "La presión aerodinámica máxima" },
      {
        id: "a2",
        text: "La eficiencia con la que el propulsante se convierte en empuje",
      },
      { id: "a3", text: "La temperatura de combustión" },
      { id: "a4", text: "La masa total del cohete" },
    ],
    correctAnswers: ["a2"],
    multipleCorrect: false,
    category: "rockets",
    explanation:
      "El Isp mide cuánto tiempo produce empuje una libra de propelente.",
  },
  {
    id: "q17",
    text: "¿Qué protege al lanzador de las altas temperaturas durante el ascenso atmosférico?",
    answers: [
      { id: "a1", text: "Motor principal" },
      { id: "a2", text: "Sistema de protección térmica" },
      { id: "a3", text: "Etapa superior" },
      { id: "a4", text: "Paracaídas de emergencia" },
    ],
    correctAnswers: ["a2"],
    multipleCorrect: false,
    category: "rockets",
    explanation:
      "Los escudos o aislamientos forman el sistema de protección térmica.",
  },
  {
    id: "q18",
    text: "¿Cómo se llama el momento de máxima presión aerodinámica en el vuelo?",
    answers: [
      { id: "a1", text: "Max thrust" },
      { id: "a2", text: "Max q" },
      { id: "a3", text: "Punto crítico" },
      { id: "a4", text: "Reentrada" },
    ],
    correctAnswers: ["a2"],
    multipleCorrect: false,
    category: "rockets",
    explanation:
      "“Max q” es la máxima fuerza combinada de velocidad y densidad del aire.",
  },
  {
    id: "q19",
    text: "¿Qué ocurre tras superar el Max q?",
    answers: [
      { id: "a1", text: "Aumenta la densidad del aire" },
      { id: "a2", text: "Disminuye la densidad del aire conforme sube" },
      { id: "a3", text: "Se enciende la etapa superior automáticamente" },
      { id: "a4", text: "Se libera el sistema de autodestrucción" },
    ],
    correctAnswers: ["a2"],
    multipleCorrect: false,
    category: "rockets",
    explanation:
      "Al ascender más allá de las capas densas, la densidad del aire baja.",
  },
  {
    id: "q20",
    text: "¿Qué sistemas incluyen los lanzadores reutilizables para el retorno de la etapa principal?",
    answers: [
      { id: "a1", text: "Paracaídas y aletas" },
      { id: "a2", text: "Motores adicionales únicamente" },
      { id: "a3", text: "Sistemas de autodestrucción" },
      { id: "a4", text: "Conectores pirotécnicos" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "rockets",
    explanation:
      "Se usan paracaídas, aletas y motores de reentrada controlada.",
  },
  {
    id: "q21",
    text: "¿Qué cohete parcialmente reutilizable menciona el texto?",
    answers: [
      { id: "a1", text: "Saturno V" },
      { id: "a2", text: "Falcon 9" },
      { id: "a3", text: "Soyuz" },
      { id: "a4", text: "Ariane 5" },
    ],
    correctAnswers: ["a2"],
    multipleCorrect: false,
    category: "rockets",
    explanation: "El Falcon 9 recupera y reutiliza su primera etapa.",
  },
  {
    id: "q22",
    text: "¿Qué maniobra realiza la primera etapa durante el regreso a la Tierra?",
    answers: [
      { id: "a1", text: "Reentrada descontrolada" },
      { id: "a2", text: "Maniobra de reentrada controlada" },
      { id: "a3", text: "Separación pirotécnica" },
      { id: "a4", text: "Apagado de motores definitivo" },
    ],
    correctAnswers: ["a2"],
    multipleCorrect: false,
    category: "rockets",
    explanation:
      "La etapa realiza una reentrada controlada con motores y aletas.",
  },
  {
    id: "q23",
    text: "¿Cómo aterriza la primera etapa recuperable?",
    answers: [
      { id: "a1", text: "Aterrizaje vertical en plataforma" },
      { id: "a2", text: "Amartizaje en océano" },
      { id: "a3", text: "Parashock en tierra" },
      { id: "a4", text: "Desintegración controlada" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "rockets",
    explanation:
      "Se encienden motores para un aterrizaje vertical sobre plataforma designada.",
  },
  {
    id: "q24",
    text: "¿Qué proceso se sigue tras recuperar una etapa reutilizable?",
    answers: [
      { id: "a1", text: "Se desecha como basura espacial" },
      { id: "a2", text: "Inspección y reacondicionamiento" },
      { id: "a3", text: "Se convierte en etapa desechable" },
      { id: "a4", text: "Se fusila químicamente" },
    ],
    correctAnswers: ["a2"],
    multipleCorrect: false,
    category: "rockets",
    explanation:
      "La etapa pasa por inspección y se repara o reemplaza lo necesario.",
  },
  {
    id: "q25",
    text: "¿Cuál es la función del sistema de autodestrucción?",
    answers: [
      { id: "a1", text: "Aumentar el empuje en caso de falla" },
      { id: "a2", text: "Destruir el lanzador si se desvía de trayectoria" },
      { id: "a3", text: "Recargar combustible de emergencia" },
      { id: "a4", text: "Monitorizar la presión aerodinámica" },
    ],
    correctAnswers: ["a2"],
    multipleCorrect: false,
    category: "rockets",
    explanation: "Se activa para eliminar amenazas si el cohete sale de curso.",
  },
  {
    id: "q26",
    text: "¿En qué casos se activa el sistema de autodestrucción?",
    answers: [
      { id: "a1", text: "Cuando la carga útil supera el peso límite" },
      {
        id: "a2",
        text: "Si el lanzador se desvía de su trayectoria prevista",
      },
      { id: "a3", text: "Tras el Max q" },
      { id: "a4", text: "Al alcanzar la órbita deseada" },
    ],
    correctAnswers: ["a2"],
    multipleCorrect: false,
    category: "rockets",
    explanation:
      "El sistema se usa para evitar riesgos si hay desviación peligrosa.",
  },
  {
    id: "q27",
    text: "¿Qué sucede con las etapas de un lanzador desechable tras cumplir su misión?",
    answers: [
      { id: "a1", text: "Se recuperan y reutilizan" },
      { id: "a2", text: "Se convierten en basura espacial o se queman" },
      { id: "a3", text: "Se acoplan a estaciones espaciales" },
      { id: "a4", text: "Se reutilizan en misiones suborbitales" },
    ],
    correctAnswers: ["a2"],
    multipleCorrect: false,
    category: "rockets",
    explanation:
      "Las etapas ELV se desechan quemándose o quedando en órbitas de desecho.",
  },
  {
    id: "q28",
    text: "¿Qué factores influyen en el valor específico de Max q?",
    answers: [
      { id: "a1", text: "Diseño del cohete, carga útil y trayectoria" },
      { id: "a2", text: "Solo el tipo de combustible usado" },
      { id: "a3", text: "La cantidad de etapas solamente" },
      { id: "a4", text: "La masa del operador de tierra" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "rockets",
    explanation:
      "El valor de Max q varía según diseño, carga y trayectoria de vuelo.",
  },
  {
    id: "q29",
    text: "¿Qué método de separación es común en cohetes más pequeños?",
    answers: [
      { id: "a1", text: "Pistones hidráulicos" },
      { id: "a2", text: "Tornillos pirotécnicos" },
      { id: "a3", text: "Motores de reacción secundarios" },
      { id: "a4", text: "Aletas retráctiles" },
    ],
    correctAnswers: ["a2"],
    multipleCorrect: false,
    category: "rockets",
    explanation:
      "Los tornillos pirotécnicos se usan en sistemas de separación simples y cohetes pequeños.",
  },
  {
    id: "q30",
    text: "¿Qué elemento incorporan las etapas reutilizables para controlar su orientación durante la reentrada?",
    answers: [
      { id: "a1", text: "Sensores de presión" },
      { id: "a2", text: "Aletas de control" },
      { id: "a3", text: "Tornillos de separación" },
      { id: "a4", text: "Cables eléctricos" },
    ],
    correctAnswers: ["a2"],
    multipleCorrect: false,
    category: "rockets",
    explanation:
      "Las aletas permiten maniobras y control de actitud durante la reentrada.",
  },
];
