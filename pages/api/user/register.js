import { db } from "../../../lib/db";
import bcrypt from "bcrypt";
const handler = async (req, res) => {
  const { nama_user, email, password } = req.body;
  const salt = bcrypt.genSaltSync(10);
  const passwordhast = bcrypt.hashSync(password, salt);

  try {
    if (!nama_user || !email || !password) {
      return res.status(400).json({ message: "input harus di isi semua" });
    }
    const results = await db.query(
      `INSERT INTO user (nama_user,email,password)
        VALUES (?,?,?)`,
      [nama_user, email, passwordhast]
    );
    await db.end;
    return res.json(results);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};
export default handler;
