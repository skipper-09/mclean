//@ts-check
import React from "react";
import Layout from "../components/Layout";
import Link from "next/Link";

export default function Cekout() {
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
                      placeholder="Nama Lengkap"
                    />
                  </div>
                  <div className="col-md-6 col-12 mb-2">
                    <label className="order-form-label">Email</label>
                    <input className="order-form-input" placeholder="Email" />
                  </div>
                </div>

                <div className="row mx-4">
                  <div className="col-12 mb-2">
                    <label className="order-form-label">No Telepon</label>
                    <div className="col-12 col-sm-6">
                      <input
                        type="number"
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
                    <input className="order-form-input" placeholder=" " />
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
                      type="date"
                    />
                  </div>
                </div>

                <div className="row mt-3 mx-4">
                  <div className="col-12">
                    <label className="order-form-label">Adress</label>
                  </div>
                  <div className="col-12">
                    <input className="order-form-input" placeholder="Alamat" />
                  </div>

                  <div className="col-12 col-sm-6 mt-2 pr-sm-2">
                    <input
                      className="order-form-input"
                      placeholder="Provinsi"
                    />
                  </div>
                  <div className="col-12 col-sm-6 mt-2 pl-sm-0">
                    <input
                      className="order-form-input"
                      placeholder="Kabupaten"
                    />
                  </div>
                  <div className="col-12 col-sm-6 mt-2 pr-sm-2">
                    <input
                      className="order-form-input"
                      placeholder="Kode Pos"
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
                    <Link href="/admin">
                      <button
                        type="button"
                        id="btnSubmit"
                        className="btn btn-primary d-block mx-auto"
                      >
                        Pesan
                      </button>
                    </Link>
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
