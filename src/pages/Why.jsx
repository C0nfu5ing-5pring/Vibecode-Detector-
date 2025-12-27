const Why = ({ onRestart }) => {
  return (
    <>
      <div className="h-screen bg-[#F7E3B3] flex flex-col justify-center items-center px-4 py-6">
        <div
          className="max-w-6xl w-full bg-[#FFF3E0] border-4 rounded-3xl flex flex-col justify-between items-center rotate-1 p-6 sm:p-10 md:p-12
                    max-h-[90vh] shadow-lg"
        >
          <h1 className="text-center w-fit text-2xl sm:text-3xl md:text-5xl text-[#FF3D57] select-none mb-6 leading-tight">
            WHY THIS WEBSITE-GAME OR GAME-WEBSITE AGHHH WHATEVER IT IS!?
          </h1>
          <div className="text-[#FF6F00] text-sm sm:text-base md:text-lg lg:text-lg uppercase text-center max-w-3xl leading-relaxed">
            <p className="mb-4">
              This website started with a review from Jane. A project I worked
              on was considered vibecoded, and only 17 hours out of 22.7 hours
              of the time I spent on it counted. Jane, I did not know that
              commits are also considered. Usually I work locally and at last I
              commit everything at once and deploy it. I really appreciate and
              respect your review I just made this because I needed to complete
              some amount of coding hours. Again, this is not a website to
              target Jane. Make sure to write "XD" in review of this project so
              that I understand you enjoyed it!
            </p>{" "}
          </div>
          <button
            onClick={onRestart}
            className="mt-8 bg-[#FFD600]  px-8 py-3 rounded-2xl
                   border-4 transition-all hover:rotate-2 cursor-pointer border-[#FFB703] text-xl md:text-2xl
                   active:scale-95"
          >
            Play again!
          </button>
        </div>
      </div>
    </>
  );
};

export default Why;
