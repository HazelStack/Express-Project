import { useState, useEffect } from "react";
import { getQuestionWithAnswers } from "../api";
import AnswerForm from "./AnswerForm";
import "../styles/Dashboard.css"; 

export default function QuestionDetail({ questionID, userID }) {
  const [question, setQuestion] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!questionID) return;

    async function fetchData() {
      setLoading(true);
      try {
        const data = await getQuestionWithAnswers(questionID);
        setQuestion(data);
      } catch (err) {
        console.error("Error fetching question details:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [questionID]);

  const handleAnswerAdded = async () => {
    try {
      const data = await getQuestionWithAnswers(questionID);
      setQuestion(data);
    } catch (err) {
      console.error("Error refreshing answers:", err);
    }
  };

  if (loading) return <p>Loading question...</p>;
  if (!question) return <p>Question not found.</p>;

  return (
    <div className="category-page">
      <div className="question-card">
        <h2 className="question-title">{question.title}</h2>
        <p className="question-user">Asked by: {question.username}</p>
      </div>

      <h3 style={{ marginTop: "2rem", textAlign: "center", color: "#2f5d50" }}>
        Answers
      </h3>

      {question.answers && question.answers.length > 0 ? (
        <div className="answers">
          {question.answers.map((ans) => (
            <div key={ans.answerID} className="answer-card">
              <p>{ans.content}</p>
              <div className="answer-user">— {ans.username}</div>
            </div>
          ))}
        </div>
      ) : (
        <p style={{ textAlign: "center", marginTop: "1rem" }}>
          No answers yet. Be the first to answer!
        </p>
      )}

      <div style={{ marginTop: "2rem" }}>
        <AnswerForm
          questionID={questionID}
          userID={userID}
          onAnswerAdded={handleAnswerAdded}
        />
      </div>
    </div>
  );
}