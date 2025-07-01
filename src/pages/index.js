import { useState } from "react";
import { useRouter } from "next/router";
import { dummyLogins } from "@/data/DB";
import OTP from "../components/OTP";
import { UserContext } from "../context/User";

export default function Home() {
  const [userStatus, setUserStatus] = useState("voter");
  const [indexNumber, setIndexNumber] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
  const [userType, setUserType] = useState(""); // State to track the user type
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();

    // Basic validation
    if (!indexNumber || !password) {
      alert("Please fill in all fields.");
      return;
    }

    // Check if the user is a voter
    const voter = dummyLogins.voters.find(
      (v) => v.indexNumber === indexNumber && v.password === password
    );
    if (voter) {
      setUserType("voter"); // Set userType to "voter"
      setIsLoggedIn(true); // Set login status to true
      return;
    }

    // Check if the user is a candidate
    const candidate = dummyLogins.candidates.find(
      (c) => c.indexNumber === indexNumber && c.password === password
    );
    if (candidate) {
      setUserType("candidate"); // Set userType to "candidate"
      setIsLoggedIn(true); // Set login status to true
      return;
    }

    // Check if the user is an admin
    const admin = dummyLogins.admin.find(
      (a) => a.indexNumber === indexNumber && a.password === password
    );
    if (admin) {
      setUserType("admin"); // Set userType to "admin"
      setIsLoggedIn(true); // Set login status to true
      return;
    }

    // If no match, show an error
    alert("Invalid credentials. Please try again.");
  };

  return (
    <UserContext.Provider value={{ indexNumber, setIndexNumber }}>
      <div>
        <main className="h-screen flex flex-col items-center justify-center text-white bg-[url('/images/background.jpg')] bg-cover bg-center">
          {isLoggedIn ? (
            <OTP userType={userType} /> // Pass userType as a prop to the OTP component
          ) : (
            <form className="text-black max-w-xs" onSubmit={handleLogin}>
              <div className="flex flex-col items-center justify-center gap-5 p-4 bg-white rounded-md">
                <img src="/images/logo.jpg" alt="Logo" />
                <h1 className="text-xl font-bold text-center">
                  Welcome to <br /> UPSA Voting System
                </h1>

                <div className="flex flex-col space-y-2 w-full">
                  <label
                    htmlFor="options"
                    className="text-sm font-medium text-gray-700"
                  >
                    User Status:
                  </label>
                  <select
                    id="options"
                    name="options"
                    className="w-full rounded-md border border-gray-300 bg-white p-2 text-sm font-bold"
                    value={userStatus}
                    onChange={(e) => setUserStatus(e.target.value)}
                  >
                    <option value="voter">Voter</option>
                    <option value="candidate">Candidate</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>

                <label className="text-gray-700 w-full">
                  Index Number:
                  <input
                    type="text"
                    placeholder="Enter your ID or Username"
                    className="w-full px-4 py-2 rounded text-gray-800 border border-gray-300"
                    value={indexNumber}
                    onChange={(e) => setIndexNumber(e.target.value)}
                  />
                </label>

                <label className="text-gray-700 w-full">
                  Password:
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="w-full px-4 py-2 rounded text-gray-800 border border-gray-300"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </label>

                <button
                  type="submit"
                  className="bg-[#06033F] text-white px-4 py-2 rounded-md w-full font-bold"
                >
                  Login
                </button>
              </div>
            </form>
          )}
        </main>
      </div>
    </UserContext.Provider>
  );
}
