import React, { useEffect, useState } from "react";
import { getQuestions } from "../api";

export default function QuestionList({ onSelectQuestion }) {
  const [questions, setQuestions] = useState([]); // ✅ start as empty array
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const data = await getQuestions();
        setQuestions(data);
      } catch (err) {
        console.error("Error fetching questions:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchQuestions();
  }, []);

  if (loading) return <p>Loading questions...</p>;

  return (
    <div>
      <h2>Questions</h2>
      {questions.length === 0 ? (
        <p>No questions found.</p>
      ) : (
        <ul>
          {questions.map((q) => (
            <li key={q.questionID}>
              <button onClick={() => onSelectQuestion(q.questionID)}>
                {q.title}
              </button>
              <p>
                Asked by {q.username} | Category: {q.category}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}