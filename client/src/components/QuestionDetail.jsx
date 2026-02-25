//Show single question + answers + form
import React, { useEffect, useState } from "react";
import { getQuestionById } from "../api";
import AnswerForm from "./AnswerForm";

export default function QuestionDetail({ questionID }) {
  const [question, setQuestion] = useState(null);
  const [answers, setAnswers] = useState([]);

  const fetchData = () => {
    getQuestionById(questionID)
      .then(res => {
        setQuestion(res.data.question);
        setAnswers(res.data.answers);
      })
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchData();
  }, [questionID]);

  if (!question) return <div>Loading...</div>;

  return (
    <div>
      <h2>{question.title}</h2>
      <p>Category: {question.category}</p>
      <p>Asked by: {question.username}</p>

      <h3>Answers</h3>
      {answers.length === 0 ? <p>No answers yet</p> : null}
      <ul>
        {answers.map(a => (
          <li key={a.answerID}>
            {a.content} — <i>{a.username}</i>
          </li>
        ))}
      </ul>

      <AnswerForm questionID={questionID} onAnswerAdded={fetchData} />
    </div>
  );
}