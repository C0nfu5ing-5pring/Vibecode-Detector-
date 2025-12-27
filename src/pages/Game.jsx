import { useEffect, useState } from "react";
import report from "../data/reports";

const Game = ({ onFinish }) => {
  const [gameReports, setGameReports] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(5).fill(null));

  useEffect(() => {
    let reports = [];
    for (let i = 0; i < 5; i++) {
      let reportId = Math.floor(Math.random() * report.length);
      reports.push(report[reportId]);
    }
    setGameReports(reports);
  }, []);

  if (gameReports.length === 0) {
    return (
      <div className="h-screen flex items-center justify-center bg-[#FFF3E0]">
        <p className="text-3xl text-[#2D2A26]">Loading reports...</p>
      </div>
    );
  }

  const currentReport = gameReports[currentIndex];

  const handleAnswer = (value) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentIndex] = value;
    setAnswers(updatedAnswers);
  };

  const calculateScore = (answers, reports) => {
    let score = 0;
    for (let i = 0; i < answers.length; i++) {
      if (answers[i] === reports[i].correctAnswer) {
        score++;
      }
    }
    return score;
  };

  const allAnswered = answers.every((answer) => answer !== null);

  return (
    <div className="h-screen bg-[#FFF3E0] flex items-center justify-center px-4">
      <button
        className="hidden md:flex text-5xl px-6 py-4 bg-[#FFD600] text-[#2D2A26]
                   rounded-2xl border-4 border-[#FFB703] -rotate-2
                   active:scale-95 cursor-pointer transition-all hover:rotate-2"
        onClick={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))}
        disabled={currentIndex === 0}
      >
        ◀
      </button>

      <div
        className="relative bg-white w-full max-w-xl h-[85vh] mx-4
                   rounded-3xl border-4 border-[#FFB703] shadow-xl rotate-1
                   px-6 py-5 flex flex-col justify-between text-[#2D2A26]"
      >
        <div className="text-center">
          <h1 className="text-5xl sm:text-6xl font-black text-[#FF3D57]">
            REPORT CARD
          </h1>
          <p className="mt-2 text-xl font-bold text-[#6B5E57]">
            Report {currentIndex + 1} / 5
          </p>
        </div>

        <div className="mt-4 space-y-4 overflow-y-auto pr-2">
          <div>
            <p className="text-xl text-[#FF3D57] md:text-2xl lg:text-3xl font-bold mb-1">
              Title
            </p>
            <div className="bg-[#FFF3E0] text-xl md:xl lg:text-2xl rounded-xl p-3">
              {currentReport.title}
            </div>
          </div>

          <div>
            <p className="text-xl text-[#FF3D57] md:text-2xl lg:text-3xl font-bold mb-1">
              Author
            </p>
            <div className="bg-[#FFF3E0] text-xl md:xl lg:text-2xl rounded-xl p-3">
              {currentReport.author}
            </div>
          </div>

          <div>
            <p className="text-xl text-[#FF3D57] md:text-2xl lg:text-3xl font-bold mb-1">
              Description
            </p>
            <div className="bg-[#FFF3E0] text-xl md:xl lg:text-2xl rounded-xl p-3">
              {currentReport.description}
            </div>
          </div>

          <div>
            <p className="text-xl text-[#FF3D57] md:text-2xl lg:text-3xl font-bold mb-1">
              Details
            </p>
            <div className="bg-[#FFF3E0] text-xl md:xl lg:text-2xl rounded-xl p-3 space-y-1">
              {currentReport.details.map((detail, i) => (
                <p key={i}>• {detail}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-3 md:hidden">
          <button
            onClick={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))}
            disabled={currentIndex === 0}
            className="px-4 py-2 bg-[#FFD600] hover:rotate-2 cursor-pointer transition-all rounded-xl border-3 border-[#FFB703]
                       active:scale-95 disabled:opacity-40"
          >
            Previous
          </button>

          <button
            onClick={() => setCurrentIndex((prev) => Math.min(prev + 1, 4))}
            disabled={currentIndex === 4}
            className="px-4 py-2 bg-[#FFD600] hover:rotate-2 cursor-pointer transition-all rounded-xl border-3 border-[#FFB703]
                       active:scale-95 disabled:opacity-40"
          >
            Next
          </button>
        </div>

        <div className="mt-4">
          <div className="flex justify-center gap-4">
            <button
              onClick={() => handleAnswer("vibecoded")}
              className={`px-5 py-2 hover:rotate-2 cursor-pointer transition-all rounded-xl border-4 text-lg active:scale-95
                ${
                  answers[currentIndex] === "vibecoded"
                    ? "bg-[#E74C3C] text-white border-black"
                    : "bg-[#FFF3E0] border-[#FFB703]"
                }`}
            >
              VIBECODED
            </button>

            <button
              onClick={() => handleAnswer("valid")}
              className={`px-5 py-2 hover:rotate-2 cursor-pointer transition-all rounded-xl border-4 text-lg active:scale-95
                ${
                  answers[currentIndex] === "valid"
                    ? "bg-[#2ECC71] text-white border-black"
                    : "bg-[#FFF3E0] border-[#FFB703]"
                }`}
            >
              VALID
            </button>
          </div>

          <button
            disabled={!allAnswered}
            onClick={() => {
              if (!allAnswered) return;
              const score = calculateScore(answers, gameReports);
              onFinish(score, answers, gameReports);
            }}
            className={`block mx-auto mt-4 px-8 py-3 rounded-2xl border-4
              text-xl transition-all
              ${
                allAnswered
                  ? "bg-[#FF6F00] text-white border-[#FFB703] active:scale-95 hover:rotate-2"
                  : "bg-gray-300 text-gray-500 border-gray-400 cursor-not-allowed"
              }`}
          >
            SUBMIT
          </button>
        </div>
      </div>

      <button
        className="hidden md:flex text-5xl px-6 py-4 bg-[#FFD600] text-[#2D2A26]
                   rounded-2xl border-4 border-[#FFB703] -rotate-2
                   active:scale-95 cursor-pointer transition-all hover:rotate-2"
        onClick={() => setCurrentIndex((prev) => Math.min(prev + 1, 4))}
        disabled={currentIndex === 4}
      >
        ▶
      </button>
    </div>
  );
};

export default Game;
