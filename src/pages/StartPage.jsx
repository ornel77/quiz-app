import StartContainer from "../components/Starting/StartContainer";
import WelcomeHeader from "../components/Starting/WelcomeHeader";

const StartPage = () => {
  return (
    <div className="h-screen">
      <WelcomeHeader />
      <div className="md:py-42">
        <StartContainer />
      </div>
    </div>
  );
};
export default StartPage;
