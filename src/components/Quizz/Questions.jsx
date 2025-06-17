const Questions = ({question, index, total}) => {
  return (
    <div className="lg:flex-1">
      <p className="text-blue-300 italic font-[14px]">
        Question {index + 1} of {total}
      </p>
      <p className="font-[120px]">
        {question.question}
      </p>
      <div className="bg-blue-850 w-full rounded-full h-[16px]">

      </div>
    </div>
  )
}
export default Questions