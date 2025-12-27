import banner from "../images/banner.png";

const Home = ({ onPlay, userName }) => {
  return (
    <>
      <div className="h-screen bg-[#FFF3E0] flex items-center justify-center px-4">
        <div className="max-w-5xl w-full p-6 sm:p-10">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-8">
            Hello, <span className="text-[#FF3D57]">{userName}</span>
          </h1>

          <div className="relative pb-24 sm:pb-20 md:pb-24">
            <img
              src={banner}
              alt="banner"
              className="rounded-2xl w-full max-h-168 border-4 object-cover"
            />
            <button
              className="absolute left-1/2 transform -translate-x-1/2
             bottom-16 sm:bottom-12 md:bottom-16 lg:bottom-18
             bg-[#ffd502] text-lg sm:text-xl md:text-2xl lg:text-3xl
             px-6 py-3 border-3 rounded-2xl -rotate-1
             hover:bg-[#fbda36] hover:rotate-2 transition-all
             cursor-pointer active:scale-95"
              onClick={onPlay}
            >
              Click to play
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
