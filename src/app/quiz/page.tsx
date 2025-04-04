"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import QuizApp from "@/components/quiz-app";
import { useAtom } from "jotai/index";
import { selectedCategoryAtom } from "@/lib/atom";

export default function QuizPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, [router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      {/* @ts-ignore**/}
      <QuizApp />
    </main>
  );
}
