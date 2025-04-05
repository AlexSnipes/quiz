import { Question } from "@/lib/data";

export const mockTurbochargerQuestions: Question[] = [
  {
    id: "q1",
    text: "¿Cuál es la finalidad de los motores turboalimentados?",
    answers: [
      {
        id: "a1",
        text: "Mantener la potencia en altura al comprimir el aire ambiente",
      },
      { id: "a2", text: "Reducir el consumo de combustible en tierra" },
      { id: "a3", text: "Aumentar la velocidad máxima del motor" },
      { id: "a4", text: "Disminuir el peso del motor" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "Motor turboalimentado",
  },
  {
    id: "q2",
    text: "¿Qué componente se encarga de comprimir el aire ambiente en un motor turboalimentado?",
    answers: [
      { id: "a1", text: "El compresor" },
      { id: "a2", text: "La turbina" },
      { id: "a3", text: "La válvula de derivación" },
      { id: "a4", text: "El sensor de densidad" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "Motor turboalimentado",
  },
  {
    id: "q3",
    text: "¿Qué componente impulsa al compresor en el motor turboalimentado?",
    answers: [
      { id: "a1", text: "La turbina, que es movida por los gases de escape" },
      { id: "a2", text: "El aceite del motor" },
      { id: "a3", text: "El resorte del control de densidad" },
      { id: "a4", text: "La válvula de derivación" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "Motor turboalimentado",
  },
  {
    id: "q4",
    text: "¿Qué determina la variación en la velocidad de rotación de la turbina?",
    answers: [
      { id: "a1", text: "La cantidad de gases de escape que pasan por ella" },
      { id: "a2", text: "El flujo de aceite en el sistema" },
      { id: "a3", text: "La presión atmosférica" },
      { id: "a4", text: "La posición de la válvula de derivación" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "Motor turboalimentado",
  },
  {
    id: "q5",
    text: "Si la cantidad de gases de escape es baja, ¿cómo se comporta la turbina?",
    answers: [
      { id: "a1", text: "Se mueve a baja rpm" },
      { id: "a2", text: "Se mueve a altas rpm" },
      { id: "a3", text: "Se detiene por completo" },
      { id: "a4", text: "Mantiene una velocidad constante" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "Motor turboalimentado",
  },
  {
    id: "q6",
    text: "¿Qué ocurre cuando la cantidad de gases de escape es elevada?",
    answers: [
      { id: "a1", text: "La turbina se mueve a altas rpm" },
      { id: "a2", text: "La turbina se ralentiza" },
      { id: "a3", text: "El compresor se desconecta" },
      { id: "a4", text: "El aceite se acumula en el sistema" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "Motor turboalimentado",
  },
  {
    id: "q7",
    text: "¿Cómo se denomina la válvula ubicada en la salida de los gases de escape con mayor diámetro?",
    answers: [
      { id: "a1", text: "Válvula de derivación" },
      { id: "a2", text: "Válvula de control" },
      { id: "a3", text: "Válvula de admisión" },
      { id: "a4", text: "Válvula de retorno" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "Motor turboalimentado",
  },
  {
    id: "q8",
    text: "¿Qué efecto tiene cerrar la válvula de derivación?",
    answers: [
      {
        id: "a1",
        text: "Impide el paso por ese conducto, haciendo que más gases de escape pasen por la turbina",
      },
      {
        id: "a2",
        text: "Permite que la mayoría de los gases de escape se desvíen al exterior",
      },
      { id: "a3", text: "Reduce la presión del aceite en el sistema" },
      { id: "a4", text: "Disminuye la compresión del aire en el compresor" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "Motor turboalimentado",
  },
  {
    id: "q9",
    text: "¿Qué sucede al abrir la válvula de derivación?",
    answers: [
      {
        id: "a1",
        text: "La mayor parte de los gases de escape salen a través de la válvula, reduciendo las rpm de la turbina",
      },
      {
        id: "a2",
        text: "Todos los gases son redirigidos a la turbina, acelerándola",
      },
      { id: "a3", text: "Se incrementa la presión en el compresor" },
      { id: "a4", text: "Se activa el control de densidad" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "Motor turboalimentado",
  },
  {
    id: "q10",
    text: "¿A través de qué sistema se controla la válvula de derivación?",
    answers: [
      { id: "a1", text: "El control de densidad" },
      { id: "a2", text: "El sensor de temperatura" },
      { id: "a3", text: "El compresor" },
      { id: "a4", text: "La bomba de combustible" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "Motor turboalimentado",
  },
  {
    id: "q11",
    text: "¿Qué función cumple la cápsula en el control de densidad?",
    answers: [
      {
        id: "a1",
        text: "Mide la presión (y la temperatura) del aire que ingresa al múltiple de admisión",
      },
      { id: "a2", text: "Controla la velocidad de la turbina" },
      { id: "a3", text: "Regula el flujo de combustible" },
      { id: "a4", text: "Monitorea el nivel de aceite en el sistema" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "Motor turboalimentado",
  },
  {
    id: "q12",
    text: "¿Qué sucede con la cápsula cuando la presión es alta?",
    answers: [
      {
        id: "a1",
        text: "Se comprime y activa la apertura de la válvula para permitir un mayor flujo de aceite hacia el retorno",
      },
      { id: "a2", text: "Se dilata y cierra la válvula para acumular aceite" },
      { id: "a3", text: "Se mantiene sin cambios" },
      {
        id: "a4",
        text: "Envía una señal para disminuir la velocidad de la turbina",
      },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "Motor turboalimentado",
  },
  {
    id: "q13",
    text: "¿Qué ocurre cuando la presión en el sistema disminuye?",
    answers: [
      {
        id: "a1",
        text: "La cápsula se dilata y cierra la válvula, obstruyendo el pasaje del aceite",
      },
      { id: "a2", text: "La cápsula se comprime y abre la válvula" },
      { id: "a3", text: "El control de densidad se desactiva" },
      { id: "a4", text: "La válvula de derivación permanece abierta" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "Motor turboalimentado",
  },
  {
    id: "q14",
    text: "¿Cuál es el efecto de la acumulación de aceite en la válvula de derivación?",
    answers: [
      {
        id: "a1",
        text: "Empuja un pistón que, al comprimir un resorte, cierra la válvula de derivación",
      },
      {
        id: "a2",
        text: "Hace que la válvula se abra y permita el paso del aceite",
      },
      { id: "a3", text: "Incrementa la velocidad de la turbina" },
      { id: "a4", text: "Disminuye la presión en el compresor" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "Motor turboalimentado",
  },
  {
    id: "q15",
    text: "Seleccione las afirmaciones correctas sobre el funcionamiento de la válvula de derivación:",
    answers: [
      {
        id: "a1",
        text: "El aceite ingresa y egresa, moviendo un pistón contra un resorte",
      },
      { id: "a2", text: "El pistón mueve la válvula a través de una palanca" },
      {
        id: "a3",
        text: "La válvula se cierra de forma transversal al pasaje de los gases de escape",
      },
      {
        id: "a4",
        text: "La válvula se abre únicamente cuando el motor está apagado",
      },
    ],
    correctAnswers: ["a1", "a2", "a3"],
    multipleCorrect: true,
    category: "Motor turboalimentado",
  },
  {
    id: "q16",
    text: "¿Cómo influye el cierre de la válvula de derivación en el paso de los gases de escape?",
    answers: [
      {
        id: "a1",
        text: "Mayor cantidad de gases pasa por la turbina, acelerándola",
      },
      { id: "a2", text: "Se redirige la mayor parte de los gases al exterior" },
      { id: "a3", text: "El compresor reduce su actividad" },
      { id: "a4", text: "La presión del aceite disminuye" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "Motor turboalimentado",
  },
  {
    id: "q17",
    text: "Seleccione los elementos que participan en el control de la válvula de derivación:",
    answers: [
      { id: "a1", text: "Aceite proveniente del motor" },
      { id: "a2", text: "Control de densidad" },
      { id: "a3", text: "Cápsula de presión" },
      { id: "a4", text: "Sensor de oxígeno" },
    ],
    correctAnswers: ["a1", "a2", "a3"],
    multipleCorrect: true,
    category: "Motor turboalimentado",
  },
  {
    id: "q18",
    text: "¿Qué función cumple el retorno en el sistema de control de la válvula de derivación?",
    answers: [
      {
        id: "a1",
        text: "Permite el flujo de aceite para liberar la acumulación y regular la apertura de la válvula",
      },
      { id: "a2", text: "Incrementa la presión del compresor" },
      { id: "a3", text: "Activa el sensor de densidad" },
      { id: "a4", text: "Disminuye la velocidad de la turbina" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "Motor turboalimentado",
  },
  {
    id: "q19",
    text: "¿Cómo se regula la tensión del resorte que interviene en el funcionamiento de la válvula de derivación?",
    answers: [
      {
        id: "a1",
        text: "Mediante una leva que establece un valor patrón de presión para la mejor condición de potencia",
      },
      { id: "a2", text: "A través del flujo de aceite hacia el retorno" },
      {
        id: "a3",
        text: "Por la cantidad de gases de escape que pasan por la turbina",
      },
      {
        id: "a4",
        text: "Con el ajuste manual del resorte durante el mantenimiento",
      },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "Motor turboalimentado",
  },
  {
    id: "q20",
    text: "Seleccione las afirmaciones correctas sobre el papel de la leva en el sistema turboalimentado:",
    answers: [
      {
        id: "a1",
        text: "Establece el valor patrón de presión para el control del motor",
      },
      {
        id: "a2",
        text: "Comprime un resorte cuya tensión regula la presión de ingreso de aire y combustible",
      },
      {
        id: "a3",
        text: "Mueve directamente la válvula de derivación sin intervención de otros componentes",
      },
      {
        id: "a4",
        text: "Su posición se establece mediante el comando de potencia del motor",
      },
    ],
    correctAnswers: ["a1", "a2", "a4"],
    multipleCorrect: true,
    category: "Motor turboalimentado",
  },
];
