import express from "express";
import { getjoongufoods } from "./src/controllers/foodcotroller.js";

const foodsrouter = express.Router();

foodsrouter.get("/joongu", getjoongufoods)

export default foodsrouter;

