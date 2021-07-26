import { db } from "../../../lib/db";
import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";
const handler = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "input harus di isi semua", token });
    }
    const cekuser = await db.query(
      `INSERT INTO user (email)
        VALUES (?)`,
      [email]
    );
    //await db.end;
    // return res.json(cekuser);
    const cekpassword = await bcrypt.compare(password, cekuser.password);
    if (!cekpassword) return res.status(401).end();
    const token = Jwt.sign(
      {
        id: cekuser.id,
        email: cekuser.email,
      },
      "blablabla",
      { expiresIn: "1d" }
    );
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};
export default handler;
