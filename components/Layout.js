import React from "react";
import Head from "next/head";
export default function Layout(props) {
  return (
    <div>
      <Head>
        <title>M Clean | {props.title}</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
          crossOrigin="anonymous"
        ></link>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
          crossOrigin="anonymous"
        ></script>
        {/* <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />

        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script> */}

        <link
          href="https://w7.pngwing.com/pngs/240/987/png-transparent-home-cleaning-service-illustration-maid-service-cleaner-carpet-cleaning-housekeeping-house-icon-text-janitor-vacuum-cleaner-thumbnail.png"
          rel="icon"
        ></link>
      </Head>
      {props.children}
    </div>
  );
}
