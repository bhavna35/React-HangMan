import Level1 from "../../assets/Images/img1.png";
import Level2 from "../../assets/Images/img2.png";
import Level3 from "../../assets/Images/img3.png";
import Level4 from "../../assets/Images/img4.png";
import Level5 from "../../assets/Images/img5.png";
import Level6 from "../../assets/Images/img6.png";
import Level7 from "../../assets/Images/img7.png";
import Level8 from "../../assets/Images/img8.png";
import { useEffect } from "react";
function HangMan({ step, onGameEnd }) {
  const images = [
    Level1,
    Level2,
    Level3,
    Level4,
    Level5,
    Level6,
    Level7,
    Level8,
  ];
  useEffect(() => {
    if (step >= images.length) {
      onGameEnd("lost"); // Notify the parent component that the user lost the game
    }
  }, [step]);
  return (
    <div className="w-[300px] h-[400px]">
      <img
        src={step >= images.length ? images[images.length - 1] : images[step]}
      />
    </div>
  );
}

export default HangMan;
