//@ts-check
import { db } from "../../../lib/db";
const handler = async (_, res) => {
  try {
    const results = await db.query(
      `SELECT * FROM pemesan LEFT JOIN produk ON pemesan.kode=produk.kode`
    );
    await db.end;
    return res.json(results);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};
export default handler;
