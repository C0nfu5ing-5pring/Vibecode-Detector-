const Result = ({ onNext, score, answers, reports = [] }) => {
  const getResult = () => {
    if (score === 5) return "Surprisingly solid";
    if (score >= 3) return "Mostly makes sense";
    if (score >= 1) return "Has moments";
    return "Yeah… no";
  };

  return (
    <div className="min-h-screen bg-[#FFF3E0] flex items-center justify-center px-4 py-6">
      <div
        className="bg-[#FF3D57] w-full max-w-xl md:max-w-2xl
                   rounded-2xl p-6 md:p-10 flex flex-col gap-6
                   -rotate-1 border-[#FFD600] border-4"
      >
        <h1 className="text-4xl md:text-6xl font-black text-center text-[#FFD600]">
          RESULTS
        </h1>

        <p className="text-center text-2xl md:text-4xl text-[#2D2A26]">
          Score: <span className="text-[#FFD600] font-bold">{score} / 5</span>
        </p>

        <p className="text-center text-xl md:text-3xl text-[#2D2A26]">
          Verdict:{" "}
          <span className="text-[#FFD600] font-semibold">{getResult()}</span>
        </p>

        <div
          className="bg-white border-4 border-[#FFB703] rounded-3xl
                     p-4 md:p-6 space-y-3
                     max-h-[35vh] overflow-y-auto"
        >
          {reports.map((rep, i) => (
            <div key={i} className="flex justify-between text-base md:text-lg">
              <span>Report {i + 1}</span>
              <span
                className={
                  answers[i] === rep.correctAnswer
                    ? "text-[#2ECC71] font-semibold"
                    : "text-[#E74C3C] font-semibold"
                }
              >
                {answers[i] === rep.correctAnswer ? "Correct" : "Wrong"}
              </span>
            </div>
          ))}
        </div>

        <button
          onClick={onNext}
          className="mt-4 mx-auto bg-[#FFD600]
                     px-6 md:px-10 py-3 rounded-2xl
                     border-4 border-black
                     text-lg md:text-2xl cursor-pointer
                     transition-all active:scale-95 hover:rotate-2"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Result;
