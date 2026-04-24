import { Button } from '@/components/ui/button';
import { Award, RotateCcw, Home } from 'lucide-react';
import { QuizResult } from '@/hooks/useQuiz';

interface ResultsScreenProps {
  result: QuizResult;
  categoryName: string;
  onPlayAgain: () => void;
  onBackHome: () => void;
}

export function ResultsScreen({
  result,
  categoryName,
  onPlayAgain,
  onBackHome,
}: ResultsScreenProps) {
  const getPerformanceMessage = (percentage: number) => {
    if (percentage === 100) return 'Perfect Score! 🎉';
    if (percentage >= 80) return 'Excellent! 🌟';
    if (percentage >= 60) return 'Good Job! 👍';
    if (percentage >= 40) return 'Not Bad! 💪';
    return 'Keep Practicing! 📚';
  };

  const getPerformanceColor = (percentage: number) => {
    if (percentage >= 80) return 'text-emerald-600';
    if (percentage >= 60) return 'text-blue-600';
    if (percentage >= 40) return 'text-amber-600';
    return 'text-red-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
      {/* Results card */}
      <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 mb-8 text-center">
          {/* Icon */}
          <div className="mb-6">
            <Award className="w-16 h-16 mx-auto text-emerald-500" />
          </div>

          {/* Performance message */}
          <h2 className={`text-3xl font-bold mb-4 ${getPerformanceColor(result.percentage)}`}>
            {getPerformanceMessage(result.percentage)}
          </h2>

          {/* Category name */}
          <p className="text-slate-600 text-lg mb-8">{categoryName}</p>

          {/* Score display */}
          <div className="mb-8">
            <div className="text-5xl font-bold text-emerald-600 mb-2">
              {result.percentage}%
            </div>
            <p className="text-slate-600 text-lg">
              {result.correctAnswers} out of {result.totalQuestions} correct
            </p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-slate-50 rounded-lg p-4">
              <p className="text-slate-600 text-sm mb-1">Correct Answers</p>
              <p className="text-2xl font-bold text-emerald-600">{result.correctAnswers}</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-4">
              <p className="text-slate-600 text-sm mb-1">Time Spent</p>
              <p className="text-2xl font-bold text-slate-900">{result.timeSpent}s</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-4">
              <p className="text-slate-600 text-sm mb-1">Accuracy</p>
              <p className="text-2xl font-bold text-slate-900">{result.percentage}%</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-4">
              <p className="text-slate-600 text-sm mb-1">Questions</p>
              <p className="text-2xl font-bold text-slate-900">{result.totalQuestions}</p>
            </div>
          </div>

          {/* Performance bar */}
          <div className="mb-8">
            <div className="quiz-progress-bar">
              <div
                className="quiz-progress-fill"
                style={{
                  width: `${result.percentage}%`,
                }}
              />
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex gap-4">
          <button
            onClick={onPlayAgain}
            className="flex-1 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ease-out bg-emerald-500 text-white hover:bg-emerald-600 hover:shadow-lg hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-5 h-5" />
            Play Again
          </button>
          <button
            onClick={onBackHome}
            className="flex-1 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ease-out bg-slate-100 text-slate-900 hover:bg-slate-200 hover:shadow-md active:scale-95 flex items-center justify-center gap-2"
          >
            <Home className="w-5 h-5" />
            Back Home
          </button>
        </div>
      </div>
    </div>
  );
}
