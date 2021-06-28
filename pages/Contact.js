import React from "react";
import Navbar from "../components/Navbar";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import swal from "sweetalert";

export default function Contact() {
  return (
    <div>
      <Layout title="Contact" />
      <Navbar />

      <div className="container contact-form">
        <div className="contact-image">
          <img
            src="https://image.freepik.com/free-vector/tiny-women-getting-mail-from-mailbox-flat-vector-illustration-cartoon-people-reading-newsletter-social-news-marketing-mail-service-business-concept_74855-10176.jpg"
            alt="Cantct"
          />
        </div>
        <div className="pesan">
          <h3>Masukkan Pesan</h3>
          <div className="row">
            <div className="col-md-6 ">
              <div className="form-group">
                <input
                  type="text"
                  name="txtName"
                  className="form-control"
                  placeholder="Masukkan Nama*"
                />
              </div>
              <div className="form-group mt-2">
                <input
                  type="text"
                  name="txtEmail"
                  className="form-control"
                  placeholder="Masukkan Email *"
                />
              </div>
              <div className="form-group mt-2">
                <input
                  type="text"
                  name="txtPhone"
                  className="form-control"
                  placeholder="Masukan No Telepon *"
                />
              </div>
              <div className="form-group mt-2">
                <input
                  type="submit"
                  name="btnSubmit"
                  className="btnContact"
                  defaultValue="Kirim Pesan"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <textarea
                  name="txtMsg"
                  className="form-control"
                  placeholder="Masukkan Pesan *"
                  style={{ width: 100 + "%", height: 150 + "px" }}
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
