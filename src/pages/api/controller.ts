import { compare, hash } from "bcryptjs";
import { Candidate, User } from "./types";
import { ObjectId } from "mongodb";
import clientPromise from "@/lib/mongodb";
import { signToken } from "@/utils";

export const getDB = async () => (await clientPromise).db("votingdb");

export const loginUser = async (email: string, password: string) => {
  const db = await getDB();
  const user = await db.collection<User>("users").findOne({ email });

  if (!user) {
    return registerUser(email, password);
  }

  if (!(await compare(password, user.password))) {
    return { error: "Invalid password", token: "" };
  }

  const token = signToken({ userId: user._id.toString() });

  return { token, userId: user._id, error: "" };
};

export const registerUser = async (email: string, password: string) => {
  const db = await getDB();
  const existingUser = await db.collection("users").findOne({ email });
  if (existingUser) {
    return { error: "User already exists" };
  }

  const hashedPassword = await hash(password, 10);

  const user = await db.collection<User>("users").insertOne({
    email,
    password: hashedPassword,
    createdAt: new Date(),
    updatedAt: new Date()
  });

  const token = signToken({ userId: user.insertedId.toString() });

  return { token, userId: user.insertedId };
};

export const getUser = async (email: string) => {
  const db = await getDB();
  const user = await db.collection("users").findOne({ email });
  if (!user) {
    return { error: "User not found" };
  }
  return { user };
};

export const toggleVote = async (candidateId: string, userId: string) => {
  const db = await getDB();
  let candidate = await db
    .collection<Candidate>("candidate")
    .findOne({ id: candidateId });

  if (!candidate) {
    const newCandidate = await db
      .collection("candidate")
      .insertOne({ id: candidateId, votes: [] });

    candidate = await db
      .collection<Candidate>("candidate")
      .findOne({ _id: newCandidate.insertedId });
  }

  const user = await db
    .collection<User>("users")
    .findOne({ _id: new ObjectId(userId) });

  if (!user) {
    return { error: "User not found" };
  }

  if (candidate?.votes.some(vote => vote.toString() === user._id.toString())) {
    // User has already voted for this candidate, remove the vote

    candidate.votes = candidate.votes.filter(
      vote => vote.toString() !== user._id.toString()
    );
  } else {
    // User has not voted for this candidate, add the vote
    candidate?.votes.push(new ObjectId(user._id));
  }

  await db
    .collection<Candidate>("candidate")
    .updateOne(
      { id: candidateId },
      { $set: { votes: candidate?.votes || [] } }
    );

  return { votes: candidate?.votes || [], candidateId, userId };
};

export const getCandidates = async () => {
  const db = await getDB();
  const candidates = await db
    .collection<Candidate>("candidate")
    .find()
    .toArray();

  return candidates;
};
