import { sign, verify } from "jsonwebtoken";

export type Payload = { userId: string };

export const signToken = (payload: Payload) => {
  return sign(payload, "secret");
};

export const verifyToken = (token: string): Payload => {
  return verify(token, "secret") as Payload;
};

export const getTokenFromHeaders = (headers: Headers) => {
  const authHeader = headers.get("Authorization");
  if (!authHeader) {
    return null;
  }
  const token = authHeader.split(" ")[1];
  return token;
};
