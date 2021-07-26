//@ts-check
import Link from "next/link";

export default function Headeradmin() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          {/* offcanvasbutton  */}
          <button
            className="navbar-toggler me-2"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
          >
            <span className="navbar-toggler-icon" />
          </button>
          {/* offcanvasbutton */}
          <Link href="/">
            <a className="navbar-brand text-uppercase fw-bold me-auto">
              M Clean
            </a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex ms-auto">
              <div className="input-group my-3 my-lg-0">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Cari"
                  aria-label="Cari"
                  aria-describedby="button-addon2"
                />
                <button
                  className="btn btn-primary"
                  type="button"
                  id="button-addon2"
                >
                  <i className="bi bi-search" />
                </button>
              </div>
            </form>
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="bi bi-person-fill" />
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      <span className="me-2">
                        <i className="bi bi-person-fill" />
                      </span>
                      Profile
                    </a>
                  </li>
                  <li>
                    <Link href="/">
                      <a className="dropdown-item">
                        <span className="me-2">
                          <i className="bi bi-box-arrow-right" />
                        </span>
                        Sign Out
                      </a>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
