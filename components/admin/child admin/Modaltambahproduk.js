//@ts-check
import React, { useState } from "react";
export default function Modaltambahproduk(props) {
  const [kode, setKode] = useState("");
  const [nama_produk, setNama_produk] = useState("");
  const [harga, setHarga] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [gambar, setGambar] = useState(null);
  const [selectedImg, setSelectedFile] = useState("");
  const [file, setFile] = useState("");

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

  async function submitHandler() {
    try {
      const res = await fetch("http://localhost:3000/api/tambahproduk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          kode,
          nama_produk,
          harga,
          deskripsi,
          gambar,
        }),
      });
      console.log(res);
      const json = await res.json();
      if (!res.ok) throw Error(json.message);
      alert("Penambahan data sukses");
    } catch (e) {
      throw Error(e.message);
    }
  }
  return (
    <div>
      <div
        className="modal fade"
        id={props.modal}
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Tambah Produk
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>

            <div className="modal-body">
              <div className="form-group mb-3">
                <label htmlFor="">Kode Produk</label>
                <input
                  type="number"
                  className="form-control"
                  name=""
                  id="kode"
                  value={kode}
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
                  type="text"
                  className="form-control"
                  name=""
                  id="harga"
                  value={harga}
                  onChange={(e) => setHarga(e.target.value)}
                />
              </div>
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
              <div className="form-group mb-3">
                <label htmlFor="uploadGambar">
                  <img
                    className=" img-thumbnail w-25"
                    src={gambar}
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
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>

              <button
                type="button"
                className="btn btn-primary"
                onClick={submitHandler}
              >
                Tambah
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
