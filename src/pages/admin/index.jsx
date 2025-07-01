export default function index() {
  return (
    <div className="max-w-3xl mx-auto p-5">
      <h1 className="text-center font-bold text-xl">Dashboard</h1>

      <div className="grid grid-cols-3 gap-5 justify-center my-10">
        <div className="text-center bg-[#3498db] max-w-md shrink-0 p-5 py-10 rounded font-bold text-white">
          <h2>Total Voters</h2>
          <p className="mt-5">1500</p>
        </div>
        <div className="text-center bg-[#3498db] max-w-md shrink-0 p-5 py-10 rounded font-bold text-white">
          <h2>Votes Cast</h2>
          <p className="mt-5">890</p>
        </div>
        <div className="text-center bg-[#3498db] max-w-md shrink-0 p-5 py-10 rounded font-bold text-white">
          <h2>Remaining Voters</h2>
          <p className="mt-5">610</p>
        </div>
      </div>

      <article className="bg-gray-200/70 rounded-lg p-5">
        <h3 className="font-bold mb-1 text-lg">Election Status & Schedule</h3>
        <p>
          <b className="font-bold text-gray-700">Election Status:</b> Ongoing
        </p>
        <p>
          <b className="font-bold text-gray-700">Voting Opens:</b> March 15,
          2025
        </p>
        <p>
          <b className="font-bold text-gray-700">Voting Closes :</b> March 20,
          2025
        </p>
        <p>
          <b className="font-bold text-gray-700">Result Announcement:</b> March
          21, 2025
        </p>
      </article>
    </div>
  );
}
