import { Question } from '@/lib/questions';
import { Button } from '@/components/ui/button';
import { Check, X } from 'lucide-react';

interface QuestionCardProps {
  question: Question;
  selectedAnswer: number | null;
  answered: boolean;
  onSelectAnswer: (index: number) => void;
  currentIndex: number;
  totalQuestions: number;
}

export function QuestionCard({
  question,
  selectedAnswer,
  answered,
  onSelectAnswer,
  currentIndex,
  totalQuestions,
}: QuestionCardProps) {
  const getAnswerButtonClass = (index: number) => {
    const baseClass =
      'w-full p-4 rounded-lg border-2 text-left font-medium transition-all duration-200 ';

    if (!answered) {
      return (
        baseClass +
        'border-slate-200 hover:border-emerald-500 hover:bg-emerald-50 active:scale-95 cursor-pointer'
      );
    }

    if (index === question.correctAnswer) {
      return baseClass + 'border-emerald-500 bg-emerald-100 text-emerald-900 cursor-not-allowed';
    }

    if (index === selectedAnswer && index !== question.correctAnswer) {
      return baseClass + 'border-red-500 bg-red-100 text-red-900 cursor-not-allowed';
    }

    return baseClass + 'border-slate-200 bg-slate-50 text-slate-500 cursor-not-allowed';
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Progress indicator */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-slate-600">
            Question {currentIndex + 1} of {totalQuestions}
          </span>
          <span className="text-sm font-medium text-slate-600">
            {Math.round(((currentIndex + 1) / totalQuestions) * 100)}%
          </span>
        </div>
        <div className="quiz-progress-bar">
          <div
            className="quiz-progress-fill"
            style={{
              width: `${((currentIndex + 1) / totalQuestions) * 100}%`,
            }}
          />
        </div>
      </div>

      {/* Question card */}
      <div className="quiz-card mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-8">{question.question}</h2>

        {/* Answer options */}
        <div className="space-y-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => !answered && onSelectAnswer(index)}
              disabled={answered}
              className={getAnswerButtonClass(index)}
            >
              <div className="flex items-center justify-between">
                <span className="flex-1">{option}</span>
                {answered && index === question.correctAnswer && (
                  <Check className="w-5 h-5 text-emerald-600 ml-2 flex-shrink-0" />
                )}
                {answered && index === selectedAnswer && index !== question.correctAnswer && (
                  <X className="w-5 h-5 text-red-600 ml-2 flex-shrink-0" />
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Feedback message */}
        {answered && (
          <div className="mt-6 p-4 rounded-lg bg-slate-50">
            {selectedAnswer === question.correctAnswer ? (
              <p className="text-emerald-700 font-medium">✓ Correct answer!</p>
            ) : (
              <p className="text-red-700 font-medium">✗ Incorrect. The correct answer is: {question.options[question.correctAnswer]}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
