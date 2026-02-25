//Form to submit a new answer
import React, { useState } from "react";
import { postAnswer } from "../api";
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
    <form onSubmit={handleSubmit}>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Your answer..."
        rows={3}
        required
      />
      <button type="submit">Submit Answer</button>
    </form>
  );
}