import React from "react";

import Nav from "../components/Nav";
import Footer from "../components/Footer";

function Home() {

  return (
    <>
      <Nav />
      <main>
        <section className="iphone12 banner">
          iphone 12
        </section>
        <section className="iphone12Pro">
          iphone 12 Pro
        </section>
        <section className="ipadpro">
          ipad pro
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;