// client/src/App.jsx
import React, { useState } from "react";
import Login from "./components/Login";
import QuestionList from "./components/QuestionList";
import QuestionDetail from "./components/QuestionDetail";

function App() {
  const [user, setUser] = useState(null);                // Logged-in user
  const [selectedQuestionID, setSelectedQuestionID] = useState(null); // Selected question

  // Show login page if not logged in
  if (!user) {
    return <Login onLogin={setUser} />;
  }

  return (
    <div style={{ display: "flex", minHeight: "100vh", padding: "2rem", gap: "2rem" }}>
      {/* Left panel: Question List */}
      <div style={{ flex: 1, borderRight: "1px solid #ccc", paddingRight: "1rem" }}>
        <h2>Welcome, {user.username}!</h2>
        <QuestionList onSelectQuestion={setSelectedQuestionID} />
      </div>

      {/* Right panel: Question Detail */}
      <div style={{ flex: 2, paddingLeft: "1rem" }}>
        {selectedQuestionID ? (
          <QuestionDetail questionID={selectedQuestionID} userID={user.userID} />
        ) : (
          <p>Select a question from the list to view details and answers.</p>
        )}
      </div>
    </div>
  );
}

export default App;