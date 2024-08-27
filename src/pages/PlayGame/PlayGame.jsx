import { Link, useLocation } from "react-router-dom";
import MaskedText from "../../components/MaskedText/MaskedText";
import LetterButtons from "../../components/LetterButtons/LetterButtons";
import { useState, useEffect } from "react";
import HangMan from "../../components/HangMan/HangMan";

function PlayGame() {
  const [usedLetters, setUsedLetters] = useState([]);
  const [step, setStep] = useState(0);
  const [gameStatus, setGameStatus] = useState(null);

  const location = useLocation();
  const wordSelected = location.state?.wordSelected.toUpperCase() || ""; // Ensure it's an empty string if undefined

  useEffect(() => {
    // Check if the user has won
    if (wordSelected && !maskedTextContainsUnderscores()) {
      handleGameEnd("won");
    }
  }, [usedLetters]);

  const handleLetterClick = (letter) => {
    if (wordSelected.includes(letter)) {
      console.log("Correct");
    } else {
      console.log("Incorrect");
      setStep((prevStep) => prevStep + 1);
    }
    setUsedLetters((prevLetters) => [...prevLetters, letter]);
  };

  const handleGameEnd = (status) => {
    setGameStatus(status);
  };

  const maskedTextContainsUnderscores = () => {
    // Check if there are still underscores in the masked text
    const maskedText = wordSelected
      .split("")
      .map((char) => (usedLetters.includes(char) ? char : "_"))
      .join("");
    return maskedText.includes("_");
  };

  return (
    <>
      <div className="m-2">
        <Link
          to="/start"
          className="text-blue-600 hover:text-blue-700 border border-blue-900 rounded-xl px-2 py-1 float-end"
        >
          New Game
        </Link>
      </div>
      <div className="bg-slate-400 m-12">
        <h1 className="font-semibold text-center text-2xl">Play Game</h1>
        <MaskedText text={wordSelected} usedLetters={usedLetters} />

        <div className="flex justify-between items-center">
          <div className="basis-2/4">
            <LetterButtons
              text={wordSelected}
              usedLetters={usedLetters}
              onLetterClick={handleLetterClick}
              disabled={gameStatus !== null}
            />
          </div>

          <div className="basis-2/4 flex justify-center items-center">
            <HangMan step={step} onGameEnd={handleGameEnd} />
            {gameStatus === "lost" && (
              <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
                <p className="text-lg font-semibold">
                  Game over! You lost the game.
                </p>
              </div>
            )}

            {gameStatus === "won" && (
              <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                <p className="text-lg font-semibold">
                  Congratulations! You won the game!
                </p>
              </div>
            )}
          </div>
        </div>

        <hr />
      </div>
    </>
  );
}

export default PlayGame;
