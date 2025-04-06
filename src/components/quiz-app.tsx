"use client";

import { useEffect, useState } from "react";
import QuestionCard from "./question-card";
import ProgressBar from "./progress-bar";
import Timer from "./timer";
import { mockQuestions } from "@/lib/data";
import Link from "next/link";
import { ROUTES } from "@/ROUTES";
import { useAtom } from "jotai/index";
import { selectedCategoryAtom } from "@/lib/atom";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";

export default function QuizApp() {
  const defaultTime = 30;
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<number, string[]>
  >({});
  const [isFinished, setIsFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(defaultTime);
  const [answeredQuestions, setAnsweredQuestions] = useState<
    Record<number, "correct" | "incorrect" | "neutral">
  >({});
  const [selectedCategory, setSelectedCategory] = useAtom(selectedCategoryAtom);

  if (!selectedCategory) {
    return router.push(ROUTES.home);
  }

  useEffect(() => {
    if (!selectedCategory) {
      router.push(ROUTES.home);
    }
  }, []);

  const filteredQuestions = mockQuestions.filter(
    (q) => q.category === selectedCategory,
  );

  const currentQuestion = filteredQuestions[currentQuestionIndex];
  const totalQuestions = filteredQuestions.length;

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

  const isAnswerSelected = (answerId: string) => {
    return (selectedAnswers[currentQuestionIndex] || []).includes(answerId);
  };

  const answeredQuestionCorrectly = Object.values(answeredQuestions).filter(
    (status) => status === "correct",
  ).length;

  if (isFinished) {
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
              onClick={() => {
                setCurrentQuestionIndex(0);
                setSelectedAnswers({});
                setAnsweredQuestions({});
                setIsFinished(false);
                setTimeLeft(defaultTime);
              }}
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

  return (
    <div className="w-full sm:max-w-4xl max-w mx-auto p-4">
      <div className="bg-primary-500 rounded-t-3xl p-6 text-white">
        <div className="flex justify-between items-center mb-2">
          <a href={ROUTES.home} className="mr-4">
            <ChevronLeft size={24} />
          </a>
          <h1 className=" sm:text-2xl text-base font-bold">
            Pregunta {currentQuestionIndex + 1} de {totalQuestions}
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
        getAnswerStatus={getAnswerStatus}
        isAnswerSelected={isAnswerSelected}
      />

      <button
        onClick={handleNext}
        className="bg-primary-500 hover:bg-primary-400 text-white py-3 px-6 rounded-lg w-full mb-4 sm:text-base text-sm"
      >
        Siguiente
      </button>

      <div className="flex justify-center gap-2">
        <Link
          href={ROUTES.home}
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-8 rounded-lg w-full text-center sm:text-base text-sm"
        >
          Volver
        </Link>
        <button
          onClick={handleExit}
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-8 rounded-lg w-full sm:text-base text-sm"
        >
          Salir
        </button>
      </div>
    </div>
  );
}
