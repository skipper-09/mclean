import Link from "next/link";
const Childharga = (props) => {
  return (
    <div>
      <div className="box mt-2">
        <h3>{props.namaproduk}</h3>
        <div className="price">
          <sup>Rp</sup>
          {props.harga}
          <span> / Hari</span>
        </div>
        <img src={props.img} className="img-fluid" alt="" />
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
