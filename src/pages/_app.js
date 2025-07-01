import { Footer } from "@/components/Footer";
import "@/styles/globals.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <div
      className={`bg-white text-black ${
        router.pathname === "/" &&
        "bg-[url('/images/background.jpg')] bg-cover bg-center"
      }
      
      ${router.pathname === "/admin" && "h-dvh"}`}
    >
      {router.pathname !== "/" && (
        <header className="bg-[#06033f] text-white flex items-center justify-between mb-5">
          <div className="flex items-center justify-between max-md:block">
            <Link href="/">
              <img src="/images/logo.jpg" alt="Logo" className="h-20" />
            </Link>
            <h1 className="text-2xl font-bold pl-3 max-md:py-5">
              UPSA E-Voting System
            </h1>
          </div>
          {router.pathname == "/admin" && (
            <div>
              <Link
                href="/admin#"
                className="bg-white py-2 px-4 text-[#06033f] rounded mr-5"
              >
                Dashboard
              </Link>
              <Link
                href="/admin#"
                className="bg-white py-2 px-4 text-[#06033f] rounded mr-5"
              >
                Election Settings
              </Link>
              <Link
                href="/electionResults"
                className="bg-white py-2 px-4 text-[#06033f] rounded mr-5"
              >
                Live results
              </Link>
              <Link
                href="/"
                className="bg-white py-2 px-4 text-[#06033f] rounded mr-5"
              >
                Logout
              </Link>
            </div>
          )}
          {router.pathname == "/candidate" ? (
            <div>
              <Link
                href="/candidate"
                className="bg-white py-2 px-4 text-[#06033f] rounded mr-5"
              >
                Dashboard
              </Link>
              <Link
                href="/castVote"
                className="bg-white py-2 px-4 text-[#06033f] rounded mr-5"
              >
                Cast Vote
              </Link>
              <Link
                href="/electionResults"
                className="bg-white py-2 px-4 text-[#06033f] rounded mr-5"
              >
                Live results
              </Link>
              <Link
                href="/"
                className="bg-white py-2 px-4 text-[#06033f] rounded mr-5"
              >
                Logout
              </Link>
            </div>
          ) : (
            <Link
              href="/"
              className="bg-white py-2 px-4 text-[#06033f] rounded mr-5"
            >
              Logout
            </Link>
          )}
        </header>
      )}

      <main className="text-black">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}
