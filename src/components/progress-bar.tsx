interface ProgressBarProps {
  currentQuestion: number
  totalQuestions: number
}

export default function ProgressBar({ currentQuestion, totalQuestions }: ProgressBarProps) {
  // Crear un array de colores para la barra de progreso
  const colors = [
    "bg-green-500",
    "bg-green-400",
    "bg-green-300",
    "bg-red-400",
    "bg-red-500",
    "bg-blue-500",
    "bg-blue-400",
    "bg-red-400",
    "bg-red-500",
    "bg-green-500",
    "bg-green-400",
    "bg-green-300",
  ]

  // Crear segmentos para la barra de progreso
  const segments = Array.from({ length: totalQuestions }, (_, i) => {
    const colorIndex = i % colors.length
    return {
      completed: i <= currentQuestion,
      color: colors[colorIndex],
    }
  })

  return (
    <div className="flex h-2 w-full rounded-full overflow-hidden">
      {segments.map((segment, index) => (
        <div key={index} className={`${segment.color} ${segment.completed ? "opacity-100" : "opacity-30"} flex-1`} />
      ))}
    </div>
  )
}

