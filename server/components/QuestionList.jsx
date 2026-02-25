//List all questions
import React, { useEffect, useState } from "react";
import { getQuestions } from "../api";

export default function QuestionList({ onSelectQuestion }) {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    getQuestions()
      .then(res => setQuestions(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>All Questions</h2>
      <ul>
        {questions.map(q => (
          <li key={q.questionID}>
            <button onClick={() => onSelectQuestion(q.questionID)}>
              {q.title} ({q.category}) by {q.username}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}