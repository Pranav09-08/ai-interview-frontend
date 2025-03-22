import React from "react";
import { AppProps } from "next/app";  // Next.js AppProps type
import "../styles/globals.css";       // Import global CSS if you have it

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
