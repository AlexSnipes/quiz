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
  const [timeLeft, setTimeLeft] = useState(defaultTime);
  const [answeredQuestions, setAnsweredQuestions] = useState<
    Record<number, "correct" | "incorrect" | "neutral">
  >({});

  const currentQuestion = mockQuestions[currentQuestionIndex];
  const totalQuestions = mockQuestions.length;

  useEffect(() => {
    if (timeLeft === 0) {
      handleNext();
      setTimeLeft(defaultTime);
    }
  }, [timeLeft]);

  const getAnswerStatus = (answerId: string) => {
    if (!selectedAnswers[currentQuestionIndex]) return "neutral";

    const isSelected = selectedAnswers[currentQuestionIndex].includes(answerId);
    if (!isSelected) return "neutral";

    const isCorrect = currentQuestion.correctAnswers.includes(answerId);
    return isCorrect ? "correct" : "incorrect";
  };

  const handleAnswerSelect = (answerId: string) => {
    const currentAnswers = selectedAnswers[currentQuestionIndex] || [];

    if (currentAnswers.includes(answerId)) {
      setSelectedAnswers({
        ...selectedAnswers,
        [currentQuestionIndex]: currentAnswers.filter((id) => id !== answerId),
      });
    } else {
      setSelectedAnswers({
        ...selectedAnswers,
        [currentQuestionIndex]: currentQuestion.multipleCorrect
          ? [...currentAnswers, answerId]
          : [answerId],
      });
    }
  };

  const handleNext = () => {
    if (
      selectedAnswers[currentQuestionIndex] &&
      selectedAnswers[currentQuestionIndex].length > 0
    ) {
      const isCorrect =
        selectedAnswers[currentQuestionIndex].every((answer) =>
          currentQuestion.correctAnswers.includes(answer),
        ) &&
        currentQuestion.correctAnswers.length ===
          selectedAnswers[currentQuestionIndex].length;

      setAnsweredQuestions((prev) => ({
        ...prev,
        [currentQuestionIndex]: isCorrect ? "correct" : "incorrect",
      }));
    } else {
      setAnsweredQuestions((prev) => ({
        ...prev,
        [currentQuestionIndex]: "incorrect",
      }));
    }

    if (currentQuestionIndex < totalQuestions - 1) {
      setTimeLeft(defaultTime);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleExit = () => {
    if (confirm("¿Estás seguro de que deseas salir? Tu progreso se perderá.")) {
      setCurrentQuestionIndex(0);
      setSelectedAnswers({});
      setAnsweredQuestions({});
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
              setAnsweredQuestions({});
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
  const isAnswerSelected = (answerId: string) => {
    return (selectedAnswers[currentQuestionIndex] || []).includes(answerId);
  };

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <div className="bg-blue-600 rounded-t-3xl p-6 text-white">
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-2xl font-bold">
            Pregunta {currentQuestionIndex + 1}
          </h1>
          <Timer timeLeft={timeLeft} setTimeLeft={setTimeLeft} />
        </div>
        <ProgressBar
          currentQuestion={currentQuestionIndex}
          totalQuestions={totalQuestions}
          answeredQuestions={answeredQuestions}
        />
      </div>

      <QuestionCard
        question={currentQuestion}
        selectedAnswers={selectedAnswers[currentQuestionIndex] || []}
        onAnswerSelect={handleAnswerSelect}
        getAnswerStatus={getAnswerStatus} // ✅ Aquí lo pasamos bien
        isAnswerSelected={isAnswerSelected}
      />

      <button
        onClick={handleNext}
        className="bg-blue-600 text-white py-3 px-6 rounded-lg w-full mb-4"
      >
        Siguiente
      </button>

      <div className="flex justify-center">
        <button
          onClick={handleExit}
          className="bg-gray-200 text-gray-700 py-2 px-8 rounded-lg"
        >
          Salir
        </button>
      </div>
    </div>
  );
}
