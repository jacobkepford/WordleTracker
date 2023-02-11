import "../styles/globals.css";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.css";
import { NavBar } from "../components/navbar";
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <NavBar></NavBar>
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;
