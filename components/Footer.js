//@ts-check
export default function Footer() {
  return (
    <div>
      <footer id="footer" className="footer">
        {/* <div className="footer-newsletter">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12 text-center">
                <h4>Berlangganan Email</h4>
                <p>
                  Tamen quem nulla quae legam multos aute sint culpa legam
                  noster magna
                </p>
              </div>
              <div className="col-lg-6">
                <form action="" method="post">
                  <input type="email" name="email" />
                  <input type="submit" value="Subscribe" />
                </form>
              </div>
            </div>
          </div>
        </div> */}

        <div className="container">
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>M Clean</span>
            </strong>
            . All Rights Reserved
          </div>
          <div className="credits">
            Designed by <a href="">M Clean</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
