import Childharga from "./Child Component/Childharga";
import { usedataproduk } from "../lib/swr-fetch";
export default function Harga() {
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

  return (
    <div>
      <section id="pricing" className="pricing">
        <div className="container">
          <header className="section-header">
            <p className="text-uppercase">Daftar Harga</p>
          </header>

          <div className="row gy-4 mt-2">
            {data.map((produk, idx) => (
              <div className="col-lg-3 col-md-6">
                <Childharga
                  key={idx}
                  namaproduk={produk.nama_produk}
                  img={produk.gambar}
                  harga={produk.harga}
                  deskripsi={produk.deskripsi}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
