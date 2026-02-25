import React, { useState } from "react";
import QuestionList from "./components/QuestionList";
import QuestionDetail from "./components/QuestionDetail";

function App() {
  const [selectedQuestionID, setSelectedQuestionID] = useState(null);

  return (
    <div style={{ display: "flex", gap: "2rem" }}>
      <div style={{ flex: 1 }}>
        <QuestionList onSelectQuestion={setSelectedQuestionID} />
      </div>
      <div style={{ flex: 2 }}>
        {selectedQuestionID ? (
          <QuestionDetail questionID={selectedQuestionID} />
        ) : (
          <p>Select a question to view details</p>
        )}
      </div>
    </div>
  );
}

export default App;