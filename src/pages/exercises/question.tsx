interface IQuiz {
  question: string
  answers: string[]
  correctAnswer: number
}

export const data: IQuiz[] = [
  {
    question: 'According to TIOBE Index for 2024, which programming language is ranked as the most popular?',
    answers: ['Python', 'Java', 'C++', 'JavaScript'],
    correctAnswer: 1
  },
  {
    question: 'What is the capital of France?',
    answers: ['Rome', 'Berlin', 'Madrid', 'Paris'],
    correctAnswer: 4
  },
  {
    question: 'Which planet is known as the Red Planet?',
    answers: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
    correctAnswer: 2
  },
  {
    question: 'What is the largest ocean on Earth?',
    answers: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
    correctAnswer: 4
  },
  {
    question: 'Who wrote "To Kill a Mockingbird"?',
    answers: ['Harper Lee', 'Mark Twain', 'Ernest Hemingway', 'F. Scott Fitzgerald'],
    correctAnswer: 1
  },
  {
    question: 'Which element has the chemical symbol "O"?',
    answers: ['Gold', 'Oxygen', 'Silver', 'Osmium'],
    correctAnswer: 2
  },
  {
    question: 'In which year did the Titanic sink?',
    answers: ['1912', '1914', '1916', '1918'],
    correctAnswer: 1
  }
]
