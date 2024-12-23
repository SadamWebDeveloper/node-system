import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import db from "../config/database";
import xlsx from "xlsx";
import multer from "multer";

const router = express.Router();
const upload = multer({
  dest: "uploads/",
});

router.post("/import-chat", upload.single("file"), (req: any, res: any) => {
  const file = req.file;

  if (!file) {
    return res.status(400).json({
      message: "file is required",
    });
  }

  // read file

  const workbook = xlsx.readFile(file.path);
  const sheetName = workbook.SheetNames[0];
  const data = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);

  console.log(data);
  return false;

//   after here i need to loop the data and store in database 
});

export default router;