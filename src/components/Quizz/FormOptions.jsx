const FormOptions = ({
  currentQuestion,
  setSelectedOption,
  questionNumber,
  handleSubmit,
  selectedOption,
  isSubmit,
  isChoiceSelected,
}) => {
  return (
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
              className={`question w-full bg-blue-850 mb-6 rounded-[12px] py-4 flex ring-2 ring-transparent  items-center justify-between px-3 peer-hover:ring-purple-600 
                    ${isSelected && "peer-checked:ring-purple-600"}
                    ${isSubmit && isRightAnswer && "green-border"}
                    ${isSubmit && !isRightAnswer && isSelected && "red-border"}
                    `}
            >
              <div className="flex items-center gap-5">
                <span
                  className={`letter-question text-gray-500 text-[28px] bg-grey-50 flex justify-center items-center rounded-xl w-[30px] h-[30px] p-6 
                    ${isSubmit && isRightAnswer && "green-color"}
                    ${isSubmit && !isRightAnswer && isSelected && "red-color"}
                   `}
                >
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
        className={`text-center inline-block w-full hover:bg-purple-600t bg-purple-600 md:rounded-3xl rounded-[12px] py-5 md:text-2xl text-[18px] cursor-pointer lg:transition-colors
          ${isSubmit && "btn-form"}
          `}
        disabled={isSubmit}
      >
        Submit Answer
      </button>
      {isChoiceSelected && (<div className="flex items-center justify-center mt-4 gap-1.5">
        <img src="/assets/images/icon-error.svg" alt="" />
        <p>Please select an answer</p>
        </div>)}
    </form>
  );
};
export default FormOptions;
