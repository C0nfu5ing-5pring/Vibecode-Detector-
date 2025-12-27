const Result = ({ onNext, score, answers, reports }) => {
  const getResult = () => {
    if (score === 5) return "Surprisingly solid";
    if (score >= 3) return "Mostly makes sense";
    if (score >= 1) return "Has moments";
    return "Yeah… no";
  };

  return (
    <>
      <div className="h-screen bg-[#FFF3E0] flex items-center justify-center">
        <div className="bg-[#FF3D57] h-[85%] w-[35%] rounded-2xl p-15 flex flex-col gap-10 -rotate-2 border-[#FFD600] border-4">
          <h1 className="text-6xl w-fit mx-auto text-[#FFD600]">RESULTS</h1>

          <p className="w-fit mx-auto text-[#2D2A26] mb-2 text-4xl">
            Score: <span className="text-[#FFD600] text-4xl">{score} / 5</span>
          </p>

          <p className="w-fit mx-auto text-[#2D2A26] mb-2 text-4xl">
            Verdict:{" "}
            <span className="text-[#FFD600] text-4xl">{getResult()}</span>
          </p>

          <div className="bg-white border-4 border-[#FFB703] rounded-3xl p-6 w-full max-w-xl text-left space-y-3">
            {reports.map((rep, i) => (
              <div key={i} className="flex justify-between text-lg">
                <span>Report {i + 1}</span>
                <span
                  className={
                    answers[i] === rep.correctAnswer
                      ? "text-[#2ECC71]"
                      : "text-[#E74C3C]"
                  }
                >
                  {answers[i] === rep.correctAnswer ? "Correct" : "Wrong"}
                </span>
              </div>
            ))}
          </div>

          <button
            onClick={onNext}
            className="mt-8 bg-[#FFD600] px-8 py-3 rounded-2xl
                   border-4 transition-all border-[#FFB703] text-xl
                   active:scale-95"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Result;
