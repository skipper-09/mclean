//@ts-check
import { db } from "../../lib/db";

const count = async (req, res) => {
  const { kode } = req.body;
  try {
    if (!kode) {
      return res.status(400).json({ message: "data kosong" });
    }
    const results = await db.query(
      `
        SELECT COUNT(?) FROM produk
        `,
      [kode]
    );
    return res.json(results);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export default count;
