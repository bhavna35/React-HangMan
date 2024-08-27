import { useNavigate } from "react-router-dom";
import TextInputFormContainer from "../../components/TextInputForm/TextInputFormContainer";

function StartGame() {
  const navigate = useNavigate();

  function handleSubmit(value) {
    navigate("/play", { state: { wordSelected: value } });
  }

  return (
    <div className="flex flex-col items-center justify-center bg-slate-500 w-1/2 mx-auto m-8 h-64">
      <h1 className="font-semibold text-2xl p-2 m-2 text-center">Start Game</h1>
      <TextInputFormContainer onSubmit={handleSubmit} />
    </div>
  );
}
export default StartGame;
