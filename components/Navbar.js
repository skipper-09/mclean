//@ts-check
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <div>
      <header id="header" className="header fixed-top header-scrolled">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between ">
          <Link href="/">
            <a className="logo d-flex align-items-center">
              <img
                src="https://w7.pngwing.com/pngs/240/987/png-transparent-home-cleaning-service-illustration-maid-service-cleaner-carpet-cleaning-housekeeping-house-icon-text-janitor-vacuum-cleaner-thumbnail.png"
                alt="M clean logo"
              />
              <span className="nbrand">M CLEAN</span>
            </a>
          </Link>

          <nav id="navbar" className="navbar navbaruser">
            <ul>
              <li>
                <Link href="/">
                  <a className="nav-link scrollto active">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/#about">
                  <a className="nav-link scrollto ">About</a>
                </Link>
              </li>
              <li>
                <Link href="/#pricing">
                  <a className="nav-link scrollto ">Jasa Kami</a>
                </Link>
              </li>
              <li>
                <Link href="/#team">
                  <a className="nav-link scrollto ">My Team</a>
                </Link>
              </li>

              <li>
                <Link href="/blog">
                  <a>Blog</a>
                </Link>
              </li>
              <li>
                <Link href="/Contact">
                  <a className="nav-link scrollto ">Contact</a>
                </Link>
              </li>

              <li>
                <Link href="/login">
                  <motion.a
                    className="getstarted scrollto"
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 1 },
                    }}
                    whileTap={{ scale: 0.5 }}
                  >
                    Login <i className="bi bi-arrow-right"></i>
                  </motion.a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}
