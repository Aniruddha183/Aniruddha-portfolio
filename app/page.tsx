"use client";

import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Education from "../components/Education";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { ArrowUpIcon } from "../components/Icons";
import { useTheme } from "../components/ThemeProvider";

const PortfolioPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const { theme } = useTheme();

  const handleScroll = () => {
    const offset = window.pageYOffset;
    setScrollY(offset);

    if (offset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
    if (offset > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll(".section-fade-in");
    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const backgroundClass =
    theme === "dark"
      ? "bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.03),rgba(255,255,255,0.03)_1px,transparent_1px,transparent_20px)]"
      : "";

  return (
    <div className={`relative antialiased ${backgroundClass}`}>
      <Header isScrolled={isScrolled} />
      <main className="px-4 py-10 md:py-20 max-w-3xl mx-auto">
        <section className="section-fade-in">
          <Hero scrollY={scrollY} />
        </section>
        <section id="experience" className="section-fade-in">
          <About />
        </section>
        <section className="section-fade-in">
          <Skills />
        </section>
        <section id="projects" className="section-fade-in">
          <Projects />
        </section>
        <section id="education" className="section-fade-in">
          <Education />
        </section>
        <section className="section-fade-in">
          <Contact />
        </section>
      </main>
      <Footer />
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gray-700 dark:bg-gray-800 border border-gray-600 dark:border-gray-700 text-gray-200 dark:text-gray-300 p-3 rounded-full shadow-lg hover:bg-gray-600 dark:hover:bg-gray-700 transition-all duration-300 z-50"
          aria-label="Go to top"
        >
          <ArrowUpIcon className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default PortfolioPage;
