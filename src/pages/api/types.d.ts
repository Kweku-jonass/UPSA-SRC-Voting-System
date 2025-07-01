import { Document, ObjectId } from "mongodb";

export interface User extends Document {
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Candidate extends Document {
  id: string;
  votes: ObjectId[];
}
