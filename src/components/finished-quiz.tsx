import ProgressBar from "@/components/progress-bar";
import Link from "next/link";
import { ROUTES } from "@/ROUTES";

export default function FinishedQuiz({
  answeredQuestionCorrectly,
  totalQuestions,
  currentQuestionIndex,
  answeredQuestions,
  resetQuiz,
}: {
  answeredQuestionCorrectly: number;
  totalQuestions: number;
  currentQuestionIndex: number;
  answeredQuestions: Record<number, "correct" | "incorrect" | "neutral">;
  resetQuiz: () => void;
}) {
  return (
    <div className="w-full max-w-md mx-auto p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 text-center">
        <h2 className="text-2xl font-bold mb-4">¡Quiz completado!</h2>

        <p className="mb-4">
          Preguntas contestadas correctamente {answeredQuestionCorrectly} de{" "}
          {totalQuestions}
        </p>
        <ProgressBar
          currentQuestion={currentQuestionIndex + 1}
          totalQuestions={totalQuestions}
          answeredQuestions={answeredQuestions}
        />
        <div className="flex  mb-4 mt-4 gap-2">
          <button
            onClick={resetQuiz}
            className="bg-primary-500 hover:bg-primary-400 text-white py-3 px-6 rounded-lg w-full"
          >
            Reiniciar
          </button>
          <Link
            href={ROUTES.home}
            className="hover:text-white bg-white hover:bg-primary-300 text-primary-500 border border-primary-500 py-3 px-6 rounded-lg w-full"
          >
            Volver
          </Link>
        </div>
      </div>
    </div>
  );
}
