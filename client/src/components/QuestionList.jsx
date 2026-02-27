import { useEffect, useState } from "react";
import { getQuestionsByCategory } from "../api";

export default function QuestionList({ categoryID, onSelectQuestion }) {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    if (!categoryID) return;
    getQuestionsByCategory(categoryID).then(setQuestions);
  }, [categoryID]);

  return (
    <div>
      <h2>Questions</h2>
      {questions.length === 0 && <p>No questions in this category.</p>}
      <ul>
        {questions.map((q) => (
          <li key={q.questionID}>
            <button onClick={() => onSelectQuestion(q.questionID)}>
              {q.title} — <i>{q.category}</i>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}