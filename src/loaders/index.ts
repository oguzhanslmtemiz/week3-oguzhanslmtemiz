import { Application } from "express";
import express from "./express";
import connectDB from "./mongoose";

export default async (app: Application) => {
  express(app);
  await connectDB();
};
