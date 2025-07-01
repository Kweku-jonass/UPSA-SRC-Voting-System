import Link from "next/link";

export default function index() {
  return (
    <div className="max-w-lg mx-auto">
      <h1 className="font-bold text-2xl">Dashboard</h1>

      <aside className="text-center flex flex-col gap-2 mb-5">
        <div className="mx-auto w-[120px] h-[120px] rounded-full overflow-hidden border-1 border-gray-300">
          <img
            src="/images/candidates/James Mensah.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="uppercase font-bold">James Mensah</h2>
        <p>
          <b className="font-bold">Position:</b> SRC President
        </p>
        <p>
          <b className="font-bold">Email:</b> 10304075@upsamail.edu.gh
        </p>
        <p>
          <b className="font-bold">Manifesto:</b> "Building a better future for
          all students. Transparency, growth, and innovation!"
        </p>
      </aside>

      <article className="bg-gray-200/70 rounded-lg p-5 mb-10">
        <h3 className="font-bold mb-1 text-lg">Election Overview</h3>
        <p>
          The voting period is currently ongoing. Encourage students to
          participate and make their votes count! Results will be updated in
          real-time on the Results Page.
        </p>
      </article>
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
