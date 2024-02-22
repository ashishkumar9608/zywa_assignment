import mongoose from "mongoose";
import CardStatus from "../models/cardStatus.js";
import { updatedatabase } from "../updateDatabase.js";

async function getstatus(req, res) {
  await updatedatabase("data/Pickup.csv","pickup");
  const { CardID } = req.body;
  //query our database
  console.log(CardID);
  const card = await CardStatus.findOne({ CardID });
  if(!card) return res.status(404).json({message:"no such card exist"});

 return res.json({ message: "query successful",status:card.status });
}

export default getstatus;
