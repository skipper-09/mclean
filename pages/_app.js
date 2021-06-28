// CSS
import "bootstrap/dist/css/bootstrap.min.css";

import "../styles/admin.css";
import "../styles/style.css";
import "../assets/vendor/bootstrap-icons/bootstrap-icons.css";

import { AnimateSharedLayout } from "framer-motion";
function MyApp({ Component, pageProps }) {
  return (
    <AnimateSharedLayout>
      {/* <script>AOS.init();</script> */}
      <Component {...pageProps} />
    </AnimateSharedLayout>
  );
}

export default MyApp;
