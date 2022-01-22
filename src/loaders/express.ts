import express, { Application } from "express";
import helmet from "helmet";
import cors from "cors";
import session from "express-session";
import { loginRoute, registerRoute, dashboardRoute } from "../routes";

export default (app: Application) => {
  // Parse the body of the request
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Helps protect app from some well-known web vulnerabilities
  app.use(helmet());
  app.use(cors());

  // Create a session middleware with the given options
  app.use(
    session({
      secret: process.env.SESSION_SECRET as string,
      resave: false,
      saveUninitialized: true,
      cookie: { maxAge: 1000 * 60 * 60 * 1 }, // 1 hour
    })
  );

  // Routes
  app.use("/login", loginRoute);
  app.use("/register", registerRoute);
  app.use("/dashboard", dashboardRoute);
};
