// @ts-nocheck
import {
  faFacebookF,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Router from "next/router";
import Link from "next/link";
import React, { useState } from "react";
import Layout from "../../components/Layout";
export default function Register() {
  const [nama_user, setNama_user] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  async function registerHandler() {
    try {
      const res = await fetch("http://localhost:3000/api/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nama_user,
          email,
          password,
        }),
      });
      console.log(res);
      const json = await res.json();
      if (!res.ok) throw Error(json.message);
      alert("Register Sukses");
      Router.push("/admin");
    } catch (e) {
      throw Error(e.message);
    }
  }
  return (
    <div>
      <Layout title="Register" />
      <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
        <div className="card card0 border-0">
          <div className="row d-flex">
            <div className="col-lg-6">
              <div className="card1 pb-5">
                <div className="row px-3 justify-content-center mt-4 mb-5 border-line">
                  <div className="py-4"></div>
                  <img
                    src="https://image.freepik.com/free-vector/sign-page-abstract-concept-illustration_335657-3875.jpg"
                    className="image"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card2 card border-0 px-4 py-5">
                <div className="row mb-4 px-3 text ">
                  <h6 className="mb-0 mr-4 mt-2">Sign in with</h6>
                  <div className="facebook text-center mr-3 ">
                    <FontAwesomeIcon icon={faFacebookF} className="fb" />
                  </div>

                  <div className="twitter text-center mr-3">
                    <FontAwesomeIcon icon={faTwitter} className="twit" />
                  </div>
                  <div className="linkedin text-center mr-3">
                    <FontAwesomeIcon icon={faLinkedin} className="lk" />
                  </div>
                </div>
                <div className="row px-3 mb-4">
                  <div className="line"></div>
                  <small className="or text-center">Or</small>
                  <div className="line"></div>
                </div>
                <div className="row px-3">
                  <label className="mb-1">
                    <h6 className="mb-0 text-sm">Nama</h6>
                  </label>
                  <input
                    className="mb-4 input"
                    type="text"
                    value={nama_user}
                    onChange={(e) => setNama_user(e.target.value)}
                    placeholder="Masukkan Nama"
                  />
                </div>
                <div className="row px-3">
                  <label className="mb-1">
                    <h6 className="mb-0 text-sm">Email Address</h6>
                  </label>
                  <input
                    className="mb-4 input"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter a valid email address"
                  />
                </div>
                <div className="row px-3">
                  <label className="mb-1">
                    <h6 className="mb-0 text-sm"> Create Password</h6>
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    className="input"
                  />
                </div>

                <div className="row mb-3 px-3">
                  <button
                    type="submit"
                    className="btn btn-blue text-center"
                    onClick={registerHandler}
                  >
                    Register
                  </button>
                </div>

                <div className="row mb-4 px-3">
                  <small className="font-weight-bold">
                    Do you have an account?
                    <Link href="/login">
                      <a className="text-danger "> Login</a>
                    </Link>
                  </small>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-blue py-4">
            <div className="row px-3">
              <small className="ml-4 ml-sm-5 mb-2">
                Copyright &copy; M Clean. All rights reserved.
              </small>
              <div className="social-contact ml-4 ml-sm-auto">
                <span className="fa fa-facebook mr-4 text-sm"></span>
                <span className="fa fa-google-plus mr-4 text-sm"></span>
                <span className="fa fa-linkedin mr-4 text-sm"></span>
                <span className="fa fa-twitter mr-4 mr-sm-5 text-sm"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
