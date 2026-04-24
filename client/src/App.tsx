import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "./contexts/ThemeContext";
import ErrorBoundary from "./components/ErrorBoundary";
import { useState } from "react";
import { categories, getQuestionsByCategory } from "@/lib/questions";
import { useQuiz } from "@/hooks/useQuiz";
import { CategorySelector } from "@/components/CategorySelector";
import { QuestionCard } from "@/components/QuestionCard";
import { Timer } from "@/components/Timer";
import { ResultsScreen } from "@/components/ResultsScreen";
import { Button } from "@/components/ui/button";

type GameState = "home" | "quiz" | "results";

function App() {
  const [gameState, setGameState] = useState<GameState>("home");
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>("");
  const [selectedCategoryName, setSelectedCategoryName] = useState<string>("");

  const quizQuestions = selectedCategoryId
    ? getQuestionsByCategory(selectedCategoryId)
    : [];

  const {
    state,
    selectAnswer,
    nextQuestion,
    reset,
    getCurrentQuestion,
    isQuizComplete,
    getResult,
  } = useQuiz(quizQuestions);

  const handleSelectCategory = (categoryId: string) => {
    const category = categories.find((c) => c.id === categoryId);
    if (category) {
      setSelectedCategoryId(categoryId);
      setSelectedCategoryName(category.name);
      setGameState("quiz");
      reset();
    }
  };

  const handleNextQuestion = () => {
    if (isQuizComplete) {
      setGameState("results");
    } else {
      nextQuestion();
    }
  };

  const handlePlayAgain = () => {
    reset();
    setGameState("quiz");
  };

  const handleBackHome = () => {
    setGameState("home");
    setSelectedCategoryId("");
    setSelectedCategoryName("");
    reset();
  };

  const currentQuestion = getCurrentQuestion();

  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />

          <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
            {/* Header */}
            {gameState === "quiz" && (
              <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-slate-200">
                <div className="container py-4 flex items-center justify-between">
                  <div>
                    <h1 className="text-2xl font-bold text-slate-900">Quiz Quest</h1>
                    <p className="text-sm text-slate-600">{selectedCategoryName}</p>
                  </div>
                  <Timer timeLeft={state.timeLeft} isTimeUp={state.isTimeUp} />
                </div>
              </div>
            )}

            {/* Main content */}
            <main className="container py-12">
              {gameState === "home" && (
                <CategorySelector
                  categories={categories}
                  onSelectCategory={handleSelectCategory}
                />
              )}

              {gameState === "quiz" && currentQuestion && (
                <div>
                  <QuestionCard
                    question={currentQuestion}
                    selectedAnswer={state.selectedAnswer}
                    answered={state.answered}
                    onSelectAnswer={selectAnswer}
                    currentIndex={state.currentQuestionIndex}
                    totalQuestions={quizQuestions.length}
                  />

                  {/* Next button */}
                  {state.answered && (
                    <div className="flex gap-4 justify-center mt-8">
                      <button
                        onClick={handleNextQuestion}
                        className="px-6 py-3 rounded-lg font-semibold transition-all duration-200 ease-out bg-emerald-500 text-white hover:bg-emerald-600 hover:shadow-lg hover:scale-105 active:scale-95"
                      >
                        {isQuizComplete ? "See Results" : "Next Question"}
                      </button>
                    </div>
                  )}
                </div>
              )}

              {gameState === "results" && (
                <ResultsScreen
                  result={getResult()}
                  categoryName={selectedCategoryName}
                  onPlayAgain={handlePlayAgain}
                  onBackHome={handleBackHome}
                />
              )}
            </main>
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
