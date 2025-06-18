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
  const progress = ((currentQuestionIndex + 1) * 100) / questions.length;
  const handleSubmit = () => {
    setCurrentQuestionIndex((prev) => prev + 1);
  };

  
  return (
    currentQuestion && (
      <div className="container lg:flex lg:flex-row lg:justify-between lg:gap-32 pt-8">
        {/* Questions */}
        <div className="lg:flex-1 mb-10">
          <p className="text-blue-300 italic text-[14px] md:text-[20px] mb-4">
            Question {currentQuestionIndex + 1} of {questions.length}
          </p>
          <p className="text-[20px] md:text-[36px] mb-6 lg:mb-[184px]">
            {currentQuestion.question}
          </p>
          {/* Progress Bar */}
          <div className="bg-blue-850 w-full rounded-full h-[16px] px-1 flex items-center">
            <div
              className={`bg-purple-600 h-[10px] rounded-full transition-all duration-300`}
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Choix multiple */}
        <div className="lg:flex-1 text-[18px]">
          {currentQuestion?.options?.map((option, i) => (
            <div
              className="w-full bg-blue-850 mb-4  rounded-[12px] px-4 py-7 flex "
              key={i}
            >
              <label htmlFor={option} className="block">
                <span>A</span> {option}
              </label>
              <input
                type="radio"
                name="options"
                id={option}
                className="appearance-none"
              />
            </div>
          ))}
          <button
            onClick={handleSubmit}
            className="text-center inline-block w-full hover:bg-purple-600t bg-purple-600 md:rounded-3xl rounded-[12px] py-5 lg:py-7 md:text-2xl text-[18px] cursor-pointer lg:transition-colors"
          >
            Submit Answer
          </button>
        </div>
      </div>
    )
  );
};
export default QuizzContainer;
