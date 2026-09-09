import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./Utils/mongodb.js";
import URLRoute from "./router/urls.js";
import dns from "node:dns/promises"

dns.setServers(["1.1.1.1" , "8.8.8.8"])


dotenv.config();


const app = express();



app.use(cors());
app.use(express.json());

connectDB();
app.use("/",URLRoute);

app.listen(5050, () => {
  console.log("server is running on port 5050");
});