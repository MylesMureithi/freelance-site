import { useState } from "react";
import { PACKAGES } from "./data/site";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Steps from "./components/Steps";
import Payments from "./components/Payments";
import FAQ from "./components/FAQ";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function App() {
  const [pkgTitle, setPkgTitle] = useState(PACKAGES[0].title);

  return (
    <>
      <Header />
      <main id="top">
        <Hero selected={pkgTitle} onSelect={setPkgTitle} />
        <Work />
        <Steps />
        <Payments />
        <FAQ />
        <ContactForm selected={pkgTitle} onSelect={setPkgTitle} />
      </main>
      <Footer />
    </>
  );
}