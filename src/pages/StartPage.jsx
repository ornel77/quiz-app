import StartContainer from "../components/Starting/StartContainer";
import WelcomeHeader from "../components/Starting/WelcomeHeader";

const StartPage = () => {
  return (
    <div className="">
      <WelcomeHeader />
      <div className="md:py-34">
        <StartContainer />
      </div>
    </div>
  );
};
export default StartPage;
