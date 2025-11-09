import { useEffect, useState } from 'react';
import { connectWebSocket, sendAnswer } from '../services/websocket';
import QuestionDisplay from '../components/Participant/QuestionDisplay';
import Leaderboard from '../components/Participant/Leaderboard';

export default function JoinQuizPage({ quizId }) {
  const [question, setQuestion] = useState(null);
  const [leaderboard, setLeaderboard] = useState([]);
  const [showLeaderboard, setShowLeaderboard] = useState(false);

  useEffect(() => {
    connectWebSocket(quizId, {
      onQuestion: setQuestion,
      onLeaderboard: (data) => {
        setLeaderboard(data);
        setShowLeaderboard(true);
      }
    });
  }, [quizId]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Live Quiz</h1>
      {question && <QuestionDisplay question={question} onSubmit={sendAnswer} />}
      {showLeaderboard && <Leaderboard scores={leaderboard} />}
    </div>
  );
}
