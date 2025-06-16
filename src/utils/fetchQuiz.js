export const fetchQuiz = async () => {
  const res = await fetch("/data.json");
  if (!res.ok) {
    throw new Error(`Response Status: ${res.status}`);
  }

  const quizzes = await res.json();
  return quizzes;
};
