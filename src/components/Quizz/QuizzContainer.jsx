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
  const handleSubmit = () => {
    setCurrentQuestionIndex((prev) => prev + 1);
  };
  return (
    currentQuestion && (
      <div className="container lg:flex lg:flex-row lg:justify-between lg:gap-6 pt-8">
        {/* Questions */}
        <div className="lg:flex-1 mb-10">
          <p className="text-blue-300 italic font-[14px] mb-4">
            Question {currentQuestionIndex + 1} of {questions.length}
          </p>
          <p className="text-[20px] mb-6">{currentQuestion.question}</p>
          <div className="bg-blue-850 w-full rounded-full h-[16px]"></div>
        </div>

        {/* Choix multiple */}
        <div className="lg:flex-1 text-[18px]">
          {currentQuestion.options.map((option) => (
            <div className="w-full">
              <input
                type="radio"
                name="options"
                id={option}
                className="appearance-none"
              />
              <label htmlFor={option} className="block">
                <span>A</span> {option}
              </label>
            </div>
          ))}
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    )
  );
};
export default QuizzContainer;
