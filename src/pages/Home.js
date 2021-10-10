import React from "react";

import Nav from "../components/Nav";
import Footer from "../components/Footer";

import ipad from "../assets/images/logo-tile__ec23lf7d072a_large.png";

function Home() {

  return (
    <>
      <Nav />
      <main>
        <section className="iphone12 banner">
          <h1 className="bigText">iPhone 12</h1>
          <h3 className="midText">Blast past fast.</h3>
          <a href="#learnmore" className="smallText">Learn more &rang;</a>
        </section>
        <section className="iphone12Pro">
          <h1 className="bigText">iPhone 12 Pro</h1>
          <h3 className="midText">It's a leap year</h3>
          <a href="#learnmore" className="smallText">Learn more &rang;</a>
        </section>
        <section className="ipadpro">
          <h1 className="bigText">iPad Pro</h1>
          <h3 className="midText">Supercharged by the Apple M1 chip.</h3>
          <a href="#learnmore" className="smallText">Learn more &rang;</a>
        </section>
      </main>
      <aside>
        <div className="imac">
          <h1>iMac</h1>
          <h3>Say hello.</h3>
          <a href="#learnmore" className="smallerText">Learn more &rang;</a>
        </div>
        <div className="airtag">
          <h1>AirTag</h1>
          <h3>Lose your knack for loosing things.</h3>
          <a href="#learnmore" className="smallerText">Learn more &rang;</a>
        </div>
        <div className="airpod">
          <h1>AirPods Max</h1>
          {/* <h3 className="midText">Supercharged by the Apple M1 chip.</h3> */}
          <a href="#learnmore" className="smallerText">Learn more &rang;</a>
        </div>
        <div className="ipad">
          {/* <h1>iPad</h1> */}
          <img src={ipad} alt="ipad" width={100} />
          <h3>Delightfully capable.<br />Surprisingly affordable.</h3>
          <a href="#learnmore" className="smallerText">Learn more &rang;</a>
        </div>
      </aside>
      <Footer />
    </>
  );
}

export default Home;