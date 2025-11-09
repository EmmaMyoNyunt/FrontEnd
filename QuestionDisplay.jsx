import { useState } from 'react';

export default function QuestionDisplay({ question, onSubmit }) {
  const [selected, setSelected] = useState(null);

  const handleSubmit = () => {
    if (selected !== null) {
      onSubmit({ questionId: question.id, answerIndex: selected });
      setSelected(null);
    }
  };

  return (
    <div className="mb-4">
      <h2 className="text-xl font-semibold">{question.text}</h2>
      <ul>
        {question.options.map((opt, i) => (
          <li key={i}>
            <label>
              <input type="radio" name="answer" value={i} checked={selected === i} onChange={() => setSelected(i)} />
              {opt}
            </label>
          </li>
        ))}
      </ul>
      <button onClick={handleSubmit} className="btn mt-2">Submit Answer</button>
    </div>
  );
}
