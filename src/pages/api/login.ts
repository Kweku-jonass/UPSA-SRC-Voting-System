import { loginUser } from "./controller";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, password } = body;
  const { token, userId, error } = await loginUser(email, password);

  return new Response(JSON.stringify({ token, error, userId }), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  });
}
