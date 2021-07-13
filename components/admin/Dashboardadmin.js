//@ts-check
import React from "react";

export default function Dashboardadmin() {
  return (
    <div>
      <main className="mt-5 pt-3 mainku">
        <div className="container-fluid">
          <div className="row">
            <div className="fw-bold fs-3 text-uppercase">Dashboard</div>
            <div className="col-xl-3 col-md-6 mt-4">
              <div className="card border border-2 border-end-0 border-primary btn-outline-primary  shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div
                        className="
                  text-xs
                  fw-bold
                  text-gray-900 text-uppercase
                  mb-1
                "
                      >
                        Total Pemesan
                        <hr className="dropdown-divider" />
                      </div>
                      <div className="h5 mb-0 fw-bold text-gray-900">100</div>
                    </div>
                    <div className="col-auto">
                      <i className="bi bi-book-half text-grey-500 fs-1 " />
                    </div>
                    <span className="text-center">
                      Lihat <i className="bi bi-arrow-right"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 mt-4">
              <div className="card border border-2 border-end-0 border-success btn-outline-success shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div
                        className="
                  text-xs
                  fw-bold
                  text-gray-900 text-uppercase
                  mb-1
                "
                      >
                        Jumlah Produk
                        <hr className="dropdown-divider" />
                      </div>
                      <div className="h5 mb-0 fw-bold text-gray-900">100</div>
                    </div>
                    <div className="col-auto">
                      <i className="bi bi-bag-fill text-gray-800 fs-1" />
                    </div>
                    <span className="text-center">
                      Lihat <i className="bi bi-arrow-right"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 mt-4">
              <div className="card border border-2 border-end-0 border-danger btn-outline-danger shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div
                        className="
                  text-xs
                  fw-bold
                  text-gray-900 text-uppercase
                  mb-1
                "
                      >
                        Total Pengguna
                        <hr className="dropdown-divider" />
                      </div>
                      <div className="h5 mb-0 fw-bold text-gray-900">100</div>
                    </div>
                    <div className="col-auto">
                      <i className="bi bi-people-fill text-grey-800 fs-1 " />
                    </div>
                    <span className="text-center">
                      Lihat <i className="bi bi-arrow-right"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
