import { db } from "../../../lib/db";
const handler = async (req, res) => {
  const {
    kode,
    nama_pemesan,
    email,
    no_tlpon,
    tanggal,
    alamat,
    provinsi,
    kabupaten,
    kode_pos,
  } = req.body;

  try {
    if (!kode) {
      return res.status(400).json({ message: "input harus di isi semua" });
    }
    const results = await db.query(
      `INSERT INTO pemesan (kode,nama_pemesan,email,no_tlpon,tanggal,alamat,provinsi,kabupaten,kode_pos)
        VALUES (?,?,?,?,?,?,?,?,?)`,
      [
        kode,
        nama_pemesan,
        email,
        no_tlpon,
        tanggal,
        alamat,
        provinsi,
        kabupaten,
        kode_pos,
      ]
    );
    await db.end;
    return res.json(results);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};
export default handler;
