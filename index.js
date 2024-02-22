import express from "express";
import bodyParser from 'body-parser'
import { connectDB } from "./config/db.js";
import getstatus from "./controller.js/getCardStatus.js";

const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());


app.post("/get_card_status",getstatus);

app.listen(port, async (err) => {
  if (err) console.log(err);
  await connectDB();
  console.log(`server up and listening on port: ${port}`);
});
