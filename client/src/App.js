import { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Layout from "./components/Layout";
import Categories from "./components/Categories";
import QuestionList from "./components/QuestionList";
import QuestionDetail from "./components/QuestionDetail";
import "bootstrap/dist/css/bootstrap.min.css";

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
    <Layout
      user={user}
      onLogout={() => {
        setUser(null);
        setSelectedCategoryID(null);
        setSelectedQuestionID(null);
      }}
      onHome={() => {
        setSelectedCategoryID(null);
        setSelectedQuestionID(null);
      }}
    >
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
    </Layout>
  );
}

export default App;