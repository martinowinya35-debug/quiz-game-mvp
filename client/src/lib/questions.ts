export interface Question {
  id: string;
  category: string;
  question: string;
  options: string[];
  correctAnswer: number;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export const categories: Category[] = [
  {
    id: 'general',
    name: 'General Knowledge',
    description: 'Test your knowledge on diverse topics',
    icon: '💡',
  },
  {
    id: 'science',
    name: 'Science',
    description: 'Explore the wonders of science',
    icon: '🧪',
  },
  {
    id: 'history',
    name: 'History',
    description: 'Journey through historical events',
    icon: '📚',
  },
  {
    id: 'technology',
    name: 'Technology',
    description: 'Dive into the world of tech',
    icon: '💻',
  },
];

export const questions: Question[] = [
  // General Knowledge
  {
    id: 'gk1',
    category: 'general',
    question: 'What is the capital of France?',
    options: ['London', 'Berlin', 'Paris', 'Madrid'],
    correctAnswer: 2,
    difficulty: 'easy',
  },
  {
    id: 'gk2',
    category: 'general',
    question: 'Which planet is known as the Red Planet?',
    options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
    correctAnswer: 1,
    difficulty: 'easy',
  },
  {
    id: 'gk3',
    category: 'general',
    question: 'What is the largest ocean on Earth?',
    options: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
    correctAnswer: 3,
    difficulty: 'easy',
  },
  {
    id: 'gk4',
    category: 'general',
    question: 'Who painted the Mona Lisa?',
    options: ['Vincent van Gogh', 'Leonardo da Vinci', 'Pablo Picasso', 'Michelangelo'],
    correctAnswer: 1,
    difficulty: 'medium',
  },
  {
    id: 'gk5',
    category: 'general',
    question: 'What is the smallest country in the world by area?',
    options: ['Monaco', 'San Marino', 'Vatican City', 'Liechtenstein'],
    correctAnswer: 2,
    difficulty: 'medium',
  },
  {
    id: 'gk6',
    category: 'general',
    question: 'In what year did the Titanic sink?',
    options: ['1912', '1915', '1920', '1905'],
    correctAnswer: 0,
    difficulty: 'medium',
  },
  {
    id: 'gk7',
    category: 'general',
    question: 'What is the most spoken language in the world by native speakers?',
    options: ['English', 'Spanish', 'Mandarin Chinese', 'Hindi'],
    correctAnswer: 2,
    difficulty: 'hard',
  },
  {
    id: 'gk8',
    category: 'general',
    question: 'Which element has the chemical symbol "Au"?',
    options: ['Silver', 'Gold', 'Aluminum', 'Argon'],
    correctAnswer: 1,
    difficulty: 'medium',
  },
  {
    id: 'gk9',
    category: 'general',
    question: 'What is the currency of Japan?',
    options: ['Won', 'Yuan', 'Yen', 'Rupee'],
    correctAnswer: 2,
    difficulty: 'easy',
  },
  {
    id: 'gk10',
    category: 'general',
    question: 'How many strings does a standard violin have?',
    options: ['4', '5', '6', '8'],
    correctAnswer: 0,
    difficulty: 'medium',
  },

  // Science
  {
    id: 'sci1',
    category: 'science',
    question: 'What is the chemical formula for water?',
    options: ['H2O', 'CO2', 'O2', 'H2O2'],
    correctAnswer: 0,
    difficulty: 'easy',
  },
  {
    id: 'sci2',
    category: 'science',
    question: 'What is the speed of light in vacuum?',
    options: ['300,000 km/s', '150,000 km/s', '450,000 km/s', '100,000 km/s'],
    correctAnswer: 0,
    difficulty: 'medium',
  },
  {
    id: 'sci3',
    category: 'science',
    question: 'Which gas do plants absorb from the atmosphere?',
    options: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Hydrogen'],
    correctAnswer: 2,
    difficulty: 'easy',
  },
  {
    id: 'sci4',
    category: 'science',
    question: 'What is the powerhouse of the cell?',
    options: ['Nucleus', 'Mitochondria', 'Ribosome', 'Chloroplast'],
    correctAnswer: 1,
    difficulty: 'easy',
  },
  {
    id: 'sci5',
    category: 'science',
    question: 'What is the process by which plants make their own food?',
    options: ['Respiration', 'Photosynthesis', 'Fermentation', 'Digestion'],
    correctAnswer: 1,
    difficulty: 'medium',
  },
  {
    id: 'sci6',
    category: 'science',
    question: 'How many bones does an adult human have?',
    options: ['186', '206', '226', '246'],
    correctAnswer: 1,
    difficulty: 'medium',
  },
  {
    id: 'sci7',
    category: 'science',
    question: 'What is the most abundant element in the universe?',
    options: ['Helium', 'Hydrogen', 'Oxygen', 'Carbon'],
    correctAnswer: 1,
    difficulty: 'hard',
  },
  {
    id: 'sci8',
    category: 'science',
    question: 'What is the SI unit of force?',
    options: ['Joule', 'Newton', 'Watt', 'Pascal'],
    correctAnswer: 1,
    difficulty: 'hard',
  },
  {
    id: 'sci9',
    category: 'science',
    question: 'What is the pH of pure water at 25°C?',
    options: ['5', '6', '7', '8'],
    correctAnswer: 2,
    difficulty: 'medium',
  },
  {
    id: 'sci10',
    category: 'science',
    question: 'Which scientist formulated the theory of evolution?',
    options: ['Isaac Newton', 'Albert Einstein', 'Charles Darwin', 'Marie Curie'],
    correctAnswer: 2,
    difficulty: 'medium',
  },

  // History
  {
    id: 'hist1',
    category: 'history',
    question: 'In what year did World War II end?',
    options: ['1943', '1944', '1945', '1946'],
    correctAnswer: 2,
    difficulty: 'easy',
  },
  {
    id: 'hist2',
    category: 'history',
    question: 'Who was the first President of the United States?',
    options: ['Thomas Jefferson', 'George Washington', 'John Adams', 'Benjamin Franklin'],
    correctAnswer: 1,
    difficulty: 'easy',
  },
  {
    id: 'hist3',
    category: 'history',
    question: 'In what year did the American Declaration of Independence occur?',
    options: ['1774', '1775', '1776', '1777'],
    correctAnswer: 2,
    difficulty: 'easy',
  },
  {
    id: 'hist4',
    category: 'history',
    question: 'Which empire built the Great Wall of China?',
    options: ['Han Dynasty', 'Ming Dynasty', 'Tang Dynasty', 'Qin Dynasty'],
    correctAnswer: 1,
    difficulty: 'medium',
  },
  {
    id: 'hist5',
    category: 'history',
    question: 'In what year did the Berlin Wall fall?',
    options: ['1987', '1988', '1989', '1990'],
    correctAnswer: 2,
    difficulty: 'medium',
  },
  {
    id: 'hist6',
    category: 'history',
    question: 'Who was the first Emperor of Rome?',
    options: ['Julius Caesar', 'Augustus', 'Nero', 'Trajan'],
    correctAnswer: 1,
    difficulty: 'medium',
  },
  {
    id: 'hist7',
    category: 'history',
    question: 'In what year did the Magna Carta get signed?',
    options: ['1115', '1215', '1315', '1415'],
    correctAnswer: 1,
    difficulty: 'hard',
  },
  {
    id: 'hist8',
    category: 'history',
    question: 'Which ancient wonder of the world still stands today?',
    options: ['Colossus of Rhodes', 'Great Pyramid of Giza', 'Hanging Gardens of Babylon', 'Lighthouse of Alexandria'],
    correctAnswer: 1,
    difficulty: 'hard',
  },
  {
    id: 'hist9',
    category: 'history',
    question: 'In what year did the Renaissance begin in Italy?',
    options: ['12th century', '13th century', '14th century', '15th century'],
    correctAnswer: 2,
    difficulty: 'hard',
  },
  {
    id: 'hist10',
    category: 'history',
    question: 'Who wrote the Declaration of Independence?',
    options: ['Benjamin Franklin', 'Thomas Jefferson', 'John Adams', 'Samuel Adams'],
    correctAnswer: 1,
    difficulty: 'medium',
  },

  // Technology
  {
    id: 'tech1',
    category: 'technology',
    question: 'What does "HTTP" stand for?',
    options: ['Hyper Text Transfer Protocol', 'High Tech Transfer Process', 'Home Text Transfer Protocol', 'Hyper Transfer Text Protocol'],
    correctAnswer: 0,
    difficulty: 'easy',
  },
  {
    id: 'tech2',
    category: 'technology',
    question: 'Who is known as the founder of Microsoft?',
    options: ['Steve Jobs', 'Bill Gates', 'Mark Zuckerberg', 'Larry Page'],
    correctAnswer: 1,
    difficulty: 'easy',
  },
  {
    id: 'tech3',
    category: 'technology',
    question: 'What does "AI" stand for?',
    options: ['Automated Intelligence', 'Artificial Intelligence', 'Advanced Integration', 'Automated Integration'],
    correctAnswer: 1,
    difficulty: 'easy',
  },
  {
    id: 'tech4',
    category: 'technology',
    question: 'In what year was the first iPhone released?',
    options: ['2005', '2006', '2007', '2008'],
    correctAnswer: 2,
    difficulty: 'medium',
  },
  {
    id: 'tech5',
    category: 'technology',
    question: 'What does "GPU" stand for?',
    options: ['Graphics Processing Unit', 'General Purpose Unit', 'Graphics Program Utility', 'General Processing Unit'],
    correctAnswer: 0,
    difficulty: 'medium',
  },
  {
    id: 'tech6',
    category: 'technology',
    question: 'Who created the World Wide Web?',
    options: ['Bill Gates', 'Steve Jobs', 'Tim Berners-Lee', 'Linus Torvalds'],
    correctAnswer: 2,
    difficulty: 'medium',
  },
  {
    id: 'tech7',
    category: 'technology',
    question: 'What does "API" stand for?',
    options: ['Application Programming Interface', 'Advanced Programming Integration', 'Application Process Integration', 'Automated Programming Interface'],
    correctAnswer: 0,
    difficulty: 'hard',
  },
  {
    id: 'tech8',
    category: 'technology',
    question: 'In what year was Python programming language created?',
    options: ['1989', '1991', '1993', '1995'],
    correctAnswer: 1,
    difficulty: 'hard',
  },
  {
    id: 'tech9',
    category: 'technology',
    question: 'What does "SQL" stand for?',
    options: ['Structured Query Language', 'Simple Query Language', 'Standard Query Language', 'Structured Question Language'],
    correctAnswer: 0,
    difficulty: 'medium',
  },
  {
    id: 'tech10',
    category: 'technology',
    question: 'Who is known as the founder of Apple?',
    options: ['Bill Gates', 'Steve Jobs', 'Mark Zuckerberg', 'Elon Musk'],
    correctAnswer: 1,
    difficulty: 'easy',
  },
];

export function getQuestionsByCategory(categoryId: string): Question[] {
  return questions.filter((q) => q.category === categoryId).slice(0, 10);
}
