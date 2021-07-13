//@ts-check
import { db } from "../../lib/db";

const updateproduk = async (req, res) => {
  const { kode, nama_produk, harga, deskripsi, gambar } = req.body;
  try {
    if (!kode || !nama_produk || !harga || !deskripsi) {
      return res.status(400).json({ message: "isian tidak boleh kosong" });
    }
    //sql query
    const results = await db.query(
      `UPDATE produk set kode = ?, nama_produk = ?, harga = ?, deskripsi = ? ,gambar = ? WHERE kode = ?`,
      [kode, nama_produk, harga, deskripsi, gambar, kode]
    );
    return res.json(results);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export default updateproduk;
