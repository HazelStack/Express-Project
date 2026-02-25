import axios from "axios";

const API_BASE = "http://localhost:4000/api";

// ---------------- AUTH ----------------
export async function login(username, password) {
  const res = await axios.post(`${API_BASE}/login`, { username, password });
  return res.data;
}

export async function register(username, password, email) {
  const res = await axios.post(`${API_BASE}/register`, { username, password, email });
  return res.data;
}

// ---------------- QUESTIONS ----------------
export async function getQuestions() {
  const res = await axios.get(`${API_BASE}/questions`);
  return res.data;
}

export async function getQuestionWithAnswers(questionID) {
  const res = await axios.get(`${API_BASE}/questions/${questionID}`);
  return res.data;
}

export async function postAnswer(questionID, content, userID) {
  const res = await axios.post(`${API_BASE}/questions/${questionID}/answers`, { content, userID });
  return res.data;
}