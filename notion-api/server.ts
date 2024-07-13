import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();
const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Server is running, sir!");
});

// Notion Routes

app.post("", (req, res) => {
  res.send();
});

app.listen(port, () => {
  console.log("Server is listening on port: " + port);
});
