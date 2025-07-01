import { registerUser } from "./controller";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, password } = body;

  await registerUser(email, password);

  return new Response(JSON.stringify({ message: "New user created" }), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  });
}
