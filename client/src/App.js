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
  const [selectedCategory, setSelectedCategory] = useState(null); 
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
        setSelectedCategory(null);
        setSelectedQuestionID(null);
      }}
      onHome={() => {
        setSelectedCategory(null);
        setSelectedQuestionID(null);
      }}
    >
      {!selectedCategory ? (
        <Categories onSelectCategory={(id, name) => setSelectedCategory({ id, name })} />
      ) : !selectedQuestionID ? (
        <QuestionList
          categoryID={selectedCategory.id}
          categoryName={selectedCategory.name} 
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