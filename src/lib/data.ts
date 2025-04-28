import { mockMotoresQuestions } from "@/lib/motores";
import { mockReversoresQuestions } from "@/lib/reversores";
import { mockCombustionChamberQuestions } from "@/lib/combustion-chambers";
import { mockDiagramVnQuestions } from "@/lib/vn-diagram";
import { mockOttoCycleQuestions } from "@/lib/otto";
import { mockTurbochargerQuestions } from "@/lib/turbocharger";
import { mockEquilibriumQuestions } from "@/lib/equilibrium";
import { mockLoadFactorQuestions } from "@/lib/load-factor";
import { mockDiagramVn2Questions } from "@/lib/vn-diagram-2";
import { mockDiagramVn3Questions } from "@/lib/vn-diagram-3";
import { mockDiagramVn4Questions } from "@/lib/vn-diagram-4";
import { mockWindTunnelsQuestions } from "@/lib/wind-tunnels";
import { mockRadialEngineQuestions } from "@/lib/radial-engine";
import { mockCentrifugalCompressorQuestions } from "@/lib/centrifugal-compressor";
import { mockAnularQuestions } from "@/lib/combustion-chamber-anular";
import { mockTurbinesQuestions } from "@/lib/turbines";
import { mockPropellersQuestions } from "@/lib/propellers";
import { mockPropellers4Questions } from "@/lib/propellers-4";
import { mockPropellers3Questions } from "@/lib/propellers-3";
import { mockPropellers2Questions } from "@/lib/propellers-2";

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
  explanation?: string;
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
  ...mockDiagramVn2Questions,
  ...mockDiagramVn3Questions,
  ...mockDiagramVn4Questions,
  ...mockWindTunnelsQuestions,
  ...mockRadialEngineQuestions,
  ...mockCentrifugalCompressorQuestions,
  ...mockAnularQuestions,
  ...mockTurbinesQuestions,
  ...mockPropellersQuestions,
  ...mockPropellers2Questions,
  ...mockPropellers3Questions,
  ...mockPropellers4Questions,
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
