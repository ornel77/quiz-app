import { useEffect, useState } from "react";
import useTopicStore from "../../store/useTopicStore";
import { fetchQuiz } from "../../utils/fetchQuiz";
import Questions from "./Questions";
import FormOptions from "./FormOptions";
import { useNavigate } from "react-router-dom";

const QuizzContainer = () => {
  const { topic } = useTopicStore();
  const [quizzes, setQuizzes] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [isCorrect, setIsCorrect] = useState();
  const [isSubmit, setIsSubmit] = useState();
  const [score, setScore] = useState(0);

  const navigate = useNavigate();

  const questionNumber = {
    0: "A",
    1: "B",
    2: "C",
    3: "D",
  };

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
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);
    const isAnswerCorrect = selectedOption === currentQuestion.answer;
    setIsCorrect(isAnswerCorrect);
    setTimeout(() => {
      if (isAnswerCorrect) {
        setScore((prev) => prev + 1);
        console.log(isCorrect);
      }
      setSelectedOption("");

      if (currentQuestionIndex === questions.length - 1) {
        navigate("/score");
      } else {
        setCurrentQuestionIndex((prev) => prev + 1);
      }

      setIsCorrect(null);
      setIsSubmit(false);
    }, 2000);
  };

  return (
    currentQuestion && (
      <div className="container lg:flex lg:flex-row lg:justify-between lg:gap-32 pt-8">
        {/* Questions */}
        <section className="lg:flex-1 mb-10">
          <p className="text-blue-300 italic text-[14px] md:text-[20px] mb-4">
            Question {currentQuestionIndex + 1} of {questions.length}
          </p>
          <p className="text-[20px] md:text-[36px] mb-6 lg:mb-[120px]">
            {currentQuestion.question}
          </p>
          {/* Progress Bar */}
          <div className="bg-blue-850 w-full rounded-full h-[16px] px-1 flex items-center">
            <div
              className={`bg-purple-600 h-[10px] rounded-full transition-all duration-300`}
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </section>

        {/* Choix multiple */}

        <form className="lg:flex-1 text-[18px] flex flex-col">
          {currentQuestion?.options?.map((option, i) => {
            const isRightAnswer = option === currentQuestion.answer;
            const isSelected = option === selectedOption;
            return (
              <label htmlFor={option} className="flex items-center" key={i}>
                <input
                  type="radio"
                  name="options"
                  id={option}
                  className="peer hidden"
                  value={option}
                  checked={selectedOption === option}
                  onChange={(e) => setSelectedOption(e.target.value)}
                />
                <div
                  className={`question w-full bg-blue-850 mb-6 rounded-[12px] py-4 flex ring-2 ring-transparent  items-center justify-between px-3 
                    ${isSelected && 'peer-checked:ring-purple-600'}
                    ${isSubmit && isRightAnswer && "green-border"}
                    ${isSubmit && !isRightAnswer && isSelected ? "red-border" : ""}
                    `}
                >
                  <div className="flex items-center gap-5">
                    <span className={`letter-question text-gray-500 text-[28px] bg-grey-50 flex justify-center items-center rounded-xl w-[30px] h-[30px] p-6 
                    ${isSubmit && isRightAnswer ? "green-color" : ""}
                    ${isSubmit && !isRightAnswer && isSelected ? "red-color" : ""}

                      `}>
                      {" "}
                      {questionNumber[i]}{" "}
                    </span>{" "}
                    <span className="text-[18px]">{option}</span>
                  </div>
                  <div className="flex flex-shrink-0 w-10 h-10 items-center justify-center ">
                    {isSubmit && isRightAnswer && (
                      <img
                        src="/assets/images/icon-correct.svg"
                        alt=""
                        className="w-8 h-8"
                      />
                    )}
                    {isSubmit && isSelected && !isRightAnswer && (
                      <img
                        src="/assets/images/icon-incorrect.svg"
                        alt=""
                        className="w-8 h-8"
                      />
                    )}
                  </div>
                </div>
              </label>
            );
          })}
          <button
            onClick={handleSubmit}
            className="text-center inline-block w-full hover:bg-purple-600t bg-purple-600 md:rounded-3xl rounded-[12px] py-5 md:text-2xl text-[18px] cursor-pointer lg:transition-colors"
          >
            Submit Answer
          </button>
        </form>
      </div>
    )
  );
};
export default QuizzContainer;
