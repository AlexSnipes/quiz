interface ProgressBarProps {
  currentQuestion: number;
  totalQuestions: number;
  answeredQuestions: Record<number, "correct" | "incorrect" | "neutral">;
}

export default function ProgressBar({
  currentQuestion,
  totalQuestions,
  answeredQuestions,
}: ProgressBarProps) {
  return (
    <div className="flex h-2 w-full rounded-full overflow-hidden">
      {Array.from({ length: totalQuestions }, (_, i) => {
        let colorClass = "bg-gray-300";

        if (i === currentQuestion) {
          colorClass = "bg-gray-500";
        } else if (answeredQuestions[i] === "correct") {
          colorClass = "bg-green-500";
        } else if (answeredQuestions[i] === "incorrect") {
          colorClass = "bg-red-500";
        }

        return <div key={i} className={`${colorClass} flex-1`} />;
      })}
    </div>
  );
}
