import React, { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import QuestionList from "./components/QuestionList";
import QuestionDetail from "./components/QuestionDetail";

function App() {
  const [user, setUser] = useState(null);
  const [showRegister, setShowRegister] = useState(false);
  const [selectedQuestionID, setSelectedQuestionID] = useState(null);

  if (!user) {
    return showRegister ? (
      <Register
        onRegister={(newUser) => {
          setUser(newUser); // auto-login
          setShowRegister(false);
        }}
        onSwitchToLogin={() => setShowRegister(false)}
      />
    ) : (
      <Login
        onLogin={setUser}
        onSwitchToRegister={() => setShowRegister(true)}
      />
    );
  }

  return (
    <div style={{ display: "flex", gap: "2rem" }}>
      <div style={{ flex: 1 }}>
        <h3>Welcome, {user.username}</h3>
        <button onClick={() => setUser(null)}>Logout</button>
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