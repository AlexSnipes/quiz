"use client";

import { useState } from "react";
import PDFUploader from "@/components/pdf-uploader";
import CategorySelector from "@/components/category-selector";
import { type Question, mockQuestions } from "@/lib/data";

export default function AdminPage() {
  const [questions, setQuestions] = useState<Question[]>(mockQuestions);
  const [selectedCategory, setSelectedCategory] = useState("Todas");

  const handleQuestionsLoaded = (newQuestions: Question[]) => {
    setQuestions((prev) => [...prev, ...newQuestions]);
  };

  // Filtrar preguntas por categoría
  const filteredQuestions =
    selectedCategory === "Todas"
      ? questions
      : questions.filter((q) => q.category === selectedCategory);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Panel de Administración</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <PDFUploader onQuestionsLoaded={handleQuestionsLoaded} />

          <div className="mt-6 bg-white rounded-lg shadow-md p-4">
            <CategorySelector
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold mb-4">
              Preguntas ({filteredQuestions.length})
            </h2>

            <div className="space-y-4">
              {filteredQuestions.map((question, questionIndex) => (
                <div key={questionIndex} className="border rounded-lg p-4">
                  <p className="font-medium mb-2">{question.text}</p>
                  <div className="pl-4 space-y-1">
                    {question.answers.map((answer, index) => (
                      <div key={index} className="flex items-center">
                        <span
                          className={`w-4 h-4 mr-2 inline-block rounded-full ${
                            question.correctAnswers.includes(answer.id)
                              ? "bg-green-500"
                              : "bg-gray-300"
                          }`}
                        ></span>
                        <span>{answer.text}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-2 text-xs text-gray-500">
                    <span className="bg-gray-200 px-2 py-1 rounded">
                      {question.category}
                    </span>
                    {question.multipleCorrect && (
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded ml-2">
                        Múltiples respuestas
                      </span>
                    )}
                  </div>
                </div>
              ))}

              {filteredQuestions.length === 0 && (
                <p className="text-gray-500 text-center py-4">
                  No hay preguntas en esta categoría
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
