import Header from "../components/Common/Header";
import ScoreContainer from "../components/Score/ScoreContainer";

const ScorePage = () => {
  return (
    <div className="h-screen">
      <Header />
      <div className="md:py-12">
        <ScoreContainer />
      </div>
    </div>
  );
};
export default ScorePage;
