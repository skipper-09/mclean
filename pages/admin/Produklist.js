//@ts-check
import React from "react";
import Layoutadm from "../../components/admin/Layoutadm";
import Modaltambahproduk from "../../components/admin/child admin/modaltambahproduk";
import { usedataproduk } from "../../lib/swr-fetch";
import { mutate } from "swr";
import Router from "next/router";
import Link from "next/Link";
export default function Produklist() {
  // @ts-ignore
  const { data, error } = usedataproduk();
  if (error) {
    return <div>Error loading</div>;
  }
  if (!data) {
    return (
      <div className=" d-flex justify-content-center align-self-center">
        <div className="spinner-border text-primary  " role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  // hapus produk
  async function Hapusproduk(kode) {
    const res = await fetch(
      `http://localhost:3000/api/hapusproduk?kode=${kode}`,
      {
        method: "DELETE",
      }
    );
    console.log(res);
    const json = await res.json();
    if (!res.ok) throw Error(json.message);
    mutate("/api/hapusproduk");
    //setDeletingFalse
    alert("Data Telah Terhapus");
    Router.push("/Data-produk");
  }

  return (
    <div>
      <Layoutadm title="Produk List">
        <main className=" mt-5 pt-3 mainku">
          <div className="container-fluid">
            <div className="row">
              <div className=" fw-bold fs-3 text-capitalize">Produk</div>
              <div className="col-md-12 mt-2 ">
                <div className="d-flex flex-row bd-highlight">
                  <div className=" p-3 bd-highlight">Data Produk</div>
                  <div className=" p-2 bd-highlight">
                    {/* Button trigger modal */}
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#tambahproduk"
                    >
                      <i className="bi bi-bag-fill me-2" />
                      Tambah Produk
                    </button>
                    {/* Modal */}
                    <Modaltambahproduk modal="tambahproduk" />
                  </div>
                </div>
                <div className=" table-responsive">
                  <table className="table table-setriped">
                    <thead className="table-secondary text-center">
                      <tr>
                        <th scope="col">Nama Produk</th>
                        <th scope="col">Harga</th>
                        <th scope="col">Deskripsi</th>
                        <th scope="col">Gambar</th>
                        <th scope="col">Opsi</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((pro, idx) => (
                        <tr key={idx} className="text-center">
                          <td>{pro.nama_produk}</td>
                          <td>{pro.harga}</td>
                          <td>{pro.deskripsi}</td>
                          <td className="col-md-2">
                            <img
                              src={pro.gambar}
                              className=" img-thumbnail w-25 "
                            />
                          </td>
                          <td>
                            <Link
                              href={`/Update?kode=${pro.kode}&nama_produk=${pro.nama_produk}&harga=${pro.harga}&deskripsi=${pro.deskripsi}`}
                            >
                              <button className="btn btn-xs btn-primary me-2">
                                <span>
                                  <i className="bi bi-pencil-square me-2"></i>
                                  Edit
                                </span>
                              </button>
                            </Link>

                            <button
                              className=" btn btn-danger"
                              value={pro.kode}
                              // @ts-ignore
                              onClick={(e) => Hapusproduk(e.target.value)}
                            >
                              <span>
                                <i className="bi bi-trash me-2"></i>
                                Hapus
                              </span>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </main>
      </Layoutadm>
    </div>
  );
}
