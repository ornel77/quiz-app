import { useEffect, useState } from "react";
import useTopicStore from "../../store/useTopicStore";
import { fetchQuiz } from "../../utils/fetchQuiz";
import Questions from "./Questions";
import FormOptions from "./FormOptions";

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
  return (
    questions?.map((q, i) => (
      <div className="container lg:flex-row lg:justify-between lg:gap-6 flexc">
        <Questions question = {q} index={i} total={questions.length}/>
        <FormOptions choices={q.options} answer={q.answer} />
        <hr />
      </div>
    ))
  )
};
export default QuizzContainer;
