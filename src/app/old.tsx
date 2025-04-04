import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md mx-auto text-center">
        <h1 className="text-3xl font-bold mb-6">Trivia Quiz App</h1>
        <div className="space-y-4">
          <Link
            href="/categories"
            className="block w-full bg-primary-500 text-white py-4 rounded-lg font-medium text-lg hover:bg-primary-600  transition-colors"
          >
            Start New Quiz
          </Link>
          <Link
            href="/admin"
            className="block w-full bg-white text-gray-800 py-4 rounded-lg font-medium text-lg border border-gray-300 hover:bg-gray-50 transition-colors"
          >
            Admin Panel
          </Link>
        </div>
      </div>
    </main>
  );
}
