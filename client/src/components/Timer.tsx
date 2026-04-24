import { useEffect, useState } from 'react';
import { Clock } from 'lucide-react';

interface TimerProps {
  timeLeft: number;
  isTimeUp: boolean;
}

export function Timer({ timeLeft, isTimeUp }: TimerProps) {
  const [displayClass, setDisplayClass] = useState('');

  useEffect(() => {
    if (isTimeUp) {
      setDisplayClass('quiz-timer critical');
    } else if (timeLeft <= 5) {
      setDisplayClass('quiz-timer warning');
    } else {
      setDisplayClass('quiz-timer');
    }
  }, [timeLeft, isTimeUp]);

  return (
    <div className="flex items-center gap-2">
      <Clock className="w-5 h-5" />
      <span className={displayClass}>{timeLeft}s</span>
    </div>
  );
}
