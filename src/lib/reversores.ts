import { Question } from "@/lib/data";

export const mockReversoresQuestions: Question[] = [
  {
    id: "q1",
    text: "¿Cuál es la finalidad de los reversores?",
    answers: [
      {
        id: "a1",
        text: "Invertir el vector de empuje para frenar la aeronave",
      },
      { id: "a2", text: "Aumentar la velocidad de despegue" },
      { id: "a3", text: "Mejorar la eficiencia del combustible" },
      { id: "a4", text: "Incrementar la altitud de vuelo" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "Reversores",
  },
  {
    id: "q2",
    text: "¿Cómo se logra invertir el vector de empuje según el texto?",
    answers: [
      { id: "a1", text: "A través de la desviación del fluido de escape" },
      { id: "a2", text: "Mediante la inyección de combustible" },
      { id: "a3", text: "Con la apertura de la válvula de admisión" },
      { id: "a4", text: "Utilizando sistemas de refrigeración" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "Reversores",
  },
  {
    id: "q3",
    text: "En un avión de cuatro motores, ¿en cuáles motores se instalan los reversores?",
    answers: [
      { id: "a1", text: "En los dos motores internos" },
      { id: "a2", text: "En todos los motores" },
      { id: "a3", text: "En los dos motores externos" },
      { id: "a4", text: "Solo en uno de los motores" },
    ],
    correctAnswers: ["a3"],
    multipleCorrect: false,
    category: "Reversores",
  },
  {
    id: "q4",
    text: "¿Qué tipo de actuadores se mencionan como predominantes en el funcionamiento de los reversores?",
    answers: [
      { id: "a1", text: "Neumáticos" },
      { id: "a2", text: "Hidráulicos" },
      { id: "a3", text: "Electromagnéticos" },
      { id: "a4", text: "Mecánicos" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "Reversores",
  },
  {
    id: "q5",
    text: "¿Qué señal utilizan los actuadores neumáticos para accionar las placas de reversión?",
    answers: [
      {
        id: "a1",
        text: "La señal de aire de sangrado del motor, proveniente del compresor",
      },
      { id: "a2", text: "La señal eléctrica del sistema de control" },
      { id: "a3", text: "La señal hidráulica del sistema de presurización" },
      { id: "a4", text: "La señal del sensor de temperatura" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "Reversores",
  },
  {
    id: "q6",
    text: "¿Qué ocurre cuando se accionan los reversores en la aeronave?",
    answers: [
      {
        id: "a1",
        text: "Las placas se colocan para obturar la salida y desviar el flujo de aire",
      },
      { id: "a2", text: "Se encienden las bujías para iniciar la combustión" },
      {
        id: "a3",
        text: "Se reducen las rpm del motor para ahorrar combustible",
      },
      { id: "a4", text: "Se incrementa la presión en la cabina" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "Reversores",
  },
  {
    id: "q7",
    text: "¿En qué momento del vuelo se utiliza el sistema de reversores?",
    answers: [
      { id: "a1", text: "Durante el despegue" },
      { id: "a2", text: "Mientras la aeronave está en crucero" },
      { id: "a3", text: "Al aterrizar, en tierra" },
      { id: "a4", text: "Durante maniobras en ascenso" },
    ],
    correctAnswers: ["a3"],
    multipleCorrect: false,
    category: "Reversores",
  },
  {
    id: "q8",
    text: "Al accionar el reversor, ¿qué ocurre con las rpm del motor?",
    answers: [
      { id: "a1", text: "Se mantienen constantes" },
      { id: "a2", text: "Se reducen progresivamente" },
      { id: "a3", text: "Se incrementan para generar un flujo de aire mayor" },
      { id: "a4", text: "Se alternan entre alto y bajo" },
    ],
    correctAnswers: ["a3"],
    multipleCorrect: false,
    category: "Reversores",
  },
  {
    id: "q9",
    text: "¿Qué efecto produce la desviación del flujo de aire en el funcionamiento de los reversores?",
    answers: [
      {
        id: "a1",
        text: "Genera un vector de empuje en sentido contrario que frena la aeronave",
      },
      { id: "a2", text: "Aumenta la velocidad de la aeronave" },
      { id: "a3", text: "Mejora la eficiencia del combustible" },
      { id: "a4", text: "Reduce la turbulencia en cabina" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "Reversores",
  },
  {
    id: "q10",
    text: "En el sistema con motor bypass, ¿qué elemento se utiliza para desviar el flujo de aire frío?",
    answers: [
      { id: "a1", text: "Una válvula adicional" },
      { id: "a2", text: "Un sistema de inyección secundaria" },
      { id: "a3", text: "Una placa que se desplaza" },
      { id: "a4", text: "Un compresor extra" },
    ],
    correctAnswers: ["a3"],
    multipleCorrect: false,
    category: "Reversores",
  },
  {
    id: "q11",
    text: "Seleccione todas las afirmaciones correctas sobre los reversores:",
    answers: [
      {
        id: "a1",
        text: "Su finalidad es invertir el vector de empuje para frenar la aeronave",
      },
      { id: "a2", text: "Se logran desviando el fluido de escape" },
      { id: "a3", text: "Funcionan en pleno vuelo a gran altitud" },
      {
        id: "a4",
        text: "Utilizan actuadores neumáticos o hidráulicos para accionar las placas",
      },
    ],
    correctAnswers: ["a1", "a2", "a4"],
    multipleCorrect: true,
    category: "Reversores",
  },
  {
    id: "q12",
    text: "¿Cuáles de los siguientes elementos intervienen en el funcionamiento del reversor?",
    answers: [
      { id: "a1", text: "El difusor de escape" },
      { id: "a2", text: "Placas que desvían el flujo de aire" },
      { id: "a3", text: "Bujías de ignición" },
      { id: "a4", text: "Actuadores (neumáticos o hidráulicos)" },
    ],
    correctAnswers: ["a1", "a2", "a4"],
    multipleCorrect: true,
    category: "Reversores",
  },
  {
    id: "q13",
    text: "¿Qué efectos se producen al accionar el reversor?",
    answers: [
      { id: "a1", text: "Se obtura la salida del fluido de escape" },
      {
        id: "a2",
        text: "Se incrementan las rpm del motor para generar un flujo de aire mayor",
      },
      { id: "a3", text: "Se reduce la velocidad de salida de los gases" },
      {
        id: "a4",
        text: "Se desvía el flujo de aire, generando un vector de fuerza contraria",
      },
    ],
    correctAnswers: ["a1", "a2", "a4"],
    multipleCorrect: true,
    category: "Reversores",
  },
  {
    id: "q14",
    text: "Seleccione las características que aplican a los reversores en sistemas con motor bypass:",
    answers: [
      { id: "a1", text: "Desvían tanto aire caliente como aire frío" },
      { id: "a2", text: "Funcionan únicamente con aire caliente" },
      {
        id: "a3",
        text: "Incrementan la velocidad del aire al aumentar las rpm del motor",
      },
      {
        id: "a4",
        text: "Invierten el vector de empuje para frenar la aeronave",
      },
    ],
    correctAnswers: ["a1", "a3", "a4"],
    multipleCorrect: true,
    category: "Reversores",
  },
  {
    id: "q15",
    text: "En el funcionamiento de los reversores, ¿cuáles de las acciones se realizan al accionar las palancas del acelerador?",
    answers: [
      { id: "a1", text: "Bajan las rpm para llevar el motor a ralentí" },
      {
        id: "a2",
        text: "Aceleran el motor para incrementar la velocidad de salida de gases",
      },
      {
        id: "a3",
        text: "Actúan sobre los actuadores para posicionar las placas",
      },
      {
        id: "a4",
        text: "Generan un incremento del flujo de aire que se desvía",
      },
    ],
    correctAnswers: ["a1", "a2", "a3", "a4"],
    multipleCorrect: true,
    category: "Reversores",
  },
];
