"use client";

import { useEffect, useMemo, useState } from "react";
import QuestionCard from "./question-card";
import ProgressBar from "./progress-bar";
import Timer from "./timer";
import { mockQuestions, Question } from "@/lib/data";
import Link from "next/link";
import { ROUTES } from "@/ROUTES";
import { useAtom } from "jotai/index";
import { selectedCategoryAtom } from "@/lib/atom";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import FinishedQuiz from "@/components/finished-quiz";
import { useToast } from "@/hooks/use-toast";

export default function QuizApp() {
  const defaultTime = 40;
  const { toast } = useToast();
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

  const filteredQuestions = mockQuestions.filter(
    (q) => q.category === selectedCategory,
  );
  const randomQuestions = useMemo(() => {
    const filteredQuestions = mockQuestions.filter(
      (q) => q.category === selectedCategory,
    );
    return filteredQuestions.sort(() => Math.random() - 0.5).slice(0, 10);
  }, [selectedCategory]);

  const totalQuestions = randomQuestions.length;
  const currentQuestion = randomQuestions[currentQuestionIndex];
  const previousQuestion = randomQuestions[currentQuestionIndex - 1];

  const [explanation, setExplanation] = useState<boolean>(true);

  useEffect(() => {}, []);

  useEffect(() => {
    if (!selectedCategory) {
      router.push(ROUTES.home);
    }
  }, [selectedCategory]);

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
    let isCorrect = false;
    if (
      selectedAnswers[currentQuestionIndex] &&
      selectedAnswers[currentQuestionIndex].length > 0
    ) {
      isCorrect =
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

    explanation &&
      toast({
        title: isCorrect ? "Correcto" : "Incorrecto",
        description:
          currentQuestion?.explanation && currentQuestion.explanation,
        variant: "default",
        className: isCorrect
          ? "bg-green-500 text-white"
          : "bg-red-500 text-white",
      });
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

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setAnsweredQuestions({});
    setIsFinished(false);
    setTimeLeft(defaultTime);
  };

  if (isFinished) {
    return (
      <FinishedQuiz
        resetQuiz={resetQuiz}
        answeredQuestionCorrectly={answeredQuestionCorrectly}
        totalQuestions={totalQuestions}
        currentQuestionIndex={currentQuestionIndex}
        answeredQuestions={answeredQuestions}
      />
    );
  }

  return (
    <>
      <div className="w-full sm:max-w-4xl max-w mx-auto p-4">
        <div className="bg-primary-500 rounded-t-3xl sm:p-5 p-3 text-white md:text-2xl sm:text-base text-xs">
          <div className="flex justify-between items-center mb-2">
            <a href={ROUTES.home} className="mr-4">
              <ChevronLeft size={24} />
            </a>
            <h1 className=" font-bold">
              Pregunta {currentQuestionIndex + 1} de {totalQuestions}
            </h1>
            <div className="flex items-center gap-2">
              <Timer timeLeft={timeLeft} setTimeLeft={setTimeLeft} />
            </div>
          </div>
          <ProgressBar
            currentQuestion={currentQuestionIndex}
            totalQuestions={totalQuestions}
            answeredQuestions={answeredQuestions}
          />
          <div className="items-center sm:text-base text-xs gap-2 flex mt-2 justify-end">
            <Checkbox
              checked={explanation}
              id="explanation"
              onClick={() => setExplanation(!explanation)}
            />
            <label htmlFor="explanation" className=" hover:cursor-pointer">
              Explicación
            </label>
          </div>
        </div>

        {currentQuestion && (
          <QuestionCard
            question={currentQuestion}
            selectedAnswers={selectedAnswers[currentQuestionIndex] || []}
            onAnswerSelect={handleAnswerSelect}
            getAnswerStatus={getAnswerStatus}
            isAnswerSelected={isAnswerSelected}
          />
        )}

        <button
          onClick={handleNext}
          className="bg-primary-500 hover:bg-primary-400 text-white py-2 px-6 rounded-lg w-full mb-4 sm:text-sm text-xs"
        >
          Siguiente
        </button>

        {/*
                     <div className="flex justify-center gap-2">
                    <Link
                      href={ROUTES.home}
                      className="bg-gray-200 hover:bg-gray-300 text-gray-700 py-1 px-8 rounded-lg w-full text-center sm:text-sm text-xs"
                    >
                      Volver
                    </Link>
                    <button
                      onClick={handleExit}
                      className="bg-gray-200 hover:bg-gray-300 text-gray-700 py-1 px-8 rounded-lg w-full sm:text-sm text-xs"
                    >
                      Salir
                    </button>
                  </div>
                    * */}
      </div>
    </>
  );
}
