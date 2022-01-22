import mongoose from "mongoose";

export default async (): Promise<void> => {
  const db = mongoose.connection;
  db.once("open", () => {
    console.log("Database connected successfully");
  });

  db.on("error", (err) => {
    console.error("connection error:", err);
  });

  await mongoose.connect(process.env.DB_URL as string);
};
