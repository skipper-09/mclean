//@ts-check
import { db } from "../../lib/db";
const handler = async (req, res) => {
  const { kode } = req.query;
  try {
    if (!kode) {
      return res.status(400).json({ message: "`kode` tidak ada" });
    }
    const results = await db.query(`DELETE FROM produk where kode = ?`, kode);
    res.json(results);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};
export default handler;
