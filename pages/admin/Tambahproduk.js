import React, { useState } from "react";

export default function Tambahproduk() {
  const [kode, setKode] = useState("");
  const [nama_produk, setNama_produk] = useState("");
  const [harga, setHarga] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [gambar, setGambar] = useState(null);
  const [selectedFile, setSelectedFile] = useState("");
  const [file, SetFile] = useState("");

  const onSellectImg = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
      {
        const _file = e.target.files(0);
        const reader = new FileReader();
        reader.onload = function () {
          SetFile(_file);
          setFoto(reader.result);
        };
        reader.readAsDataURL(_file);
      }
    }
  };

  async function submitHandler(e) {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/api/tambahproduk", {
        method: "POST",
        headers: {
          "Content-Type": "aplication/json",
        },
        body: JSON.stringify({
          kode,
          nama_produk,
          harga,
          deskripsi,
          gambar,
        }),
      });
      const json = await res.json();
      if (!res.ok) throw Error(json.message);
      alert("Penambahan data sukses");
    } catch (e) {
      throw Error(e.message);
    }
  }
  return (
    <div>
      <div className="container mt-5">
        <form onSubmit={submitHandler}>
          <img src={gambar} class="img-responsive" alt="Image" />
          <div className="form-group mb-3">
            <input
              type="file"
              className="form-control"
              name=""
              id="gambar"
              onChange={onSellectImg}
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="">Kode Produk</label>
            <input
              type="number"
              className="form-control"
              name=""
              value={kode}
              id="kode"
              onChange={(e) => setKode(e.target.value)}
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="">Nama Produk</label>
            <input
              type="text"
              className="form-control"
              name=""
              id="nama_produk"
              value={nama_produk}
              onChange={(e) => setNama_produk(e.target.value)}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="">Harga Produk</label>
            <input
              type="number"
              className="form-control"
              name=""
              id="harga"
              value={harga}
              onChange={(e) => setHarga(e.target.value)}
            />
          </div>
          <p>{harga}</p>
          <div className="form-group mb-3">
            <label htmlFor="">Deskripsi Produk</label>
            <textarea
              className="form-control"
              aria-label="With textarea"
              value={deskripsi}
              id="deskripsi"
              onChange={(e) => setDeskripsi(e.target.value)}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Tambah
          </button>
        </form>
      </div>
    </div>
  );
}
