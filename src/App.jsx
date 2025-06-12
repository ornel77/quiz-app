import { Route, Routes } from "react-router-dom";
import StartPage from "./pages/StartPage";
import QuestionsPage from "./pages/QuestionsPage";
import ScorePage from "./pages/ScorePage";

function App() {
  return (
    <div className="background bg-blue-900  text-white font-rubik h-screen p-7 flex items-center">
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/questions" element={<QuestionsPage />} />
        <Route path="/score" element={<ScorePage />} />
      </Routes>
    </div>
  );
}

export default App;
