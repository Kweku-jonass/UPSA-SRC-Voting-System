import Link from "next/link";

export default function index() {
  return (
    <div className="flex gap-5 justify-center items-center p-10 max-md:flex-col max-md:gap-10 min-lg:h-dvh">
      <div>
        <Link
          href="castVote"
          className="block max-w-[300px] bg-white shadow-2xl border border-gray-100 rounded-xl p-5 hover:scale-105 transition-all"
        >
          <img src="/images/castVote.jpeg" alt="" className="h-[200px]" />
          <p className="mt-5 text-center">Cast Vote</p>
        </Link>
      </div>

      <div>
        <Link
          href="electionResults"
          className="block max-w-[300px] bg-white shadow-2xl border border-gray-100 rounded-xl p-5 hover:scale-105 transition-all"
        >
          <img src="/images/results.jpeg" alt="" className="h-[200px]" />
          <p className="mt-5 text-center">View Results</p>
        </Link>
      </div>
    </div>
  );
}
