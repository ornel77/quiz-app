import { useEffect, useState } from "react";
import useTopicStore from "../../store/useTopicStore";
import { fetchQuiz } from "../../utils/fetchQuiz";
import Questions from "./Questions";
import FormOptions from "./FormOptions";

const QuizzContainer = () => {
  const { topic } = useTopicStore();
  const [quizzes, setQuizzes] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchQuiz();
        const quizForTopic = data.quizzes.find((q) => q.title == topic);
        setQuizzes(quizForTopic);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [topic]);

  if (!quizzes.questions) return <p>Chargement...</p>;

  const questions = quizzes.questions;
  const currentQuestion = questions[currentQuestionIndex];
  return (
    currentQuestion && (
      <div className="container flex lg:flex-row lg:justify-between lg:gap-6">
        <div className="lg:flex-1">
          <p className="text-blue-300 italic font-[14px]">
            Question {currentQuestionIndex + 1} of {questions.length}
          </p>
          <p className="font-[120px]">{currentQuestion.question}</p>
          <div className="bg-blue-850 w-full rounded-full h-[16px]"></div>
        </div>
      </div>
    )
  );
};
export default QuizzContainer;
