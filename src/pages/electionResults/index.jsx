import { Profile } from "@/components/Profile";
import Link from "next/link";

const candidates = {
  president: [
    {
      id: 1,
      name: "James Mensah",
      votes: 291,
    },
    {
      id: 2,
      name: "Tetteh Yaa Cina",
      votes: 184,
    },
    {
      id: 3,
      name: "Anim Felix Kofi",
      votes: 120,
    },
  ],
  vicePresident: [
    {
      id: 1,
      name: "Toyin Yusif",
      votes: 310,
    },
    {
      id: 2,
      name: "Danquah Yeboah Stanley",
      votes: 200,
    },
    {
      id: 3,
      name: "Amoako Blessing Kendra",
      votes: 150,
    },
  ],
  secretary: [
    { id: 1, name: "James Mensah", votes: 275 },
    {
      id: 2,
      name: "Tetteh Yaa Cina",
      votes: 190,
    },
    {
      id: 3,
      name: "Anim Felix Kofi",
      votes: 130,
    },
  ],
  treasurer: [
    { id: 1, name: "Abdul Alan", votes: 300 },
    {
      id: 2,
      name: "Dorcas Ayew",
      votes: 220,
    },
    {
      id: 3,
      name: "Michael Arthur",
      votes: 180,
    },
  ],
  pro: [
    { id: 1, name: "Belinda Adjei", votes: 310 },
    {
      id: 2,
      name: "Felix Arthur",
      votes: 200,
    },
    {
      id: 3,
      name: "John Adams",
      votes: 170,
    },
  ],
};

