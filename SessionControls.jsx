import axios from '../../services/api';

export default function SessionControls() {
  const startQuiz = async () => {
    await axios.post('/api/qms/start', { quizId: 'yourQuizId' });
  };

  const stopQuiz = async () => {
    await axios.post('/api/qms/stop', { quizId: 'yourQuizId' });
  };

  return (
    <div className="mt-4">
      <button onClick={startQuiz} className="btn mr-2">Start Quiz</button>
      <button onClick={stopQuiz} className="btn">Stop Quiz</button>
    </div>
  );
}
