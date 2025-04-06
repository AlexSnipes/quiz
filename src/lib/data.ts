import { mockMotoresQuestions } from "@/lib/motores";
import { mockReversoresQuestions } from "@/lib/reversores";
import { mockCombustionChamberQuestions } from "@/lib/combustion-chambers";
import { mockDiagramVnQuestions } from "@/lib/vn-diagram";
import { mockOttoCycleQuestions } from "@/lib/otto";
import { mockTurbochargerQuestions } from "@/lib/turbocharger";
import { mockEquilibriumQuestions } from "@/lib/equilibrium";
import { mockLoadFactorQuestions } from "@/lib/load-factor";

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
  ...mockOttoCycleQuestions,
  ...mockTurbochargerQuestions,
  ...mockEquilibriumQuestions,
  ...mockLoadFactorQuestions,
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
