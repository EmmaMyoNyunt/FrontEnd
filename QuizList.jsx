import { useEffect, useState } from 'react';
import axios from '../../services/api';

export default function QuizList() {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    axios.get('/api/qms/quizzes').then(res => setQuizzes(res.data));
  }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Existing Quizzes</h2>
      <ul>
        {quizzes.map((quiz) => (
          <li key={quiz.id}>{quiz.title}</li>
        ))}
      </ul>
    </div>
  );
}
