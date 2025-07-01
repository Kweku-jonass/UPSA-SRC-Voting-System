import { useState } from "react";
import { useRouter } from "next/router";
import { Profile } from "@/components/Profile";

const candidates = {
  president: [
    { id: 1, name: "James Mensah" },
    { id: 2, name: "Tetteh Yaa Cina" },
    { id: 3, name: "Anim Felix Kofi" },
  ],
  vicePresident: [
    { id: 1, name: "Toyin Yusif" },
    { id: 2, name: "Danquah Yeboah Stanley" },
    { id: 3, name: "Amoako Blessing Kendra" },
  ],
  secretary: [
    { id: 1, name: "James Mensah" },
    { id: 2, name: "Tetteh Yaa Cina" },
    { id: 3, name: "Anim Felix Kofi" },
  ],
  treasurer: [
    { id: 1, name: "Abdul Alan" },
    { id: 2, name: "Dorcas Ayew" },
    { id: 3, name: "Michael Arthur" },
  ],
  pro: [
    { id: 1, name: "Belinda Adjei" },
    { id: 2, name: "Felix Arthur" },
    { id: 3, name: "John Adams" },
  ],
};

export default function CastVote() {
  const [votes, setVotes] = useState({
    president: null,
    vicePresident: null,
    secretary: null,
    treasurer: null,
    pro: null,
  });

  const router = useRouter();

  const handleVote = (category, candidateId) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [category]: candidateId,
    }));
  };

  const handleSubmitVotes = () => {
    // Check if all categories have been voted for
    if (Object.values(votes).every((vote) => vote !== null)) {
      const confirmSubmit = window.confirm(
        "Are you sure you want to submit your votes?"
      );
      if (confirmSubmit) {
        alert("Thanks for voting!\nLogin again to see results");
        router.push("/"); // Redirect to the login page
      }
    } else {
      alert("Please cast your vote for all categories before submitting.");
    }
  };

  return (
    <div className="w-fit mx-auto p-5">
      <h1 className="text-2xl font-bold">Cast Your Vote</h1>

      <section className="mb-15">
        <h2 className="text-center text-xl my-5 font-bold">SRC President</h2>
        <div className="grid grid-cols-3 gap-3 max-md:grid-cols-2">
          {candidates.president.map((candidate) => (
            <Profile
              key={candidate.id}
              name={candidate.name}
              voted={votes.president === candidate.id}
              onVote={() => handleVote("president", candidate.id)}
            />
          ))}
        </div>
      </section>

      <section className="mb-15">
        <h2 className="text-center text-xl my-5 font-bold">Vice President</h2>
        <div className="grid grid-cols-3 gap-3 max-md:grid-cols-2">
          {candidates.vicePresident.map((candidate) => (
            <Profile
              key={candidate.id}
              name={candidate.name}
              voted={votes.vicePresident === candidate.id}
              onVote={() => handleVote("vicePresident", candidate.id)}
            />
          ))}
        </div>
      </section>

      <section className="mb-15">
        <h2 className="text-center text-xl my-5 font-bold">Secretary</h2>
        <div className="grid grid-cols-3 gap-3 max-md:grid-cols-2">
          {candidates.secretary.map((candidate) => (
            <Profile
              key={candidate.id}
              name={candidate.name}
              voted={votes.secretary === candidate.id}
              onVote={() => handleVote("secretary", candidate.id)}
            />
          ))}
        </div>
      </section>

      <section className="mb-15">
        <h2 className="text-center text-xl my-5 font-bold">Treasurer</h2>
        <div className="grid grid-cols-3 gap-3 max-md:grid-cols-2">
          {candidates.treasurer.map((candidate) => (
            <Profile
              key={candidate.id}
              name={candidate.name}
              voted={votes.treasurer === candidate.id}
              onVote={() => handleVote("treasurer", candidate.id)}
            />
          ))}
        </div>
      </section>

      <section className="mb-15">
        <h2 className="text-center text-xl my-5 font-bold">PRO</h2>
        <div className="grid grid-cols-3 gap-3 max-md:grid-cols-2">
          {candidates.pro.map((candidate) => (
            <Profile
              key={candidate.id}
              name={candidate.name}
              voted={votes.pro === candidate.id}
              onVote={() => handleVote("pro", candidate.id)}
            />
          ))}
        </div>
      </section>

      <div className="text-center mt-10">
        <button
          onClick={handleSubmitVotes}
          disabled={!Object.values(votes).every((vote) => vote !== null)}
          className={`bg-blue-500 text-white px-6 py-2 rounded-lg ${
            Object.values(votes).every((vote) => vote !== null)
              ? "hover:bg-blue-600 active:bg-blue-700"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Submit All Votes
        </button>
      </div>
    </div>
  );
}
