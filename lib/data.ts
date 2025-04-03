export interface Answer {
  id: string
  text: string
}

export interface Question {
  id: string
  text: string
  answers: Answer[]
  correctAnswers: string[] // Array de IDs de respuestas correctas
  multipleCorrect: boolean // Indica si la pregunta puede tener múltiples respuestas correctas
  category: string
}

// Datos de ejemplo para la aplicación
export const mockQuestions: Question[] = [
  {
    id: "q1",
    text: "In Computer terminology 'CAD' is stands for",
    answers: [
      { id: "a1", text: "Computer Aided Design" },
      { id: "a2", text: "Computer and Design" },
      { id: "a3", text: "Computer and Device" },
      { id: "a4", text: "Computer Algorithm in Design" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "Informática",
  },
  {
    id: "q2",
    text: "¿Cuáles de los siguientes son lenguajes de programación?",
    answers: [
      { id: "a1", text: "HTML" },
      { id: "a2", text: "Python" },
      { id: "a3", text: "JavaScript" },
      { id: "a4", text: "CSS" },
    ],
    correctAnswers: ["a2", "a3"],
    multipleCorrect: true,
    category: "Programación",
  },
  {
    id: "q3",
    text: "¿Qué significa HTTP?",
    answers: [
      { id: "a1", text: "HyperText Transfer Protocol" },
      { id: "a2", text: "High Tech Transfer Protocol" },
      { id: "a3", text: "HyperText Technical Process" },
      { id: "a4", text: "Home Tool Transfer Protocol" },
    ],
    correctAnswers: ["a1"],
    multipleCorrect: false,
    category: "Redes",
  },
  {
    id: "q4",
    text: "¿Cuáles de estos son sistemas operativos?",
    answers: [
      { id: "a1", text: "Windows" },
      { id: "a2", text: "Excel" },
      { id: "a3", text: "Linux" },
      { id: "a4", text: "macOS" },
    ],
    correctAnswers: ["a1", "a3", "a4"],
    multipleCorrect: true,
    category: "Sistemas Operativos",
  },
  {
    id: "q5",
    text: "¿Qué componentes son esenciales en una computadora?",
    answers: [
      { id: "a1", text: "CPU" },
      { id: "a2", text: "RAM" },
      { id: "a3", text: "Disco duro" },
      { id: "a4", text: "Impresora" },
    ],
    correctAnswers: ["a1", "a2", "a3"],
    multipleCorrect: true,
    category: "Hardware",
  },
]

// Función para cargar preguntas desde un PDF (simulada)
export async function loadQuestionsFromPDF(pdfUrl: string): Promise<Question[]> {
  // Esta función simula la carga de preguntas desde un PDF
  // En una implementación real, utilizarías una biblioteca como pdf.js
  console.log(`Cargando preguntas desde: ${pdfUrl}`)

  // Simulamos un retraso de red
  await new Promise((resolve) => setTimeout(resolve, 1500))

  // Devolvemos las preguntas de ejemplo
  return mockQuestions
}

// Categorías disponibles
export const categories = ["Todas", "Informática", "Programación", "Redes", "Sistemas Operativos", "Hardware"]

