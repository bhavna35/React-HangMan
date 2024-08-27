import { Route, Routes } from "react-router-dom";
import PlayGame from "./pages/PlayGame/PlayGame";
import StartGame from "./pages/StartGame/StartGame";

function App() {
  return (
    <>
      <div className="m-auto bg-slate-400 text-center font-bold p-5">
        HangMan Game
      </div>
      <Routes>
        <Route path="/play" element={<PlayGame />} />
        <Route path="/start" element={<StartGame />} />
        <Route path="*" element={<div> not found </div>} />
      </Routes>
    </>
  );
}
export default App;
