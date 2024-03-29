import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { razorpayRouter } from "./razorpay";
const cors = require('cors');
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
app.use(cors({ origin: "*" }))
app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});
app.use(razorpayRouter())
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${process.env.port}`);
});