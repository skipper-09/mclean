//@ts-check
import {
  faFacebookF,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import Layout from "../../components/Layout";
export default function login() {
  return (
    <div>
      <Layout title="Login" />
      <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
        <div className="card card0 border-0">
          <div className="row d-flex">
            <div className="col-lg-6">
              <div className="card1 pb-5">
                <div className="row px-3 justify-content-center mt-4 mb-5 border-line">
                  <div className="py-4"></div>
                  <img
                    src="https://image.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg"
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
                    <FontAwesomeIcon icon={faFacebookF} />
                  </div>

                  <div className="twitter text-center mr-3">
                    <FontAwesomeIcon icon={faTwitter} size="3x" />
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
                    <h6 className="mb-0 text-sm">Email Address</h6>
                  </label>
                  <input
                    className="mb-4 input"
                    type="text"
                    name="email"
                    placeholder="Enter a valid email address"
                  />
                </div>
                <div className="row px-3">
                  <label className="mb-1">
                    <h6 className="mb-0 text-sm">Password</h6>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    className="input"
                  />
                </div>

                <div className="row mb-3 px-3">
                  <Link href="/admin">
                    <button type="submit" className="btn btn-blue text-center">
                      Login
                    </button>
                  </Link>
                </div>
                <div className="row px-3 mb-4">
                  <Link href="/reset-password">
                    <a className="ml-auto mb-0 text-sm">Forgot Password?</a>
                  </Link>
                </div>
                <div className="row mb-4 px-3">
                  <small className="font-weight-bold">
                    Don't have an account?
                    <Link href="/register">
                      <a className="text-danger "> Register</a>
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
