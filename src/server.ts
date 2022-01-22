require("dotenv").config();
import express, { Application } from "express";
import loaders from "./loaders";

async function startServer(): Promise<void> {
  const app: Application = express();

  // mounts express options, routes and db connection
  await loaders(app);

  const PORT: number = Number(process.env.PORT) || 1481;
  app.listen(PORT, () => {
    try {
      console.log(`
        ################################################
            🏁  Server listening on port: ${PORT} 🏁 
        ################################################`);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  });
}

startServer();
