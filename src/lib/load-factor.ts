import { Question } from "@/lib/data";

export const mockLoadFactorQuestions: Question[] = [
  {
    id: "q1",
    text: "¿Qué representa el factor de carga en la ecuación n = L/W?",
    answers: [
      {
        id: "a1",
        text: "La relación entre la sustentación y el peso de la aeronave",
      },
      { id: "a2", text: "La suma de la sustentación y el peso" },
      { id: "a3", text: "La diferencia entre la sustentación y el peso" },
      { id: "a4", text: "El producto de la sustentación por el peso" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "load-factor",
  },
  {
    id: "q2",
    text: "¿Cuál es el valor del factor de carga en vuelo recto y nivelado?",
    answers: [
      { id: "a1", text: "0" },
      { id: "a2", text: "1" },
      { id: "a3", text: "Mayor que 1" },
      { id: "a4", text: "Menor que 1" },
    ],
    correctAnswers: ["a2"],
    multipleCorrect: false,
    category: "load-factor",
  },
  {
    id: "q3",
    text: "¿Cómo se relaciona la velocidad de pérdida en maniobra (Vm) con la velocidad en vuelo recto y nivelado (Vs) para determinar el factor de carga?",
    answers: [
      { id: "a1", text: "n = Vm / Vs" },
      { id: "a2", text: "n = (Vm / Vs)²" },
      { id: "a3", text: "n = Vs / Vm" },
      { id: "a4", text: "n = (Vs / Vm)²" },
    ],
    correctAnswers: ["a2"],
    multipleCorrect: false,
    category: "load-factor",
  },
  {
    id: "q4",
    text: "Cuando la aeronave realiza una maniobra, la velocidad de pérdida en maniobra (Vm) difiere de Vs. Esto implica que:",
    answers: [
      {
        id: "a1",
        text: "La velocidad de pérdida en maniobra es distinta a la de vuelo recto y nivelado",
      },
      {
        id: "a2",
        text: "Se genera una sustentación diferente a la del equilibrio",
      },
      {
        id: "a3",
        text: "El avión mantiene la misma sustentación que en vuelo recto",
      },
      {
        id: "a4",
        text: "No se modifica la relación entre sustentación y peso",
      },
    ],
    correctAnswers: ["a1", "a2"],
    multipleCorrect: true,
    category: "load-factor",
  },
  {
    id: "q5",
    text: "En un viraje nivelado, ¿cómo se expresa la sustentación en función del ángulo de inclinación lateral (ϕ)?",
    answers: [
      { id: "a1", text: "L = W · cos(ϕ)" },
      { id: "a2", text: "L = W / cos(ϕ)" },
      { id: "a3", text: "L = W · sin(ϕ)" },
      { id: "a4", text: "L = W / sin(ϕ)" },
    ],
    correctAnswers: ["a2"],
    multipleCorrect: false,
    category: "load-factor",
  },
  {
    id: "q6",
    text: "¿Cómo se expresa el factor de carga (n) durante un viraje en función del ángulo de inclinación lateral (ϕ)?",
    answers: [
      { id: "a1", text: "n = cos(ϕ)" },
      { id: "a2", text: "n = 1/cos(ϕ)" },
      { id: "a3", text: "n = sin(ϕ)" },
      { id: "a4", text: "n = 1/sin(ϕ)" },
    ],
    correctAnswers: ["a2"],
    multipleCorrect: false,
    category: "load-factor",
  },
  {
    id: "q7",
    text: "Durante una maniobra, ¿qué efecto tiene modificar la sustentación en relación al peso del avión?",
    answers: [
      { id: "a1", text: "Se altera el factor de carga" },
      { id: "a2", text: "Se mantiene el equilibrio perfecto" },
      { id: "a3", text: "La sustentación no influye en la trayectoria" },
      {
        id: "a4",
        text: "La sustentación disminuye sin afectar el factor de carga",
      },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "load-factor",
  },
  {
    id: "q8",
    text: "¿Qué relación tiene el factor de carga con la velocidad, en términos de esfuerzo estructural?",
    answers: [
      {
        id: "a1",
        text: "Los esfuerzos son proporcionales al factor de carga",
      },
      {
        id: "a2",
        text: "Los esfuerzos son proporcionales al cuadrado de la velocidad",
      },
      {
        id: "a3",
        text: "Los esfuerzos son proporcionales al producto del factor de carga por el cuadrado de la velocidad",
      },
      { id: "a4", text: "Los esfuerzos son independientes de la velocidad" },
    ],
    correctAnswers: ["a3"],
    multipleCorrect: false,
    category: "load-factor",
  },
  {
    id: "q9",
    text: "¿Por qué es fundamental el diagrama V-n en la certificación de una aeronave?",
    answers: [
      {
        id: "a1",
        text: "Porque representa la combinación de esfuerzos debidos al factor de carga y a la velocidad",
      },
      {
        id: "a2",
        text: "Porque permite establecer los límites estructurales que debe soportar la aeronave",
      },
      {
        id: "a3",
        text: "Porque muestra la relación entre el ángulo de ataque y la sustentación",
      },
      {
        id: "a4",
        text: "Porque se utiliza para calcular el consumo de combustible",
      },
    ],
    correctAnswers: ["a1", "a2"],
    multipleCorrect: true,
    category: "load-factor",
  },
  {
    id: "q10",
    text: "¿Qué implica que, durante una maniobra, la aeronave deba generar una sustentación igual a n veces su peso?",
    answers: [
      {
        id: "a1",
        text: "Que la estructura del avión debe soportar mayores esfuerzos",
      },
      {
        id: "a2",
        text: "Que el valor de n aumenta conforme se incrementa la velocidad",
      },
      {
        id: "a3",
        text: "Que la sustentación en maniobra se basa en la velocidad Vm",
      },
      {
        id: "a4",
        text: "Que el equilibrio se mantiene sin cambios en la trayectoria",
      },
    ],
    correctAnswers: ["a1", "a2", "a3"],
    multipleCorrect: true,
    category: "load-factor",
  },
];
