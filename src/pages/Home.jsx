import React from "react";
import Header from "../component/Header";
import Hero from "../component/Hero";
import About from "../component/About";
import Counts from "../component/Counts";
import Service from "../component/Service";
import Cta from "../component/Cta";
import Features from "../component/Features";
import Clients from "../component/Clients";
import Pricing from "../component/Pricing";
import Question from "../component/Question";
import Contact from "../component/Contact";
import Footer from "../component/Footer";
import Btt from "../component/Btt";

function Home() {

  return (
    <div>
      <>
        <Header />
        <Hero />
        <main id="main">
          <Counts />
          <About />
          <Service />
          <Cta />
          <Features />
          <Clients />
          <Pricing />
          <Question />
          <Contact />
        </main>
        <Footer />
        <a
          href="#"
          className="back-to-top d-flex align-items-center justify-content-center"
        >
          <i className="bi bi-arrow-up-short" />
        </a>
      </>
    </div>
  );
}

export default Home;
