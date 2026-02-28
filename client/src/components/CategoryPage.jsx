import { useEffect, useState } from "react";
import { getQuestionsByCategory } from "../api";
import "../styles/Dashboard.css";

export default function CategoryPage({ categoryID, categoryName }) {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    if (categoryID) {
      getQuestionsByCategory(categoryID).then(setQuestions);
    }
  }, [categoryID]);

  return (
    <div className="category-page">
      <h2 className="category-title">{categoryName}</h2>

      <div className="question-list">
        {questions.map((q) => (
          <div key={q.questionID} className="question-card">
            <h4>{q.title}</h4>
            <p className="question-user">
              Asked by: <strong>{q.username}</strong>
            </p>

            {q.answers.length > 0 && (
              <div className="answers">
                {q.answers.map((a) => (
                  <div key={a.answerID} className="answer-card">
                    <p>{a.content}</p>
                    <p className="answer-user">— {a.username}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}