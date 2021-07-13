//@ts-check
import Link from "next/link";
const Childharga = (props) => {
  return (
    <div>
      <div className="box mt-2">
        <h3 className="text-capitalize">{props.namaproduk}</h3>
        <img src={props.img} className="w-100" alt="gambar produk" />
        <div className="price">
          <sup>Rp</sup>
          {props.harga}
          <span> / Hari</span>
        </div>
        <ul>
          <li>{props.deskripsi}</li>
        </ul>
        <Link href="/Cekout">
          <a className="btn-buy">Booking</a>
        </Link>
      </div>
    </div>
  );
};

export default Childharga;
