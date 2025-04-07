"use client";

import { useState, useEffect } from "react";
import type { Question } from "@/lib/data";
import Image from "@/lib/image";

interface QuestionCardProps {
  question: Question;
  selectedAnswers: string[];
  onAnswerSelect: (answerId: string) => void;
  getAnswerStatus: (answerId: string) => "neutral" | "correct" | "incorrect";
  isAnswerSelected: (answerId: string) => boolean;
}

// Función para mezclar un array (algoritmo Fisher-Yates)
const shuffleArray = <T,>(array: T[]): T[] => {
  return [...array].sort(() => Math.random() - 0.5);
};

export default function QuestionCard({
  question,
  onAnswerSelect,
  getAnswerStatus,
  isAnswerSelected,
}: QuestionCardProps) {
  const [shuffledAnswers, setShuffledAnswers] = useState(question.answers);

  // Mezclar respuestas solo en el cliente
  useEffect(() => {
    setShuffledAnswers(shuffleArray(question.answers));
  }, [question]);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-4 space-y-3">
      <h2 className="text-center sm:text-lg text-sm font-medium mb-6">
        {question.text}
      </h2>
      <div className="sm:flex">
        <div>
          {question.image && (
            <Image
              width={1000}
              height={1000}
              src={question.image}
              alt={question.text}
            />
          )}
        </div>
        <div className="space-y-3 sm:w-full">
          {shuffledAnswers.map((answer) => {
            const status = getAnswerStatus(answer.id);

            return (
              <button
                key={answer.id}
                onClick={() => onAnswerSelect(answer.id)}
                className={`hover:bg-primary-200 w-full text-left p-4 rounded-lg flex justify-between items-center transition-colors
                ${isAnswerSelected(answer.id) ? "bg-primary-300 " : "bg-gray-100"}
              `}
              >
                {/*
                ${status === "neutral" && !isAnswerSelected(answer.id) ? "bg-gray-100 hover:bg-gray-200" : ""}
                ${status === "neutral" && isAnswerSelected(answer.id) ? "bg-gray-200" : ""}
                ${status === "correct" ? "bg-green-100 border border-green-500" : ""}
                ${status === "incorrect" ? "bg-red-100 border border-red-500" : ""}

               <span
                   className={`
                ${status === "correct" ? "text-green-600" : ""}
                ${status === "incorrect" ? "text-red-600" : ""}`}

              >*/}
                <span className="md:text-base text-xs">{answer.text}</span>
                {/*
                                *
                              {status === "correct" && (
                                <CheckCircle className="h-5 w-5 text-green-600" />
                              )}

                              {status === "incorrect" && (
                                <XCircle className="h-5 w-5 text-red-600" />
                              )}
                                * **/}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
