import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import db from "../config/database";

const router = express.Router();

// better to load this from env file
const SECRET_KEY = "secret!@#$";

// login api
router.post("/login", async (req: any, res: any) => {
  const { email, password } = req.body;

  // err validation
  if (!email || !password) {
    return res.status(400).json({
      message: "email and password should not empty",
    });
  }

  try {
    const [user]: any = await db
      .promise()
      .query("Select * from users where email =? ", [email]);

    if (user.length === 0) {
      return res.status(404).json({
        message: "user not found",
      });
    }

    const isFound = await bcrypt.compare(password, user[0].password);

    if (!isFound) {
      return res.status(401).json({
        message: "invalid credentialsd",
      });
    }

    const token = jwt.sign(
      {
        id: user[0].id,
        email: user[0].email,
      },
      SECRET_KEY,
      {
        expiresIn: "1hr",
      }
    );
    res.status(200).json({
      token,
    });
  } catch (err) {
    res.status(500).json({
      message: "error occurs please check the error:",
      err,
    });
  }
});

export default router;
