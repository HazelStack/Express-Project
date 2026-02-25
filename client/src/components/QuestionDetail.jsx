// client/src/components/QuestionDetail.jsx
import React, { useState, useEffect } from "react";
import { getQuestionWithAnswers } from "../api";
import AnswerForm from "./AnswerForm";

export default function QuestionDetail({ questionID, userID }) {
  const [question, setQuestion] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch question and answers whenever questionID changes
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
  }, [questionID]); // ✅ Only re-run when questionID changes

  // Refresh answers after posting
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
    <div>
      <h2>{question.title}</h2>
      <h3>Answers:</h3>
      {question.answers && question.answers.length > 0 ? (
        <ul>
          {question.answers.map((ans) => (
            <li key={ans.answerID}>
              <strong>{ans.username}:</strong> {ans.content}
            </li>
          ))}
        </ul>
      ) : (
        <p>No answers yet. Be the first to answer!</p>
      )}

      {/* Answer form */}
      <AnswerForm
        questionID={questionID}
        userID={userID}             // Pass logged-in user
        onAnswerAdded={handleAnswerAdded}
      />
    </div>
  );
}