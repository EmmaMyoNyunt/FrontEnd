export default function Leaderboard({ scores }) {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-2">Leaderboard</h2>
      <ul>
        {scores.map((user, i) => (
          <li key={i}>{user.name}: {user.score}</li>
        ))}
      </ul>
    </div>
  );
}
