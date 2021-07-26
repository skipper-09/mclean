// @ts-nocheck
import React from "react";
import Layoutadm from "../../components/admin/Layoutadm";
import { user } from "../../lib/swr-user";
export default function Pengguna() {
  const { data, error } = user();
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
      <Layoutadm title="Pengguna">
        <main className=" mt-5 pt-3 mainku">
          <div className="container-fluid">
            <div className="row">
              <div className=" fw-bold fs-3 text-capitalize">User</div>

              <div className="col-md-12 mt-2 ">
                <div className="d-flex flex-row bd-highlight">
                  <div className=" p-3 bd-highlight">Data User</div>
                  <div className=" p-2 bd-highlight">
                    {/* <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      <i className="bi bi-people-fill me-2" />
                      Tambah User
                    </button> */}
                    {/* <div
                      className="modal fade"
                      id="exampleModal"
                      tabIndex={-1}
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                              Tambah User
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
                              <label htmlFor="">Nama User</label>
                              <input
                                type="text"
                                className="form-control"
                                name=""
                                id=""
                                aria-required
                              />
                            </div>
                            <div className="form-group mb-3">
                              <label htmlFor="">Email User</label>
                              <input
                                type="text"
                                className="form-control"
                                name=""
                                id=""
                                aria-required
                              />
                            </div>
                            <div className="form-group mb-3">
                              <label htmlFor="">Password User</label>
                              <input
                                type="text"
                                className="form-control"
                                name=""
                                id=""
                                aria-required
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
                            <button type="button" className="btn btn-primary">
                              Tambah
                            </button>
                          </div>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
                <table className="table table-setriped text-center">
                  <thead className="table-secondary">
                    <tr>
                      <th scope="col">Nama User</th>
                      <th scope="col">Email</th>
                      <th scope="col">Pasword</th>
                      {/* <th scope="col">Opsi</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((user, idx) => (
                      <tr key={idx}>
                        <td>{user.nama_user}</td>
                        <td>{user.email}</td>
                        <td>{user.password}</td>
                        {/* <td className="align-items-center ">
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
                        </td> */}
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
