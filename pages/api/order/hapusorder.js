//@ts-check
import { db } from "../../../lib/db";
const handler = async (req, res) => {
  const { id_order } = req.query;
  try {
    if (!id_order) {
      return res.status(400).json({ message: "`id_order` tidak ada" });
    }
    const results = await db.query(
      `DELETE FROM pemesan where id_order = ?`,
      id_order
    );
    res.json(results);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};
export default handler;
