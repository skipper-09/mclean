//@ts-check
import React from "react";
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
  return (
    <div>
      <Layoutadm title="Order-List">
        <main className=" mt-5 pt-3 mainku">
          <div className="container-fluid">
            <div className="row">
              <div className=" fw-bold fs-3 text-capitalize">User</div>

              <div className="col-md-12 mt-2 ">
                <div className="d-flex flex-row bd-highlight">
                  <div className=" p-3 bd-highlight">Data User</div>
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
                        <td>{order.alamat}</td>

                        <td className="align-items-center ">
                          <a
                            id=""
                            className="btn btn-primary btn-xs mx-2 "
                            href="#"
                            role="button"
                          >
                            <span>
                              <i className="bi bi-pencil-square me-2"></i>
                              Edit
                            </span>
                          </a>

                          <a
                            id=""
                            className="btn btn-danger btn-xs mx-2"
                            href="#"
                            role="button"
                          >
                            <span>
                              <i className="bi bi-trash me-2"></i>
                              Hapus
                            </span>
                          </a>
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
