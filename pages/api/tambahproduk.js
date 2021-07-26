//@ts-check
import { db } from "../../lib/db";
const handler = async (req, res) => {
  const { nama_produk, harga, deskripsi, gambar } = req.body;
  try {
    if (!nama_produk || !harga || !deskripsi) {
      return res.status(400).json({ message: "input harus di isi semua" });
    }
    const results = await db.query(
      `INSERT INTO produk (nama_produk,harga,deskripsi,gambar)
        VALUES (?,?,?,?)`,
      [nama_produk, harga, deskripsi, gambar]
    );
    await db.end;
    return res.json(results);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};
export default handler;
