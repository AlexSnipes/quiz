"use client";

import type { Question } from "@/lib/data";
import { CheckCircle, XCircle } from "lucide-react";

interface QuestionCardProps {
  question: Question;
  selectedAnswers: string[];
  onAnswerSelect: (answerId: string) => void;
  handleNext: () => void;
}

export default function QuestionCard({
  question,
  selectedAnswers,
  onAnswerSelect,
  handleNext,
}: QuestionCardProps) {
  const isAnswerSelected = (answerId: string) => {
    return selectedAnswers.includes(answerId);
  };

  const getAnswerStatus = (answerId: string) => {
    if (!isAnswerSelected(answerId)) return "neutral";

    const isCorrect = question.correctAnswers.includes(answerId);
    return isCorrect ? "correct" : "incorrect";
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-4">
      <h2 className="text-center text-lg font-medium mb-6">{question.text}</h2>

      <div className="space-y-3">
        {question.answers.map((answer) => {
          const status = getAnswerStatus(answer.id);

          return (
            <button
              key={answer.id}
              onClick={() => onAnswerSelect(answer.id)}
              className={`w-full text-left p-4 rounded-lg flex justify-between items-center transition-colors
                ${status === "neutral" && !isAnswerSelected(answer.id) ? "bg-gray-100 hover:bg-gray-200" : ""}
                ${status === "neutral" && isAnswerSelected(answer.id) ? "bg-gray-200" : ""}
                ${status === "correct" ? "bg-green-100 border border-green-500" : ""}
                ${status === "incorrect" ? "bg-red-100 border border-red-500" : ""}
              `}
            >
              <span
                className={`
                ${status === "correct" ? "text-green-600" : ""}
                ${status === "incorrect" ? "text-red-600" : ""}
              `}
              >
                {answer.text}
              </span>

              {status === "correct" && (
                <CheckCircle className="h-5 w-5 text-green-600" />
              )}

              {status === "incorrect" && (
                <XCircle className="h-5 w-5 text-red-600" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
