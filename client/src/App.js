import React, { useState } from "react";
import Login from "./components/Login";
import QuestionList from "./components/QuestionList";
import QuestionDetail from "./components/QuestionDetail";

function App() {
  const [user, setUser] = useState(null);
  const [selectedQuestionID, setSelectedQuestionID] = useState(null);

  const handleLogout = () => {
    setUser(null);
    setSelectedQuestionID(null);
  };

  if (!user) {
    return <Login onLogin={setUser} />;
  }

  return (
    <div style={{ padding: "1rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3>Welcome, {user.username}!</h3>
        <button onClick={handleLogout}>Logout</button>
      </div>

      <div style={{ display: "flex", gap: "2rem", marginTop: "1rem" }}>
        <div style={{ flex: 1 }}>
          <QuestionList onSelectQuestion={setSelectedQuestionID} />
        </div>

        <div style={{ flex: 2 }}>
          {selectedQuestionID ? (
            <QuestionDetail
              questionID={selectedQuestionID}
              userID={user.userID}
            />
          ) : (
            <p>Select a question to view details</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;