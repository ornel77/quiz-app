import Header from "../components/Common/Header";
import QuizzContainer from "../components/Quizz/QuizzContainer";

const QuizzPage = () => {
  return (
    <div className="pb-7">
      <Header />
      <div className="md:py-12">
        <QuizzContainer />
      </div>
    </div>
  );
};
export default QuizzPage;
