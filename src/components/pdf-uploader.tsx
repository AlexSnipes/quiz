"use client"

import type React from "react"

import { useState } from "react"
import { parsePDFToQuestions, uploadPDF } from "@/lib/pdf-loader"
import type { Question } from "@/lib/data"

interface PDFUploaderProps {
  onQuestionsLoaded: (questions: Question[]) => void
}

export default function PDFUploader({ onQuestionsLoaded }: PDFUploaderProps) {
  const [isUploading, setIsUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [error, setError] = useState<string | null>(null)

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Verificar que sea un PDF
    if (file.type !== "application/pdf") {
      setError("Por favor, sube un archivo PDF")
      return
    }

    try {
      setIsUploading(true)
      setError(null)

      // Simulamos progreso de carga
      const progressInterval = setInterval(() => {
        setUploadProgress((prev) => {
          if (prev >= 90) {
            clearInterval(progressInterval)
            return 90
          }
          return prev + 10
        })
      }, 300)

      // Subir el PDF (simulado)
      await uploadPDF(file)

      // Procesar el PDF para extraer preguntas
      const questions = await parsePDFToQuestions(file)

      clearInterval(progressInterval)
      setUploadProgress(100)

      // Notificar al componente padre sobre las preguntas cargadas
      onQuestionsLoaded(questions)

      // Resetear después de completar
      setTimeout(() => {
        setIsUploading(false)
        setUploadProgress(0)
      }, 1000)
    } catch (err) {
      setError("Error al procesar el archivo. Inténtalo de nuevo.")
      setIsUploading(false)
      setUploadProgress(0)
    }
  }

  return (
    <div className="w-full p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Subir PDF con preguntas</h2>

      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
        <input
          type="file"
          accept=".pdf"
          onChange={handleFileChange}
          className="hidden"
          id="pdf-upload"
          disabled={isUploading}
        />

        <label
          htmlFor="pdf-upload"
          className={`block cursor-pointer ${isUploading ? "opacity-50" : "hover:bg-gray-50"}`}
        >
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <path
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4h-8m-12 0H8m12 0a4 4 0 01-4-4v-4m32 0v-4a4 4 0 00-4-4H12"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="mt-2 block text-sm font-medium text-gray-700">
            {isUploading ? "Subiendo..." : "Haz clic para seleccionar un PDF"}
          </span>
        </label>

        {isUploading && (
          <div className="mt-4">
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
                style={{ width: `${uploadProgress}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-500 mt-1">{uploadProgress}% completado</p>
          </div>
        )}

        {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
      </div>

      <p className="mt-3 text-xs text-gray-500">
        Sube un archivo PDF con preguntas y respuestas. El sistema extraerá automáticamente las preguntas.
      </p>
    </div>
  )
}

