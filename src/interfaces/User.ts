import { Document } from "mongoose";

export interface IUser {
  name: string;
  surname?: string;
  username: string;
  password: string;
}

export interface IUserDocument extends IUser, Document {}
