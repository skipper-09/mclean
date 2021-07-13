//@ts-check
import React from "react";
import swal from "sweetalert";
import Layout from "../../components/Layout";

export default function Fpassword() {
  const Reset = () => {
    swal({
      title: "Reset Pasword Berhasil",
      text: "Cek Email Anda",
      icon: "success",
      // @ts-ignore
      button: "oke",
    });
  };
  return (
    <div>
      <Layout title="Reset Password" />
      <div className="form-gap">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-md-offset-4 ">
              <div className="panel panel-default position-absolute">
                <div className="panel-body">
                  <div className="text-center">
                    <h3 className="lok">
                      <i className="bi bi-lock"></i>
                    </h3>
                    <h2 className="text-center">Lupa Password?</h2>
                    <p>Masukkan Email Untuk Reset Password</p>
                    <div className="panel-body">
                      <div className="form-group">
                        <div className="input-group">
                          <span className="input-group-addon">
                            <i className="glyphicon glyphicon-envelope color-blue"></i>
                          </span>
                          <input
                            id="email"
                            name="email"
                            placeholder="email address"
                            className="form-control"
                            type="email"
                          />
                        </div>
                      </div>
                      <div className="form-group py-2">
                        <input
                          name="recover-submit"
                          className="btn btn-primary btn-block"
                          value="Reset Password"
                          type="submit"
                          onClick={Reset}
                        />
                      </div>

                      <input
                        type="hidden"
                        className="hide"
                        name="token"
                        id="token"
                        value=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
