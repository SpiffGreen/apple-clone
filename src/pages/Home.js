import React from "react";

import Nav from "../components/Nav";
import Footer from "../components/Footer";

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
        <div>
          <h1 className="bigText">iPad Pro</h1>
          <h3 className="midText">Supercharged by the Apple M1 chip.</h3>
          <a href="#learnmore" className="smallText">Learn more &rang;</a>
        </div>
        <div>
          <h1 className="bigText">iPad Pro</h1>
          <h3 className="midText">Supercharged by the Apple M1 chip.</h3>
          <a href="#learnmore" className="smallText">Learn more &rang;</a>
        </div>
        <div>
          <h1 className="bigText">iPad Pro</h1>
          <h3 className="midText">Supercharged by the Apple M1 chip.</h3>
          <a href="#learnmore" className="smallText">Learn more &rang;</a>
        </div>
        <div>
          <h1 className="bigText">iPad Pro</h1>
          <h3 className="midText">Supercharged by the Apple M1 chip.</h3>
          <a href="#learnmore" className="smallText">Learn more &rang;</a>
        </div>
      </aside>
      <Footer />
    </>
  );
}

export default Home;