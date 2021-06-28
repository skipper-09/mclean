import React from "react";
import Link from "next/link";
export default function Sidebar() {
  return (
    <div>
      <div
        className="offcanvas offcanvas-start sidebar-nav bg-dark text-white"
        tabIndex={-1}
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-body p-0">
          <nav className="navbar-dark">
            <ul className="navbar-nav">
              <li>
                <Link href="/admin">
                  <a className="nav-link px-3 active">
                    <span className="me-2">
                      <i className="bi bi-speedometer2" />
                    </span>
                    <span className="fw-bold">Dashboard</span>
                  </a>
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <div className="text-muted small fw-bold text-uppercase px-3">
                  Interface
                </div>
              </li>
              <li>
                <a
                  className="nav-link px-3 sidebar-link"
                  data-bs-toggle="collapse"
                  href="#collapseExample"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  <span className="me-2">
                    <i className="bi bi-clipboard" />
                  </span>
                  <span>Produk</span>
                  <span className="right-icon ms-auto">
                    <i className="bi bi-chevron-compact-down" />
                  </span>
                </a>
                <div className="collapse" id="collapseExample">
                  <div>
                    <ul className="navbar-nav ps-3">
                      <li>
                        <Link href="/Data-produk">
                          <a className="nav-link px-3">
                            <span className="me-2">
                              <i className="bi bi-bag-fill" />
                            </span>
                            <span>Data Produk</span>
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <Link href="/Pengguna">
                  <a className="nav-link px-3">
                    <span className="me-2">
                      <i className="bi bi-people-fill " />
                    </span>
                    <span>User</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/Orderlist">
                  <a className="nav-link px-3">
                    <span className="me-2">
                      <i className="bi bi-cursor-fill"></i>
                    </span>
                    <span>Order</span>
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
