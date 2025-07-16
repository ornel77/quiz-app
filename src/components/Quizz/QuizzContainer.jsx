import { useEffect, useState } from "react";
import useTopicStore from "../../store/useTopicStore";
import { fetchQuiz } from "../../utils/fetchQuiz";
import Questions from "./Questions";
import FormOptions from "./FormOptions";
import { useNavigate } from "react-router-dom";
import useScoreStore from "../../store/useScoreStore";

const QuizzContainer = () => {
  const { topic } = useTopicStore();
  const {incrementScore, score} = useScoreStore()
  const [quizzes, setQuizzes] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [isCorrect, setIsCorrect] = useState();
  const [isSubmit, setIsSubmit] = useState();

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

  if (!quizzes?.questions) return <p>Chargement...</p>;

  const questions = quizzes.questions;
  const currentQuestion = questions[currentQuestionIndex];
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);
    const isAnswerCorrect = selectedOption === currentQuestion.answer;
    setIsCorrect(isAnswerCorrect);
    setTimeout(() => {
      if (isAnswerCorrect) {
        incrementScore()
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
        <Questions
          questions={questions}
          currentQuestion={currentQuestion}
          currentQuestionIndex={currentQuestionIndex}
        />

        {/* Choix multiple */}

        <FormOptions
          currentQuestion={currentQuestion}
          setSelectedOption={setSelectedOption}
          questionNumber={questionNumber}
          handleSubmit={handleSubmit}
          selectedOption={selectedOption}
          isSubmit={isSubmit}
        />
      </div>
    )
  );
};
export default QuizzContainer;
