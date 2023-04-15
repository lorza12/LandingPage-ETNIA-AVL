import Footer from "@/components/footer/footer";
import Banner from "@/components/banner/banner";
import KnowUs from "@/components/knowUs/knowUs";
import Products from "@/components/products/products";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Banner />
      <KnowUs />
      <Products />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
