import { useState, useCallback, useEffect } from 'react';
import { Question } from '@/lib/questions';

export interface QuizState {
  currentQuestionIndex: number;
  score: number;
  selectedAnswer: number | null;
  answered: boolean;
  timeLeft: number;
  isTimeUp: boolean;
}

export interface QuizResult {
  totalQuestions: number;
  correctAnswers: number;
  percentage: number;
  timeSpent: number;
}

const QUESTION_TIME = 15; // seconds per question

export function useQuiz(questions: Question[]) {
  const [state, setState] = useState<QuizState>({
    currentQuestionIndex: 0,
    score: 0,
    selectedAnswer: null,
    answered: false,
    timeLeft: QUESTION_TIME,
    isTimeUp: false,
  });

  const [startTime] = useState(Date.now());

  // Timer effect
  useEffect(() => {
    if (state.answered || state.isTimeUp || state.currentQuestionIndex >= questions.length) {
      return;
    }

    const timer = setInterval(() => {
      setState((prev) => {
        if (prev.timeLeft <= 1) {
          return {
            ...prev,
            timeLeft: 0,
            isTimeUp: true,
            answered: true,
          };
        }
        return {
          ...prev,
          timeLeft: prev.timeLeft - 1,
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [state.answered, state.isTimeUp, state.currentQuestionIndex, questions.length]);

  const selectAnswer = useCallback((answerIndex: number) => {
    setState((prev) => {
      if (prev.answered) return prev;

      const currentQuestion = questions[prev.currentQuestionIndex];
      const isCorrect = answerIndex === currentQuestion.correctAnswer;

      return {
        ...prev,
        selectedAnswer: answerIndex,
        answered: true,
        score: isCorrect ? prev.score + 1 : prev.score,
      };
    });
  }, [questions]);

  const nextQuestion = useCallback(() => {
    setState((prev) => {
      if (prev.currentQuestionIndex >= questions.length - 1) {
        return prev;
      }

      return {
        currentQuestionIndex: prev.currentQuestionIndex + 1,
        score: prev.score,
        selectedAnswer: null,
        answered: false,
        timeLeft: QUESTION_TIME,
        isTimeUp: false,
      };
    });
  }, [questions.length]);

  const reset = useCallback(() => {
    setState({
      currentQuestionIndex: 0,
      score: 0,
      selectedAnswer: null,
      answered: false,
      timeLeft: QUESTION_TIME,
      isTimeUp: false,
    });
  }, []);

  const getCurrentQuestion = useCallback((): Question | null => {
    return questions[state.currentQuestionIndex] || null;
  }, [questions, state.currentQuestionIndex]);

  const isQuizComplete = state.currentQuestionIndex >= questions.length - 1 && state.answered;

  const getResult = useCallback((): QuizResult => {
    const timeSpent = Math.floor((Date.now() - startTime) / 1000);
    return {
      totalQuestions: questions.length,
      correctAnswers: state.score,
      percentage: Math.round((state.score / questions.length) * 100),
      timeSpent,
    };
  }, [state.score, questions.length, startTime]);

  return {
    state,
    selectAnswer,
    nextQuestion,
    reset,
    getCurrentQuestion,
    isQuizComplete,
    getResult,
  };
}
