import { Question } from "@/lib/data";

export const mockRadialEngineQuestions: Question[] = [
  {
    id: "q1",
    text: "¿Cuántas manivelas tiene el cigüeñal de un motor radial?",
    answers: [
      { id: "a1", text: "Una" },
      { id: "a2", text: "Dos" },
      { id: "a3", text: "Tres" },
      { id: "a4", text: "Ninguna" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "radial-engine",
    explanation:
      "El motor radial tiene un cigüeñal con una sola manivela, lo que es característico de este diseño.",
  },
  {
    id: "q2",
    text: "¿Cómo se llama la biela que está directamente montada en el cigüeñal de un motor radial?",
    answers: [
      { id: "a1", text: "Biela auxiliar" },
      { id: "a2", text: "Biela principal" },
      { id: "a3", text: "Biela maestra" },
      { id: "a4", text: "Biela de conexión" },
    ],
    correctAnswers: ["a3"],
    multipleCorrect: false,
    category: "radial-engine",
    explanation:
      "La biela montada en el cigüeñal se denomina biela maestra, que es la base para unir el resto de las bieletas.",
  },
  {
    id: "q3",
    text: "¿Cómo se conectan los demás pistones en un motor radial?",
    answers: [
      { id: "a1", text: "Directamente al cigüeñal" },
      { id: "a2", text: "A través de bieletas que se unen a la biela maestra" },
      { id: "a3", text: "Mediante engranajes conectados al cigüeñal" },
      { id: "a4", text: "Por medio de soportes independientes" },
    ],
    correctAnswers: ["a2"],
    multipleCorrect: false,
    category: "radial-engine",
    explanation:
      "Los demás pistones están conectados a la biela maestra mediante bieletas, lo que permite coordinar su movimiento.",
  },
  {
    id: "q4",
    text: "¿Qué función cumplen los engranajes en el motor radial?",
    answers: [
      {
        id: "a1",
        text: "Transmiten el movimiento del cigüeñal a un conjunto de levas",
      },
      { id: "a2", text: "Conectan directamente los pistones al cigüeñal" },
      { id: "a3", text: "Aumentan la presión del combustible" },
      { id: "a4", text: "Enfriar el motor durante la operación" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "radial-engine",
    explanation:
      "Los engranajes transmiten el movimiento del cigüeñal a las levas, que a través de los balancines controlan las válvulas de admisión.",
  },
  {
    id: "q5",
    text: "¿Cuál es la función del carburador en un motor radial?",
    answers: [
      { id: "a1", text: "Enfriar el aire antes de la combustión" },
      {
        id: "a2",
        text: "Inyectar combustible y permitir el ingreso de aire para formar la mezcla",
      },
      { id: "a3", text: "Regular la presión del aceite" },
      { id: "a4", text: "Controlar el movimiento de los pistones" },
    ],
    correctAnswers: ["a2"],
    multipleCorrect: false,
    category: "radial-engine",
    explanation:
      "El carburador inyecta el combustible y permite que el aire ingrese, formando la mezcla aire-combustible necesaria para la combustión.",
  },
  {
    id: "q6",
    text: "Después de la formación de la mezcla de aire y combustible, ¿a qué componente se dirige dicha mezcla?",
    answers: [
      { id: "a1", text: "Directamente a los cilindros" },
      { id: "a2", text: "A un compresor centrífugo" },
      { id: "a3", text: "A la cámara de combustión" },
      { id: "a4", text: "A las válvulas de admisión" },
    ],
    correctAnswers: ["a2"],
    multipleCorrect: false,
    category: "radial-engine",
    explanation:
      "La mezcla pasa a través de un conducto hacia un compresor centrífugo que incrementa la presión en los conductos de admisión.",
  },
  {
    id: "q7",
    text: "¿Cuál es la función principal del compresor centrífugo en un motor radial?",
    answers: [
      {
        id: "a1",
        text: "Incrementar la presión de la mezcla antes de que ingrese a los cilindros",
      },
      { id: "a2", text: "Enfriar la mezcla de aire-combustible" },
      { id: "a3", text: "Aumentar la velocidad del cigüeñal" },
      { id: "a4", text: "Regular el flujo de combustible" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "radial-engine",
    explanation:
      "El compresor centrífugo incrementa la presión en los conductos de admisión para asegurar que una cantidad adecuada de mezcla ingrese a los cilindros.",
  },
  {
    id: "q8",
    text: "¿Qué función desempeñan los balancines en un motor radial?",
    answers: [
      { id: "a1", text: "Conectar directamente los pistones al cigüeñal" },
      {
        id: "a2",
        text: "Comandar las válvulas de admisión mediante el movimiento de las levas",
      },
      {
        id: "a3",
        text: "Aumentar la presión de la mezcla de aire-combustible",
      },
      { id: "a4", text: "Servir como disipadores de calor" },
    ],
    correctAnswers: ["a2"],
    multipleCorrect: false,
    category: "radial-engine",
    explanation:
      "Los balancines se mueven a través de las levas y controlan las válvulas de admisión, asegurando que la mezcla ingrese al cilindro en el momento adecuado.",
  },
  {
    id: "q9",
    text: "¿Qué sucede en los conductos de admisión cuando se abren las válvulas correspondientes?",
    answers: [
      {
        id: "a1",
        text: "La mezcla de aire y combustible se incorpora a los cilindros",
      },
      { id: "a2", text: "Se incrementa la presión del aceite" },
      { id: "a3", text: "La mezcla se enfría antes de la combustión" },
      { id: "a4", text: "La velocidad del compresor disminuye" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "radial-engine",
    explanation:
      "Al abrirse las válvulas, la mezcla de aire y combustible fluye hacia el interior del cilindro para ser quemada.",
  },
  {
    id: "q10",
    text: "¿Cuál es la función de las válvulas de admisión en un motor radial?",
    answers: [
      {
        id: "a1",
        text: "Permitir el ingreso de la mezcla de aire y combustible a los cilindros",
      },
      { id: "a2", text: "Regular la presión del aire en el compresor" },
      { id: "a3", text: "Controlar la temperatura del motor" },
      { id: "a4", text: "Impulsar el movimiento del cigüeñal" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "radial-engine",
    explanation:
      "Las válvulas de admisión permiten que la mezcla de aire y combustible ingrese a los cilindros, donde se produce la combustión.",
  },
];
