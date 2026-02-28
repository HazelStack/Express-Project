import { useState } from "react";
import { postAnswer } from "../api";
import "../styles/Dashboard.css"; 

export default function AnswerForm({ questionID, onAnswerAdded, userID }) {
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!content) return;

    try {
      await postAnswer(questionID, content, userID);
      setContent("");
      onAnswerAdded();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form className="answer-form" onSubmit={handleSubmit}>
      <textarea
        className="answer-input"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write your answer here..."
        rows={3}
        required
      />
      <button type="submit" className="answer-btn">
        Submit Answer
      </button>
    </form>
  );
}