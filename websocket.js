let socket;

export const connectWebSocket = (quizId, { onQuestion, onLeaderboard }) => {
  socket = new WebSocket(`wss://api-gateway/quiz/${quizId}`);

  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    if (data.type === 'question') onQuestion(data.payload);
    if (data.type === 'leaderboard') onLeaderboard(data.payload);
  };
};

export const sendAnswer = (answer) => {
  if (socket && socket.readyState === WebSocket.OPEN) {
    socket.send(JSON.stringify({ type: 'answer', payload: answer }));
  }
};
