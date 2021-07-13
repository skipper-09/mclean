//@ts-check
import Link from "next/link";
export default function Jumbotron() {
  return (
    <div>
      <section id="hero" className="hero d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center">
              <h1 data-aos="fade-up">
                Sibuk Kerja, Rumah Berantakan Gak Sempat Cari Pembantu
              </h1>
              <h2 data-aos="fade-up" data-aos-delay="100">
                Kami solusi anda membersihkan dan merapikan rumah anda dengan
                Propesional
              </h2>
              <div data-aos="fade-up" data-aos-delay="100">
                <div className="text-center text-lg-start">
                  <Link href="/Contact">
                    <a className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
                      <span>Hubungi Kami</span>
                      <i className="bi bi-arrow-right"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 hero-img"
              data-aos="zoom-out"
              data-aos-delay="10"
            >
              <img
                src="https://png.pngtree.com/png-vector/20200123/ourlarge/pngtree-man-cleaning-on-the-floor-concept-for-cleaning-service-and-treatment-png-image_2133746.jpg"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
