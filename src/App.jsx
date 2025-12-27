import Disclaimer from "./pages/Disclaimer";
import Game from "./pages/Game";
import Home from "./pages/Home";
import ProfileSetup from "./pages/ProfileSetup";
import Result from "./pages/Result";
import Why from "./pages/Why";
import { useState } from "react";

const App = () => {
  const [step, setStep] = useState("disclaimer");
  const [userName, setUserName] = useState("");
  const [score, setScore] = useState(0);

  return (
    <>
      {step === "disclaimer" && (
        <Disclaimer onContinue={() => setStep("profile")} />
      )}

      {step === "profile" && (
        <ProfileSetup
          onSave={(name) => {
            setUserName(name);
            setStep("home");
          }}
        />
      )}

      {step === "home" && (
        <Home
          onPlay={() => {
            setStep("game");
          }}
          userName={userName}
        />
      )}

      {step === "game" && (
        <Game
          onFinish={(finalScore) => {
            setScore(finalScore);
            setStep("result");
          }}
        />
      )}

      {step === "result" && (
        <Result
          onNext={() => {
            setStep("why");
          }}
          score={score}
        />
      )}

      {step === "why" && <Why onRestart={() => setStep("home")} />}
    </>
  );
};

export default App;
