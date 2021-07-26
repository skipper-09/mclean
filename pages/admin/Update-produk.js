//@ts-check
import Router, { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
export default function updateproduk() {
  //deklarasi state
  const [_kode, setKode] = useState("");
  const [_nama_produk, setNama_produk] = useState("");
  const [_harga, setHarga] = useState("");
  const [_deskripsi, setDeskripsi] = useState("");
  const [_gambar, setGambar] = useState(null);
  const [selectedImg, setSelectedFile] = useState("");
  const [file, setFile] = useState("");

  //mengambil data yang dikirim  melalui router
  const router = useRouter();
  const { kode, nama_produk, harga, deskripsi } = router.query;
  useEffect(() => {
    if (typeof kode == "string") {
      setKode(kode);
    }
    if (typeof nama_produk == "string") {
      setNama_produk(nama_produk);
    }
    if (typeof harga == "string") {
      setHarga(harga);
    }
    if (typeof deskripsi == "string") {
      setDeskripsi(deskripsi);
    }
  }, [kode, nama_produk, harga, deskripsi]);

  const onSelectImg = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    const _file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = function () {
      setFile(_file);
      setGambar(reader.result);
    };
    reader.readAsDataURL(_file);
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    //set submit true
    try {
      const res = await fetch("api/updateproduk", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          kode: _kode,
          nama_produk: _nama_produk,
          harga: _harga,
          deskripsi: _deskripsi,
          gambar: _gambar,
        }),
      });
      const json = await res.json();
      console.log(json);
      //set submit false
      if (!res.ok) throw Error(json.message);
      alert("Penambahan data sukses");
      Router.push("/Data-produk");
    } catch (e) {
      throw Error(e.message);
    }
  };
  return (
    <div>
      <div className=" container">
        <h2 className=" text-center mt-5 px-5 fw-bold">Edit Produk</h2>
        <form className="w-50 mx-auto" onSubmit={submitHandler}>
          <div className="mb-3 d-flex align-content-center justify-content-center">
            <label htmlFor="uploadGambar">
              <img
                className=" img-thumbnail w-25"
                src={_gambar}
                alt="Pilih Gambar"
              ></img>
            </label>
            <input
              type="file"
              className="form-control"
              id="uploadGambar"
              style={{ display: "none" }}
              onChange={onSelectImg}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="kode" className="form-label">
              Kode
            </label>
            <input
              type="text"
              className="form-control"
              id="kode"
              value={_kode}
              onChange={(e) => setKode(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="produk" className="form-label">
              Nama Produk
            </label>
            <input
              type="text"
              className="form-control"
              id="produk"
              value={_nama_produk}
              onChange={(e) => setNama_produk(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Harga
            </label>
            <input
              type="text"
              className="form-control"
              id="harga"
              value={_harga}
              onChange={(e) => setHarga(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Deskripsi
            </label>
            <textarea
              className="form-control"
              aria-label="With textarea"
              id="deskripsi"
              value={_deskripsi}
              onChange={(e) => setDeskripsi(e.target.value)}
            ></textarea>
          </div>
          <div className="mb-3 d-flex justify-content-end">
            <button className=" btn btn-primary">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
