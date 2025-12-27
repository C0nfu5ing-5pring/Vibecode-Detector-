const Disclaimer = ({ onContinue }) => {
  return (
    <div className="h-screen bg-[#F7E3B3] flex flex-col justify-center items-center px-4 py-6">
      <div
        className="max-w-6xl w-full bg-[#FFF3E0] border-4 rounded-3xl flex flex-col justify-between items-center rotate-1 p-6 sm:p-10 md:p-12
                    max-h-[90vh] shadow-lg"
      >
        <h1 className="text-center w-fit text-4xl sm:text-6xl md:text-8xl text-[#FF3D57] select-none mb-6 leading-tight">
          DISCLAIMER
        </h1>
        <div className="text-[#FF6F00] text-sm sm:text-base md:text-lg lg:text-lg uppercase text-center max-w-3xl leading-relaxed">
          <p className="mb-4">
            This website exists purely for entertainment, giggles, and emotional
            damage (to me, not you). It does <strong>not</strong> target,
            attack, roast, subtweet, side-eye, or spiritually haunt any single
            individual. Every character, scenario, report card, and judgement
            shown here is either fictional, generic, exaggerated, or painfully
            self-reflective.
          </p>

          <p className="mb-4">
            If at any point you feel hurt, offended, confused, attacked, or
            personally evaluated by this website, please know that was{" "}
            <strong>absolutely not the intention</strong>. I am genuinely sorry
            and I promise this site has zero authority, zero accuracy, and zero
            power over real human beings.
          </p>

          <p className="mb-4">
            The real reason this project exists is much simpler and much
            sillier: I needed to complete my remaining coding hours, I chose
            chaos, and here we are. Think of this website as a digital coping
            mechanism mixed with React state, Tailwind classes, and a little bit
            of dramatic flair.
          </p>

          <p className="mb-4">
            This is not a real evaluation tool. This is not a serious judgement
            system.
          </p>
        </div>

        <button
          onClick={onContinue}
          className="px-6 hover:rotate-2 transition-all py-3 border-3 mt-6 border-black border-solid text-[#FFD600] text-lg sm:text-xl rounded-2xl rotate-1 cursor-pointer active:scale-95 uppercase bg-[#FF3D57] select-none"
        >
          I understand
        </button>
      </div>
    </div>
  );
};

export default Disclaimer;
