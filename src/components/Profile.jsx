import { useState } from "react";

export const Profile = ({ name, voted, onVote }) => {
  return (
    <div className="max-w-[200px] bg-gray-200/40 rounded-lg p-5">
      <div>
        <img
          src={`/images/candidates/${name}.jpg`}
          alt=""
          className="rounded-lg w-[200px] h-[200px] object-cover"
        />
      </div>
      <div className="text-center py-2 uppercase">{name}</div>
      <button
        onClick={onVote}
        disabled={voted}
        className={`w-full px-4 mt-2 py-1 rounded text-white text-center ${
          voted
            ? "bg-orange-300 cursor-not-allowed"
            : "bg-[#06033f] hover:bg-[#bf9405] active:bg-[#bf9405]"
        }`}
      >
        {voted ? "Voted" : "Vote"}
      </button>
    </div>
  );
};
