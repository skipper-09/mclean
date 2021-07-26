// @ts-nocheck
import Link from "next/link";
import React from "react";
import { countpemesan } from "../../lib/count/countpemesan";

export default function Dashboardadmin() {
  const { data, error } = countpemesan();
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

                    <Link href="/Orderlist">
                      <div className=" d-flex justify-content-center align-content-center">
                        <button className=" btn btn-md btn-danger w-50">
                          Lihat <i className="bi bi-arrow-right"></i>
                        </button>
                      </div>
                    </Link>
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

                    <Link href="/Data-produk">
                      <div className=" d-flex justify-content-center align-content-center">
                        <button className=" btn btn-md btn-primary w-50">
                          Lihat <i className="bi bi-arrow-right"></i>
                        </button>
                      </div>
                    </Link>
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
                    <Link href="/User">
                      <div className=" d-flex justify-content-center align-content-center">
                        <button className=" btn btn-success w-50">
                          Lihat <i className="bi bi-arrow-right"></i>
                        </button>
                      </div>
                    </Link>
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
