import express, { Request, Response } from "express";
import bcrypt from "bcryptjs";
import db from "../config/database";
import { DESTRUCTION } from "dns";

const router = express.Router();

router.post("/register", async (req: any, res: any) => {
  // DESTRUCTION the body
  const { username, email, password } = req.body;



  // err validation
  if (!username || !email || !password) {
    return res.status(400).json({
      message: "all fields are mandatory",
    });
  }

  try {

    const hashPassword = await bcrypt.hash(password,10);
    const result = await db
      .promise()
      .query("Insert Into Users (username,email,password) values (?,?,?) ", [
        username,
        email,
        hashPassword,
      ]);
    res.status(200).json({
      message: "User Registerd Successfully!",
    });
  } catch (err) {
    res.status(500).json({
      message: "error occurs please check the error:",
      err,
    });
  }
});

export default router;