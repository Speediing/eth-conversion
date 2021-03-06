import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import ConversionArea from "../components/ConversionArea";

const Home: NextPage = () => {
  return (
    <div className="bg-black h-max">
      <Head>
        <title>Eth Conversion</title>
        <meta name="Convert Eth Units" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-black absolute top-0 bottom-0 left-0 right-0">
        <Header />
        <ConversionArea />
      </main>
    </div>
  );
};

export default Home;
