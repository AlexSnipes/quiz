"use client";

import { useEffect, useState } from "react";
import QuestionCard from "./question-card";
import ProgressBar from "./progress-bar";
import Timer from "./timer";
import { mockQuestions } from "@/lib/data";

export default function QuizApp() {
  const defaultTime = 30;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<number, string[]>
  >({});
  const [isFinished, setIsFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(defaultTime); // 5 minutes in seconds

  const currentQuestion = mockQuestions[currentQuestionIndex];
  const totalQuestions = mockQuestions.length;

  useEffect(() => {
    if (timeLeft === 0) {
      handleNext();
      setTimeLeft(defaultTime);
    }
  }, [timeLeft]);

  const handleAnswerSelect = (answerId: string) => {
    const currentAnswers = selectedAnswers[currentQuestionIndex] || [];

    // If the answer is already selected, remove it (for multiple correct answers)
    if (currentAnswers.includes(answerId)) {
      setSelectedAnswers({
        ...selectedAnswers,
        [currentQuestionIndex]: currentAnswers.filter((id) => id !== answerId),
      });
    } else {
      // For single answer questions, replace the array
      // For multiple answers, add to the array
      setSelectedAnswers({
        ...selectedAnswers,
        [currentQuestionIndex]: currentQuestion.multipleCorrect
          ? [...currentAnswers, answerId]
          : [answerId],
      });
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setTimeLeft(defaultTime);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleFinish = () => {
    setIsFinished(true);
    // Aquí podrías calcular la puntuación y mostrar resultados
  };

  const handleExit = () => {
    if (confirm("¿Estás seguro de que deseas salir? Tu progreso se perderá.")) {
      // Reiniciar el quiz o redirigir a la página principal
      setCurrentQuestionIndex(0);
      setSelectedAnswers({});
      setIsFinished(false);
    }
  };

  if (isFinished) {
    return (
      <div className="w-full max-w-md mx-auto p-4">
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <h2 className="text-2xl font-bold mb-4">¡Quiz completado!</h2>
          <p className="mb-4">Gracias por completar el quiz.</p>
          <button
            onClick={() => {
              setCurrentQuestionIndex(0);
              setSelectedAnswers({});
              setIsFinished(false);
              setTimeLeft(defaultTime);
            }}
            className="bg-blue-600 text-white py-3 px-6 rounded-lg w-full mb-4"
          >
            Reiniciar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <div className="bg-blue-600 rounded-t-3xl p-6 text-white">
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-2xl font-bold">
            Question {currentQuestionIndex + 1}
          </h1>
          <Timer timeLeft={timeLeft} setTimeLeft={setTimeLeft} />
        </div>
        <ProgressBar
          currentQuestion={currentQuestionIndex}
          totalQuestions={totalQuestions}
        />
      </div>

      <QuestionCard
        handleNext={handleNext}
        question={currentQuestion}
        selectedAnswers={selectedAnswers[currentQuestionIndex] || []}
        onAnswerSelect={handleAnswerSelect}
      />

      <button
        onClick={handleNext}
        className="bg-blue-600 text-white py-3 px-6 rounded-lg w-full mb-4"
      >
        Next
      </button>

      <div className="flex justify-center">
        <button
          onClick={handleExit}
          className="bg-gray-200 text-gray-700 py-2 px-8 rounded-lg"
        >
          Exit
        </button>
      </div>
    </div>
  );
}
