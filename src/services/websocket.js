let socket;

export const connectWebSocket = (quizId, { onQuestion, onLeaderboard }) => {
  socket = new WebSocket(`${import.meta.env.VITE_WS_BASE_URL}/quiz/${quizId}`);

  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    if (data.type === 'question') onQuestion(data.payload);
    if (data.type === 'leaderboard') onLeaderboard(data.payload);
  };
};

export const sendAnswer = (answer) => {
  if (socket?.readyState === WebSocket.OPEN) {
    socket.send(JSON.stringify({ type: 'answer', payload: answer }));
  }
};