export default function index() {
  return (
    <div className="w-fit mx-auto p-5">
      <h1 className="text-2xl font-bold">Election Results</h1>

      <section className="m-2 my-5 mb-10 p-5 border rounded-lg border-gray-400">
        <h2 className="text-xl my-5 font-bold">SRC President</h2>
        <div className="grid grid-cols-3 gap-3 max-md:grid-cols-2">
          {candidates.president.map((candidate) => (
            <Profile
              key={candidate.id}
              name={candidate.name}
              type={"voteCount"}
              counts={candidate.votes}
            />
          ))}
        </div>

        <div className="my-5">
          <h3 className="text-md text-center my-5 font-bold uppercase mt-10">
            Chart Presentation
          </h3>

          {candidates.president.map((candidate) => {
            const totalVotes = candidates.president.reduce(
              (sum, c) => sum + c.votes,
              0
            );
            const percentage = ((candidate.votes / totalVotes) * 100).toFixed(
              2
            );

            return (
              <div
                key={candidate.id}
                className="flex items-center gap-5 my-3 max-md:block"
              >
                <div className="shrink-0 uppercase font-bold w-42">
                  {candidate.name}
                </div>
                <div className="w-full h-[30px] bg-gray-200 rounded-lg relative">
                  <div
                    className="bg-blue-500 h-full flex items-center rounded justify-end p-2"
                    style={{ width: `${percentage}%` }}
                  >
                    <span className="text-white text-sm">
                      {candidate.votes}
                    </span>
                  </div>
                </div>
                <div className="shrink-0 text-sm font-bold">{percentage}%</div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="m-2 my-5 mb-10 p-5 border rounded-lg border-gray-400">
        <h2 className="text-xl my-5 font-bold">Vice President</h2>
        <div className="grid grid-cols-3 gap-3 max-md:grid-cols-2">
          {candidates.vicePresident.map((candidate) => (
            <Profile
              key={candidate.id}
              name={candidate.name}
              type={"voteCount"}
              counts={candidate.votes}
            />
          ))}
        </div>

        <div className="my-5">
          <h3 className="text-md text-center my-5 font-bold uppercase mt-10">
            Chart Presentation
          </h3>

          {candidates.vicePresident.map((candidate) => {
            const totalVotes = candidates.vicePresident.reduce(
              (sum, c) => sum + c.votes,
              0
            );
            const percentage = ((candidate.votes / totalVotes) * 100).toFixed(
              2
            );

            return (
              <div
                key={candidate.id}
                className="flex items-center gap-5 my-3 max-md:block"
              >
                <div className="shrink-0 uppercase font-bold w-42">
                  {candidate.name}
                </div>
                <div className="w-full h-[30px] bg-gray-200 rounded-lg relative">
                  <div
                    className="bg-blue-500 h-full flex items-center rounded justify-end p-2"
                    style={{ width: `${percentage}%` }}
                  >
                    <span className="text-white text-sm">
                      {candidate.votes}
                    </span>
                  </div>
                </div>
                <div className="shrink-0 text-sm font-bold">{percentage}%</div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="m-2 my-5 mb-10 p-5 border rounded-lg border-gray-400">
        <h2 className="text-xl my-5 font-bold">Secretary</h2>
        <div className="grid grid-cols-3 gap-3 max-md:grid-cols-2">
          {candidates.secretary.map((candidate) => (
            <Profile
              key={candidate.id}
              name={candidate.name}
              type={"voteCount"}
              counts={candidate.votes}
            />
          ))}
        </div>

        <div className="my-5">
          <h3 className="text-md text-center my-5 font-bold uppercase mt-10">
            Chart Presentation
          </h3>

          {candidates.secretary.map((candidate) => {
            const totalVotes = candidates.secretary.reduce(
              (sum, c) => sum + c.votes,
              0
            );
            const percentage = ((candidate.votes / totalVotes) * 100).toFixed(
              2
            );

            return (
              <div
                key={candidate.id}
                className="flex items-center gap-5 my-3 max-md:block"
              >
                <div className="shrink-0 uppercase font-bold w-42">
                  {candidate.name}
                </div>
                <div className="w-full h-[30px] bg-gray-200 rounded-lg relative">
                  <div
                    className="bg-blue-500 h-full flex items-center rounded justify-end p-2"
                    style={{ width: `${percentage}%` }}
                  >
                    <span className="text-white text-sm">
                      {candidate.votes}
                    </span>
                  </div>
                </div>
                <div className="shrink-0 text-sm font-bold">{percentage}%</div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="m-2 my-5 mb-10 p-5 border rounded-lg border-gray-400">
        <h2 className="text-xl my-5 font-bold">Treasurer</h2>
        <div className="grid grid-cols-3 gap-3 max-md:grid-cols-2">
          {candidates.treasurer.map((candidate) => (
            <Profile
              key={candidate.id}
              name={candidate.name}
              type={"voteCount"}
              counts={candidate.votes}
            />
          ))}
        </div>

        <div className="my-5">
          <h3 className="text-md text-center my-5 font-bold uppercase mt-10">
            Chart Presentation
          </h3>

          {candidates.treasurer.map((candidate) => {
            const totalVotes = candidates.treasurer.reduce(
              (sum, c) => sum + c.votes,
              0
            );
            const percentage = ((candidate.votes / totalVotes) * 100).toFixed(
              2
            );

            return (
              <div
                key={candidate.id}
                className="flex items-center gap-5 my-3 max-md:block"
              >
                <div className="shrink-0 uppercase font-bold w-42">
                  {candidate.name}
                </div>
                <div className="w-full h-[30px] bg-gray-200 rounded-lg relative">
                  <div
                    className="bg-blue-500 h-full flex items-center rounded justify-end p-2"
                    style={{ width: `${percentage}%` }}
                  >
                    <span className="text-white text-sm">
                      {candidate.votes}
                    </span>
                  </div>
                </div>
                <div className="shrink-0 text-sm font-bold">{percentage}%</div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="m-2 my-5 mb-10 p-5 border rounded-lg border-gray-400">
        <h2 className="text-xl my-5 font-bold">Public Relation Officer</h2>
        <div className="grid grid-cols-3 gap-3 max-md:grid-cols-2">
          {candidates.pro.map((candidate) => (
            <Profile
              key={candidate.id}
              name={candidate.name}
              type={"voteCount"}
              counts={candidate.votes}
            />
          ))}
        </div>

        <div className="my-5">
          <h3 className="text-md text-center my-5 font-bold uppercase mt-10">
            Chart Presentation
          </h3>

          {candidates.pro.map((candidate) => {
            const totalVotes = candidates.pro.reduce(
              (sum, c) => sum + c.votes,
              0
            );
            const percentage = ((candidate.votes / totalVotes) * 100).toFixed(
              2
            );

            return (
              <div
                key={candidate.id}
                className="flex items-center gap-5 my-3 max-md:block"
              >
                <div className="shrink-0 uppercase font-bold w-42">
                  {candidate.name}
                </div>
                <div className="w-full h-[30px] bg-gray-200 rounded-lg relative">
                  <div
                    className="bg-blue-500 h-full flex items-center rounded justify-end p-2"
                    style={{ width: `${percentage}%` }}
                  >
                    <span className="text-white text-sm">
                      {candidate.votes}
                    </span>
                  </div>
                </div>
                <div className="shrink-0 text-sm font-bold">{percentage}%</div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
