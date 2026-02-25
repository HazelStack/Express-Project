import axios from "axios";

const API_BASE = "http://localhost:4000/api";

export const getQuestions = () => axios.get(`${API_BASE}/questions`);
export const getQuestionById = (id) => axios.get(`${API_BASE}/questions/${id}`);
export const postAnswer = (questionID, content, userID) =>
  axios.post(`${API_BASE}/questions/${questionID}/answers`, { content, userID });