const Questions = ({
  questions,
  currentQuestionIndex,
  currentQuestion,
}) => {
  const progress = ((currentQuestionIndex + 1) * 100) / questions.length;

  return (
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
  );
};
export default Questions;
