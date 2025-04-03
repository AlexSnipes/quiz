import QuizApp from "@/components/quiz-app"
import "@/app/globals.css";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <QuizApp />
    </main>
  )
}

