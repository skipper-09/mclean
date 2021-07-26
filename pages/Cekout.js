// @ts-nocheck
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Link from "next/Link";
import { useRouter } from "next/router";
import Router from "next/router";

export default function Cekout() {
  const [_nama_produk, setNama_produk] = useState();
  const [nama_pemesan, setNama_pemesan] = useState();
  const [no_tlpon, setNotlpon] = useState();
  const [email, setEmail] = useState();
  const [tanggal, setTanggal] = useState();
  const [alamat, setAlamat] = useState();
  const [provinsi, setProvinsi] = useState();
  const [kabupaten, setKabupaten] = useState();
  const [kode_pos, setKodepos] = useState();

  //mengambil data namaproduk
  const router = useRouter();
  const { nama_produk, kode } = router.query;

  useEffect(() => {
    if (typeof nama_produk == "string") {
      setNama_produk(nama_produk);
    }
    // if (typeof kode == "string") {
    //   setNama_produk(kode);
    // }
  }, [nama_produk, kode]);

  //menambahkan kedatabase
  async function submitHandler() {
    try {
      const res = await fetch("http://localhost:3000/api/order/tambahorder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          kode,
          nama_pemesan,
          email,
          no_tlpon,
          tanggal,
          alamat,
          provinsi,
          kabupaten,
          kode_pos,
        }),
      });

      const json = await res.json();
      console.log(json);
      if (!res.ok) throw Error(json.message);
      alert("Pemesanan sukses");
      Router.push("/");
    } catch (e) {
      throw Error(e.message);
    }
  }
  return (
    <div>
      <Layout title="Cekout">
        <section className="order-form my-4 mx-4">
          <div className="container pt-4">
            <div className="row">
              <div className="col-12">
                <h1>Formulir Pemesanan</h1>
                {/* <span>with some explanation below</span> */}
                <hr className="mt-1" />
              </div>
              <div className="col-12">
                <div className="row mx-4">
                  <div className="col-md-6 col-12 mb-2">
                    <label className="order-form-label">Nama</label>
                    <input
                      className="order-form-input"
                      value={nama_pemesan}
                      onChange={(e) => setNama_pemesan(e.target.value)}
                      placeholder="Nama Lengkap"
                    />
                  </div>
                  <div className="col-md-6 col-12 mb-2">
                    <label className="order-form-label">Email</label>
                    <input
                      className="order-form-input"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                    />
                  </div>
                </div>

                <div className="row mx-4">
                  <div className="col-12 mb-2">
                    <label className="order-form-label">No Telepon</label>
                    <div className="col-12 col-sm-6">
                      <input
                        type="number"
                        value={no_tlpon}
                        onChange={(e) => setNotlpon(e.target.value)}
                        className="order-form-input"
                        placeholder="No Telepon"
                      />
                    </div>
                  </div>
                </div>
                <div className="row mt-3 mx-4">
                  <div className="col-12">
                    <label className="order-form-label">
                      Paket yang dipilih
                    </label>
                  </div>
                  <div className="col-12">
                    <input
                      className="order-form-input"
                      value={_nama_produk}
                      onChange={(e) => setNama_produk(e.target.value)}
                    />
                  </div>
                </div>

                <div className="row mt-3 mx-4">
                  <div className="col-12">
                    <label
                      className="order-form-label"
                      htmlFor="date-picker-example"
                    >
                      Date
                    </label>
                  </div>
                  <div className="col-12">
                    <input
                      className="order-form-input datepicker"
                      placeholder="Selected date"
                      value={tanggal}
                      onChange={(e) => setTanggal(e.target.value)}
                      type="date"
                    />
                  </div>
                </div>

                <div className="row mt-3 mx-4">
                  <div className="col-12">
                    <label className="order-form-label">Adress</label>
                  </div>
                  <div className="col-12">
                    <input
                      className="order-form-input"
                      value={alamat}
                      onChange={(e) => setAlamat(e.target.value)}
                      placeholder="Alamat"
                    />
                  </div>

                  <div className="col-12 col-sm-6 mt-2 pr-sm-2">
                    <input
                      className="order-form-input"
                      placeholder="Provinsi"
                      value={provinsi}
                      onChange={(e) => setProvinsi(e.target.value)}
                    />
                  </div>
                  <div className="col-12 col-sm-6 mt-2 pl-sm-0">
                    <input
                      className="order-form-input"
                      value={kabupaten}
                      onChange={(e) => setKabupaten(e.target.value)}
                      placeholder="Kabupaten"
                    />
                  </div>
                  <div className="col-12 col-sm-6 mt-2 pr-sm-2">
                    <input
                      className="order-form-input"
                      placeholder="Kode Pos"
                      value={kode_pos}
                      onChange={(e) => setKodepos(e.target.value)}
                    />
                  </div>
                </div>

                <div className="row mt-3 mx-4">
                  <div className="col-12">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        name="validation"
                        id="validation"
                        value="1"
                      />
                      <label htmlFor="validation" className="form-check-label">
                        Saya Setuju
                      </label>
                    </div>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-12">
                    <button
                      type="button"
                      id="btnSubmit"
                      onClick={submitHandler}
                      className="btn btn-primary d-block mx-auto"
                    >
                      Pesan
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
}
