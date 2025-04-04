import { mockMotoresQuestions } from "@/lib/motores";
import { mockReversoresQuestions } from "@/lib/reversores";
import { mockCombustionChamberQuestions } from "@/lib/combustion-chambers";
import { mockDiagramVnQuestions } from "@/lib/vn-diagram";

export interface Answer {
  id: string;
  text: string;
}

export interface Question {
  id: string;
  text: string;
  answers: Answer[];
  correctAnswers: string[];
  multipleCorrect: boolean;
  category: string;
  image?: string;
}

// Datos de ejemplo para la aplicación
export const mockQuestions: Question[] = [
  ...mockReversoresQuestions,
  ...mockMotoresQuestions,
  ...mockCombustionChamberQuestions,
  ...mockDiagramVnQuestions,
];

export async function loadQuestionsFromPDF(
  pdfUrl: string,
): Promise<Question[]> {
  console.log(`Cargando preguntas desde: ${pdfUrl}`);

  // Simulamos un retraso de red
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // Devolvemos las preguntas de ejemplo
  return mockQuestions;
}

export const categories = [
  "Todas",
  "Cámaras de Combustión",
  "Motores Alternativos",
  "Motores Cohete",
  "Flujo Sónico",
  "Hélices",
  "Diagram V-n",
  "Motores a Reacción",
  "Reversores",
  "Sistema Solar",
];
