// @ts-nocheck
import Router from "next/router";
import React from "react";
import { mutate } from "swr";
import Layoutadm from "../../components/admin/Layoutadm";
import { order } from "../../lib/swr-order";
export default function orderlist() {
  //Tampilkan data pemesan
  // @ts-ignore
  const { data, error } = order();
  console.log(data);
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
  async function HapusPemesan(id_order) {
    const res = await fetch(
      `http://localhost:3000/api/order/hapusorder?id_order=${id_order}`,
      {
        method: "DELETE",
      }
    );
    console.log(res);
    const json = await res.json();
    if (!res.ok) throw Error(json.message);
    mutate("/api/order/hapusorder");
    //setDeletingFalse
    alert("Data Telah Terhapus");
    Router.push("/Orderlist");
  }
  return (
    <div>
      <Layoutadm title="Order-List">
        <main className=" mt-5 pt-3 mainku">
          <div className="container-fluid">
            <div className="row">
              <div className=" fw-bold fs-3 text-capitalize">Order</div>

              <div className="col-md-12 mt-2 ">
                <div className="d-flex flex-row bd-highlight">
                  <div className=" p-3 bd-highlight">Data Order</div>
                </div>
                <table className="table table-setriped text-center">
                  <thead className="table-secondary">
                    <tr>
                      <th scope="col">Nama</th>
                      <th scope="col">Email</th>
                      <th scope="col">Produk</th>
                      <th scope="col">No Telepon</th>
                      <th scope="col">Tanggal</th>
                      <th scope="col">Alamat</th>
                      <th scope="col">Opsi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((order, key) => (
                      <tr key={key}>
                        <td>{order.nama_pemesan}</td>
                        <td>{order.email}</td>
                        <td>{order.nama_produk}</td>
                        <td>{order.no_tlpon}</td>
                        <td>{order.tanggal}</td>
                        <td>
                          {order.alamat},{order.kabupaten},{order.provinsi},
                          {order.kode_pos}
                        </td>

                        <td className="d-flex justify-content-center align-content-center">
                          <button
                            id=""
                            className="btn btn-danger btn-xs mx-2  "
                            role="button"
                            value={order.id_order}
                            onClick={(e) => HapusPemesan(e.target.value)}
                          >
                            <span>
                              <i className="bi bi-trash "></i>
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
        </main>
      </Layoutadm>
    </div>
  );
}
