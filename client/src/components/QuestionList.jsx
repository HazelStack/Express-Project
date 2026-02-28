import { useEffect, useState } from "react";
import { getQuestionsByCategory } from "../api";
import "../styles/Dashboard.css"; 

export default function QuestionList({ categoryID, onSelectQuestion }) {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    if (!categoryID) return;
    getQuestionsByCategory(categoryID).then(setQuestions);
  }, [categoryID]);

  return (
    <div className="category-page">
      <h2 className="question-title">🌱 Questions</h2>

      {questions.length === 0 ? (
        <p style={{ textAlign: "center" }}>No questions in this category.</p>
      ) : (
        <div className="question-list">
          {questions.map((q) => (
            <div key={q.questionID} className="question-card">
              <div className="question-user">Category: {q.category}</div>
              <button
                className="btn btn-outline-success w-100"
                onClick={() => onSelectQuestion(q.questionID)}
              >
                {q.title}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}