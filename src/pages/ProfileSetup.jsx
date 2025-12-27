import { useState } from "react";

const ProfileSetup = ({ onSave }) => {
  const [name, setName] = useState("Jane");

  const handleSave = () => {
    onSave(name.trim(""));
  };

  return (
    <div className="h-screen bg-[#F7E3B3] flex flex-col justify-center items-center px-4 py-6">
      <div
        className="max-w-6xl w-full bg-[#FFF3E0] border-4 rounded-3xl flex flex-col justify-center items-center rotate-1 p-6 sm:p-10 md:p-12
                    max-h-[90vh] shadow-lg"
      >
        <h1 className="text-center w-fit text-4xl sm:text-6xl md:text-8xl text-[#FF3D57] select-none mb-8 leading-tight">
          Enter Your Name
        </h1>

        <input
          type="text"
          placeholder="Enter your name (e.g. Jane)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-72 sm:w-96 text-xl sm:text-2xl md:text-3xl text-[#FF6F00] bg-[#FFF3E0] border-4 border-[#FF3D57] rounded-3xl px-6 py-4 mb-4 placeholder-[#FFAA66] rotate-1 focus:outline-none"
        />

        <button
          onClick={handleSave}
          disabled={!name.trim()}
          className={`px-6 py-3 border-3 border-black border-solid text-[#FFD600] text-lg sm:text-xl rounded-2xl rotate-1 cursor-pointer uppercase bg-[#FF3D57] select-none
            ${
              !name.trim() ? "opacity-50 cursor-not-allowed" : "active:scale-95"
            }
          `}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default ProfileSetup;
