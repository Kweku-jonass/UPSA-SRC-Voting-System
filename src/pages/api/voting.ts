import { getTokenFromHeaders, verifyToken } from "@/utils";
import { getCandidates, toggleVote } from "./controller";

export async function POST(request: Request) {
  const token = getTokenFromHeaders(request.headers);

  if (!token) {
    return new Response(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
      headers: { "Content-Type": "application/json" }
    });
  }

  const { userId } = verifyToken(token);

  if (!userId) {
    return new Response(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
      headers: { "Content-Type": "application/json" }
    });
  }

  const body = await request.json();
  const { candidateId } = body;

  const res = await toggleVote(candidateId, userId);

  return new Response(JSON.stringify(res), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
}

export async function GET() {
  const candidates = await getCandidates();

  return new Response(JSON.stringify(candidates), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
}
