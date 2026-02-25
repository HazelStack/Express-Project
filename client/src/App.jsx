import React, { useState } from "react";
import Login from "./components/Login";
import QuestionList from "./components/QuestionList";
import QuestionDetail from "./components/QuestionDetail";

function App() {
  const [user, setUser] = useState(null);
  const [selectedQuestionID, setSelectedQuestionID] = useState(null);

  if (!user) {
    return <Login onLogin={setUser} />;
  }

  return (
    <div style={{ display: "flex", gap: "2rem" }}>
      <div style={{ flex: 1 }}>
        <h3>Welcome, {user.username}!</h3>
        <QuestionList onSelectQuestion={setSelectedQuestionID} />
      </div>
      <div style={{ flex: 2 }}>
        {selectedQuestionID ? (
          <QuestionDetail questionID={selectedQuestionID} userID={user.userID} />
        ) : (
          <p>Select a question to view details</p>
        )}
      </div>
    </div>
  );
}

export default App;