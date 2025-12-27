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
        score = score + 1;
      }
    }
  };

  return (
    <div className="h-screen bg-[#FFF3E0] flex items-center justify-center px-6">
      <button
        className="hidden md:flex text-5xl px-6 py-4 bg-[#FFD600] text-[#2D2A26] 
                   rounded-2xl border-4 border-[#FFB703] -rotate-2
                   active:scale-95 cursor-pointer transition-all hover:rotate-2"
        onClick={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))}
      >
        ◀
      </button>

      <div
        className="relative bg-[#FFFFFF] w-full max-w-xl h-[85vh] mx-6 
                      rounded-3xl border-4 border-[#FFB703] shadow-xl rotate-1 
                      px-8 py-6 flex flex-col justify-between text-[#2D2A26]"
      >
        <div className="text-center">
          <h1 className="text-6xl font-black text-[#FF3D57] tracking-wide">
            REPORT CARD
          </h1>
          <p className="mt-2 text-2xl font-bold text-[#6B5E57]">
            Report {currentIndex + 1} / 5
          </p>
        </div>

        <div className="mt-4 space-y-4 overflow-y-auto pr-2">
          <div>
            <p className="text-xl font-bold mb-1">Title</p>
            <div className="bg-[#FFF3E0] rounded-xl p-3 text-lg">
              {currentReport.title}
            </div>
          </div>

          <div>
            <p className="text-xl font-bold mb-1">Author</p>
            <div className="bg-[#FFF3E0] rounded-xl p-3 text-lg">
              {currentReport.author}
            </div>
          </div>

          <div>
            <p className="text-xl font-bold mb-1">Description</p>
            <div className="bg-[#FFF3E0] rounded-xl p-3 text-lg">
              {currentReport.description}
            </div>
          </div>

          <div>
            <p className="text-xl font-bold mb-1">Details</p>
            <div className="bg-[#FFF3E0] rounded-xl p-3 text-lg space-y-1">
              {currentReport.details.map((detail, i) => (
                <p key={i}>• {detail}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex justify-center gap-4">
            <button
              onClick={() => handleAnswer("VIBE")}
              className={`px-6 py-3 rounded-xl border-4 text-xl active:scale-95
                ${
                  answers[currentIndex] === "VIBE"
                    ? "bg-[#E74C3C] text-white border-black"
                    : "bg-[#FFF3E0] border-[#FFB703]"
                }`}
            >
              VIBECODED
            </button>

            <button
              onClick={() => handleAnswer("VALID")}
              className={`px-6 py-3 rounded-xl border-4 text-xl active:scale-95
                ${
                  answers[currentIndex] === "VALID"
                    ? "bg-[#2ECC71] text-white border-black"
                    : "bg-[#FFF3E0] border-[#FFB703]"
                }`}
            >
              VALID
            </button>
          </div>

          <button
            onClick={() => {
              const score = calculateScore(answers, gameReports);
              onFinish(score, answers, gameReports);
            }}
            className="block mx-auto mt-4 bg-[#FF6F00] text-white 
                       px-8 py-3 rounded-2xl border-4 border-[#FFB703] 
                       text-xl tracking-wide active:scale-95 cursor-pointer transition-all hover:rotate-2"
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
      >
        ▶
      </button>
    </div>
  );
};

export default Game;
