import { useState } from 'react';
import axios from '../../services/api';

export default function QuizForm() {
  const [title, setTitle] = useState('');
  const [questions, setQuestions] = useState([{ text: '', options: ['', '', '', ''], correct: 0 }]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/api/qms/quizzes', { title, questions });
    setTitle('');
    setQuestions([{ text: '', options: ['', '', '', ''], correct: 0 }]);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Quiz Title" className="input" />
      {questions.map((q, i) => (
        <div key={i}>
          <input value={q.text} onChange={(e) => {
            const updated = [...questions];
            updated[i].text = e.target.value;
            setQuestions(updated);
          }} placeholder="Question" className="input" />
          {q.options.map((opt, j) => (
            <input key={j} value={opt} onChange={(e) => {
              const updated = [...questions];
              updated[i].options[j] = e.target.value;
              setQuestions(updated);
            }} placeholder={`Option ${j + 1}`} className="input" />
          ))}
          <select value={q.correct} onChange={(e) => {
            const updated = [...questions];
            updated[i].correct = parseInt(e.target.value);
            setQuestions(updated);
          }}>
            {[0, 1, 2, 3].map((idx) => <option key={idx} value={idx}>Correct: Option {idx + 1}</option>)}
          </select>
        </div>
      ))}
      <button type="submit" className="btn">Create Quiz</button>
    </form>
  );
}
