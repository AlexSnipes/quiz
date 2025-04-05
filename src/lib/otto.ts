import { Question } from "@/lib/data";

export const mockOttoCycleQuestions: Question[] = [
  {
    id: "q1",
    text: "En el primer tiempo del ciclo Otto, ¿qué sucede con el movimiento del pistón y las válvulas?",
    answers: [
      {
        id: "a1",
        text: "El pistón se mueve del punto muerto superior al inferior, con la válvula de admisión abierta y la de escape cerrada",
      },
      {
        id: "a2",
        text: "El pistón se mueve del punto muerto inferior al superior, con ambas válvulas abiertas",
      },
      {
        id: "a3",
        text: "El pistón se mueve del punto muerto superior al inferior, con ambas válvulas cerradas",
      },
      {
        id: "a4",
        text: "El pistón se mueve del punto muerto inferior al superior, con la válvula de admisión abierta",
      },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "engines",
  },
  {
    id: "q2",
    text: "¿Qué fenómeno se produce al iniciar la carrera del pistón desde el punto muerto superior en la admisión?",
    answers: [
      { id: "a1", text: "Se genera una compresión de la mezcla de gases" },
      {
        id: "a2",
        text: "Se produce una succión por la disminución de presión atmosférica",
      },
      { id: "a3", text: "Se inicia la combustión de la mezcla" },
      { id: "a4", text: "Se abre la válvula de escape" },
    ],
    correctAnswers: ["a2"],
    multipleCorrect: false,
    category: "engines",
  },
  {
    id: "q3",
    text: "¿Por qué se retrasa el cierre de la válvula de escape durante la admisión?",
    answers: [
      {
        id: "a1",
        text: "Para permitir que los gases quemados sean evacuados por la entrada de la mezcla fresca",
      },
      { id: "a2", text: "Para incrementar la compresión de la mezcla" },
      { id: "a3", text: "Para aumentar la presión interna del cilindro" },
      { id: "a4", text: "Para iniciar el encendido de la bujía" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "engines",
  },
  {
    id: "q4",
    text: "Cuando el pistón llega al punto muerto inferior durante la admisión, ¿qué ocurre con la mezcla de gases?",
    answers: [
      {
        id: "a1",
        text: "La mezcla se inicia a comprimir al moverse el pistón de nuevo hacia el punto muerto superior",
      },
      { id: "a2", text: "La mezcla se quema inmediatamente" },
      { id: "a3", text: "La mezcla se evacua completamente" },
      { id: "a4", text: "La mezcla se mezcla con gases de escape" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "engines",
  },
  {
    id: "q5",
    text: "Durante el tiempo de compresión, ¿cuál es el principal efecto en la mezcla de gases?",
    answers: [
      {
        id: "a1",
        text: "Se incrementa la presión y la temperatura de la mezcla",
      },
      { id: "a2", text: "Se produce la apertura de la válvula de admisión" },
      { id: "a3", text: "Se enfría la mezcla para mejorar la combustión" },
      { id: "a4", text: "Se expulsa la mezcla hacia el exterior" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "engines",
  },
  {
    id: "q6",
    text: "Antes de que el pistón alcance el punto muerto superior durante la compresión, ¿qué evento se produce?",
    answers: [
      { id: "a1", text: "Se retrasa el cierre de la válvula de escape" },
      { id: "a2", text: "Se produce el encendido de la bujía" },
      { id: "a3", text: "Se abre la válvula de admisión" },
      { id: "a4", text: "Se inicia la expansión de los gases" },
    ],
    correctAnswers: ["a2"],
    multipleCorrect: false,
    category: "engines",
  },
  {
    id: "q7",
    text: "¿Cuál es el propósito del encendido de la bujía justo antes del final de la compresión?",
    answers: [
      {
        id: "a1",
        text: "Encender la mezcla de gases para asegurar su combustión completa en la cámara",
      },
      { id: "a2", text: "Reiniciar el ciclo de admisión" },
      { id: "a3", text: "Reducir la presión en el cilindro" },
      { id: "a4", text: "Evacuar los gases quemados" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "engines",
  },
  {
    id: "q8",
    text: "Durante la expansión, ¿qué evento ocurre antes de que el pistón alcance el punto muerto inferior?",
    answers: [
      { id: "a1", text: "Se cierra la válvula de admisión" },
      { id: "a2", text: "Se abre la válvula de escape para evacuar los gases" },
      { id: "a3", text: "Se inicia la compresión de la mezcla" },
      { id: "a4", text: "Se produce la inyección de combustible" },
    ],
    correctAnswers: ["a2"],
    multipleCorrect: false,
    category: "engines",
  },
  {
    id: "q9",
    text: "¿Por qué se abre la válvula de escape durante el tiempo de expansión?",
    answers: [
      {
        id: "a1",
        text: "Para evacuar rápidamente los gases calientes y enfriar la válvula y el cilindro",
      },
      { id: "a2", text: "Para permitir la entrada de aire fresco" },
      { id: "a3", text: "Para iniciar el encendido de la bujía" },
      { id: "a4", text: "Para aumentar la compresión en el cilindro" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "engines",
  },
  {
    id: "q10",
    text: "¿Qué acción se realiza al adelantar la apertura de la válvula de admisión durante la expansión?",
    answers: [
      { id: "a1", text: "Se inicia la compresión de la mezcla de gases" },
      {
        id: "a2",
        text: "Se permite la entrada de fluido fresco que ayuda a enfriar el sistema",
      },
      { id: "a3", text: "Se incrementa la temperatura del cilindro" },
      { id: "a4", text: "Se produce el encendido de la bujía" },
    ],
    correctAnswers: ["a2"],
    multipleCorrect: false,
    category: "engines",
  },
  {
    id: "q11",
    text: "¿Qué elemento del motor ayuda a acumular energía cinética para mantener el movimiento continuo del pistón?",
    answers: [
      { id: "a1", text: "El sistema de válvulas" },
      { id: "a2", text: "El volante de inercia" },
      { id: "a3", text: "La bujía de ignición" },
      { id: "a4", text: "La biela" },
    ],
    correctAnswers: ["a2"],
    multipleCorrect: false,
    category: "engines",
  },
  {
    id: "q12",
    text: "¿Qué función tiene la biela en el funcionamiento del motor?",
    answers: [
      {
        id: "a1",
        text: "Transformar el movimiento de rotación en movimiento lineal",
      },
      {
        id: "a2",
        text: "Transformar el movimiento lineal del pistón en rotación en el cigüeñal",
      },
      { id: "a3", text: "Controlar la apertura y cierre de las válvulas" },
      { id: "a4", text: "Regular la presión dentro del cilindro" },
    ],
    correctAnswers: ["a2"],
    multipleCorrect: false,
    category: "engines",
  },
  {
    id: "q13",
    text: "¿Cuáles son los dos límites que marcan el recorrido lineal del pistón?",
    answers: [
      { id: "a1", text: "Punto muerto superior y punto muerto inferior" },
      { id: "a2", text: "Volumen máximo y mínimo de la cámara de combustión" },
      { id: "a3", text: "Admisión y escape" },
      { id: "a4", text: "Compresión y expansión" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "engines",
  },
  {
    id: "q14",
    text: "¿Dónde se localiza la cámara de combustión en un motor de ciclo Otto?",
    answers: [
      {
        id: "a1",
        text: "Dentro del cilindro, por debajo del punto muerto inferior",
      },
      {
        id: "a2",
        text: "Por encima del punto muerto superior, en la tapa del cilindro",
      },
      { id: "a3", text: "En el cigüeñal" },
      { id: "a4", text: "En la biela" },
    ],
    correctAnswers: ["a2"],
    multipleCorrect: false,
    category: "engines",
  },
  {
    id: "q15",
    text: "¿Qué componentes se alojan en la tapa del cilindro?",
    answers: [
      { id: "a1", text: "El sistema de inyección y el compresor" },
      {
        id: "a2",
        text: "La bujía de ignición, la válvula de admisión y la válvula de escape",
      },
      { id: "a3", text: "El volante de inercia y la biela" },
      { id: "a4", text: "El sistema de refrigeración" },
    ],
    correctAnswers: ["a2"],
    multipleCorrect: false,
    category: "engines",
  },
  {
    id: "q16",
    text: "Durante el tiempo de admisión, ¿cuál es la composición del fluido que ingresa al cilindro?",
    answers: [
      { id: "a1", text: "Solo aire" },
      { id: "a2", text: "Solo combustible" },
      { id: "a3", text: "Una mezcla de aire y combustible" },
      { id: "a4", text: "Gases de escape recirculados" },
    ],
    correctAnswers: ["a3"],
    multipleCorrect: false,
    category: "engines",
  },
  {
    id: "q17",
    text: "¿Qué ocurre inmediatamente después de que el pistón alcanza el punto muerto inferior en el ciclo?",
    answers: [
      { id: "a1", text: "Se abre la válvula de escape para evacuar los gases" },
      {
        id: "a2",
        text: "La válvula de admisión se cierra y comienza la compresión",
      },
      { id: "a3", text: "Se produce el encendido de la bujía" },
      { id: "a4", text: "El pistón se detiene para iniciar la expansión" },
    ],
    correctAnswers: ["a2"],
    multipleCorrect: false,
    category: "engines",
  },
  {
    id: "q18",
    text: "¿Qué efecto tiene la compresión sobre la mezcla de gases en el cilindro?",
    answers: [
      { id: "a1", text: "Disminuye la temperatura y la presión" },
      { id: "a2", text: "Incrementa la presión y eleva la temperatura" },
      { id: "a3", text: "Evacua los gases quemados" },
      { id: "a4", text: "Reduce el volumen de la cámara de combustión" },
    ],
    correctAnswers: ["a2"],
    multipleCorrect: false,
    category: "engines",
  },
  {
    id: "q19",
    text: "¿Qué acción se produce en el motor cuando la chispa de la bujía enciende la mezcla de gases?",
    answers: [
      { id: "a1", text: "Se inicia la compresión de la mezcla" },
      {
        id: "a2",
        text: "Se produce la combustión, generando una expansión que empuja el pistón",
      },
      { id: "a3", text: "Se abre la válvula de admisión" },
      { id: "a4", text: "El pistón se mueve hacia el punto muerto superior" },
    ],
    correctAnswers: ["a2"],
    multipleCorrect: false,
    category: "engines",
  },
  {
    id: "q20",
    text: "Seleccione las afirmaciones que explican correctamente cómo se mantiene el ciclo continuo en el motor de ciclo Otto:",
    answers: [
      {
        id: "a1",
        text: "La expansión genera la fuerza necesaria para impulsar el pistón",
      },
      {
        id: "a2",
        text: "El volante de inercia acumula energía cinética que ayuda a la continuidad del movimiento",
      },
      {
        id: "a3",
        text: "El retraso en el cierre de las válvulas permite un mejor vaciado y llenado del cilindro",
      },
      {
        id: "a4",
        text: "La bujía de ignición se enciende durante la admisión para mejorar la mezcla",
      },
    ],
    correctAnswers: ["a1", "a2", "a3"],
    multipleCorrect: true,
    category: "engines",
  },
];
