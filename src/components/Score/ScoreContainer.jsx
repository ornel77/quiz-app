import { useNavigate } from "react-router-dom";
import useScoreStore from "../../store/useScoreStore";
import useTopicStore from "../../store/useTopicStore";
import { topicStyles } from "../../utils/topicStyles";

const ScoreContainer = () => {
  const navigate = useNavigate();
  const { score, resetScore } = useScoreStore();
  const { topic } = useTopicStore();

  const playAgain = () => {
    resetScore();
    navigate("/");
  };

  const topicStyle = topicStyles[topic] ?? {};
  return (
    <div className="container lg:flex lg:flex-row lg:justify-between lg:gap-32 pt-8">
      <section className="lg:flex-1 text-[40px] md:text-6xl">
        <p className="font-light">Quiz completed</p>
        <p className="font-medium">You scored...</p>
      </section>

      <section className="lg:flex-1 text-[18px] md:text-2xl ">
        <div className="w-full flex flex-col items-center bg-blue-850 rounded-xl p-8">
          <div className="flex items-center rounded-2xl gap-4">
            <img
              src={topicStyle.img}
              alt=""
              className={`size-10 p-1.5 ${topicStyle.color} rounded-[8px]`}
            />
            <p className="text-[18px]">{topic}</p>
          </div>
          <p className="mt-4 font-medium text-[88px] md:text-[144px]"> {score} </p>
          <p className="text-blue-300">out of 10</p>
        </div>
        <button
          onClick={playAgain}
          className="text-center inline-block w-full hover:bg-purple-600t bg-purple-600 md:rounded-3xl rounded-[12px] py-5 md:text-2xl text-[18px] cursor-pointer lg:transition-colors mt-4 font-medium"
        >
          Play Again
        </button>
      </section>
    </div>
  );
};
export default ScoreContainer;
