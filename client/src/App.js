import { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Categories from "./components/Categories";
import QuestionList from "./components/QuestionList";
import QuestionDetail from "./components/QuestionDetail";

function App() {
  const [user, setUser] = useState(null);
  const [showRegister, setShowRegister] = useState(false);
  const [selectedCategoryID, setSelectedCategoryID] = useState(null);
  const [selectedQuestionID, setSelectedQuestionID] = useState(null);

  if (!user) {
    return showRegister ? (
      <Register
        onRegister={(newUser) => {
          setUser(newUser); 
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
    <div style={{ padding: "1rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h3>Welcome, {user.username}!</h3>
        <button
          onClick={() => {
            setUser(null);
            setSelectedCategoryID(null);
            setSelectedQuestionID(null);
          }}
        >
          Logout
        </button>
      </div>

      <div style={{ marginTop: "1rem" }}>
        {!selectedCategoryID ? (
          <Categories onSelectCategory={setSelectedCategoryID} />
        ) : !selectedQuestionID ? (
          <QuestionList
            categoryID={selectedCategoryID}
            onSelectQuestion={setSelectedQuestionID}
          />
        ) : (
          <QuestionDetail
            questionID={selectedQuestionID}
            userID={user.userID}
          />
        )}
      </div>

      {selectedQuestionID && (
        <button onClick={() => setSelectedQuestionID(null)} style={{ marginTop: "1rem" }}>
          Back to Questions
        </button>
      )}
      {!selectedQuestionID && selectedCategoryID && (
        <button onClick={() => setSelectedCategoryID(null)} style={{ marginTop: "1rem" }}>
          Back to Categories
        </button>
      )}
    </div>
  );
}

export default App;