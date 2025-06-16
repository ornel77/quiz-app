import { useEffect, useState } from "react";
import useTopicStore from "../../store/useTopicStore";
import { fetchQuiz } from "../../utils/fetchQuiz";

const QuizzContainer = () => {
  const { topic } = useTopicStore();
  const [quizzes, setQuizzes] = useState({});

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchQuiz();
        const quizForTopic = data.quizzes.find(q => q.title == topic)
        setQuizzes(quizForTopic);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [topic]);

  const questions = quizzes?.questions
  console.log(questions)
  return (
    questions?.map(q => (
      <div className="container">
        {q.question}
      </div>
    ))
  )
};
export default QuizzContainer;
