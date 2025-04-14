import { Question } from "@/lib/data";

export const mockAnularQuestions: Question[] = [
  {
    id: "q1",
    text: "¿Qué es una cámara de combustión anular de flujo inverso?",
    answers: [
      {
        id: "a1",
        text: "Es una cámara de combustión en forma anular donde el flujo de aire circula en dirección inversa.",
      },
      {
        id: "a2",
        text: "Es una cámara de combustión lineal con flujo directo.",
      },
      {
        id: "a3",
        text: "Es un tipo de cámara donde el combustible se inyecta de manera directa en el escape.",
      },
      { id: "a4", text: "Es una cámara de combustión de doble combustión." },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "combustion-chamber-anular",
    explanation:
      "Este tipo de cámara es especial porque tiene forma anular y el flujo de aire se invierte, es decir, ingresa por la parte trasera en vez de la delantera.",
  },
  {
    id: "q2",
    text: "¿Por dónde ingresa el aire en la cámara de combustión anular de flujo inverso?",
    answers: [
      {
        id: "a1",
        text: "Por la sección trasera a través de una rejilla de ingreso.",
      },
      { id: "a2", text: "Por la parte delantera a través de un ventilador." },
      { id: "a3", text: "Desde los lados mediante conductos laterales." },
      { id: "a4", text: "Desde la parte superior mediante inyección directa." },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "combustion-chamber-anular",
    explanation:
      "El aire ingresa por la sección trasera a través de una rejilla, característica fundamental del diseño de flujo inverso.",
  },
  {
    id: "q3",
    text: "¿Cuáles son las etapas del compresor que forman parte del sistema de la cámara de combustión anular?",
    answers: [
      {
        id: "a1",
        text: "Una etapa de compresor axial y otra de compresor centrífugo.",
      },
      { id: "a2", text: "Dos etapas de compresor axial." },
      { id: "a3", text: "Una etapa de compresor centrífugo únicamente." },
      { id: "a4", text: "Una etapa de compresor radial y otra axial." },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "combustion-chamber-anular",
    explanation:
      "El sistema incorpora dos etapas en el compresor: primero un compresor axial y luego uno centrífugo, para incrementar la presión del aire.",
  },
  {
    id: "q4",
    text: "¿Qué función cumple el difusor en el conjunto del compresor centrífugo?",
    answers: [
      {
        id: "a1",
        text: "Disminuye la velocidad del aire y aumenta su presión.",
      },
      {
        id: "a2",
        text: "Aumenta la velocidad del aire sin cambiar la presión.",
      },
      { id: "a3", text: "Reorienta el flujo de aire en dirección axial." },
      {
        id: "a4",
        text: "Enfría el aire antes de ingresar a la cámara de combustión.",
      },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "combustion-chamber-anular",
    explanation:
      "El difusor es un conducto divergente que reduce la velocidad del aire, resultando en un aumento de presión, lo cual es fundamental para el proceso de combustión.",
  },
  {
    id: "q5",
    text: "Después de pasar por el difusor, ¿qué componente dirige el fluido hacia la cámara anular?",
    answers: [
      { id: "a1", text: "El colector" },
      { id: "a2", text: "El estator" },
      { id: "a3", text: "El rotor" },
      { id: "a4", text: "La válvula de admisión" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "combustion-chamber-anular",
    explanation:
      "El colector toma el flujo de aire procesado por el compresor y lo dirige hacia el interior de la cámara anular.",
  },
  {
    id: "q6",
    text: "¿Cuál es la función principal de la primera turbina en el sistema de la cámara de combustión anular?",
    answers: [
      {
        id: "a1",
        text: "Manejar los compresores, impulsándolos para comprimir el aire.",
      },
      { id: "a2", text: "Inyectar el combustible en la cámara de combustión." },
      {
        id: "a3",
        text: "Regular el flujo de aire hacia la cámara de combustión.",
      },
      { id: "a4", text: "Enfriar la mezcla aire-combustible." },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "combustion-chamber-anular",
    explanation:
      "La primera turbina está dedicada a mover los compresores, lo que permite la compresión del aire necesaria para la combustión.",
  },
  {
    id: "q7",
    text: "¿Qué diferencia presenta la segunda turbina en comparación con la primera en este sistema?",
    answers: [
      {
        id: "a1",
        text: "La segunda turbina está desacoplada y tiene su propio eje para accionar la hélice.",
      },
      { id: "a2", text: "La segunda turbina funciona únicamente a bajas rpm." },
      {
        id: "a3",
        text: "La segunda turbina inyecta combustible en la cámara de combustión.",
      },
      {
        id: "a4",
        text: "La segunda turbina dirige el aire a la entrada del compresor axial.",
      },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "combustion-chamber-anular",
    explanation:
      "La segunda turbina es especial porque está desacoplada, posee su propio eje y se encarga de mover la caja reductora que acciona la hélice.",
  },
  {
    id: "q8",
    text: "¿Qué ocurre con la mezcla de aire y combustible en la cámara de combustión en este diseño?",
    answers: [
      {
        id: "a1",
        text: "Se expande por el incremento de temperatura tras la combustión.",
      },
      { id: "a2", text: "Se comprime para aumentar la presión de salida." },
      {
        id: "a3",
        text: "Se separa en aire y combustible por la inyección diferencial.",
      },
      { id: "a4", text: "Se enfría gradualmente antes de salir del sistema." },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "combustion-chamber-anular",
    explanation:
      "Una vez que la mezcla se quema en la cámara de combustión, se expande debido al aumento de temperatura, lo que contribuye a la generación de energía.",
  },
  {
    id: "q9",
    text: "¿Cuál es el papel de la caja reductora en el sistema de la cámara de combustión anular?",
    answers: [
      {
        id: "a1",
        text: "Convierte la rotación de la segunda turbina en movimiento adecuado para accionar la hélice.",
      },
      {
        id: "a2",
        text: "Aumenta la velocidad de rotación del compresor axial.",
      },
      { id: "a3", text: "Regula la presión en la cámara de combustión." },
      {
        id: "a4",
        text: "Reduce la temperatura de la mezcla aire-combustible.",
      },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "combustion-chamber-anular",
    explanation:
      "La caja reductora es accionada por la segunda turbina y transforma ese movimiento para mover la hélice de manera eficaz.",
  },
  {
    id: "q10",
    text: "En resumen, ¿qué secuencia sigue el aire en el sistema de la cámara de combustión anular de flujo inverso?",
    answers: [
      {
        id: "a1",
        text: "El aire ingresa por la rejilla, pasa por el compresor axial, luego por el compresor centrífugo, pasa por el difusor y el colector, ingresa a la cámara anular donde se mezcla con el combustible, y finalmente atraviesa la turbina y la segunda turbina para mover la hélice.",
      },
      {
        id: "a2",
        text: "El aire entra por la parte delantera, se mezcla con el combustible, y se dirige directamente a las turbinas.",
      },
      {
        id: "a3",
        text: "El aire circula dentro de un circuito cerrado sin intervención de compresores.",
      },
      {
        id: "a4",
        text: "El aire ingresa por el compresor, se intercala con el combustible, y luego se condensa antes de salir.",
      },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "combustion-chamber-anular",
    explanation:
      "La secuencia correcta incluye el ingreso del aire por la rejilla, su paso por ambos compresores, el difusor, colector, la mezcla en la cámara y el accionamiento de las turbinas para finalmente mover la hélice.",
  },
];
