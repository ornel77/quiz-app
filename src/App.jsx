import { Route, Routes } from "react-router-dom";
import StartPage from "./pages/StartPage";
import QuizzPage from "./pages/QuizzPage";
import ScorePage from "./pages/ScorePage";

function App() {
  return (
    <div className="background bg-blue-900  text-white font-rubik min-h-screen px-7 md:px-0">
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/quizz/:id" element={<QuizzPage />} />
        <Route path="/score" element={<ScorePage />} />
      </Routes>
    </div>
  );
}

export default App;
