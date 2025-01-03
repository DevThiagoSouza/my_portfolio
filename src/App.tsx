import * as React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  theme,
} from "@chakra-ui/react";
import Nav from "./page/navbar";
import Hero from "./page/hero";
import About from "./page/about";
import Curriculum from "./page/curriculum";
import Skiil from "./page/skill";
import Project from "./page/projects";
import Contact from "./page/contact";
import Footer from "./page/footer";
import "./App.css";

const FadeInOnScroll = ({ children }: { children: React.ReactNode }) => {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          }
        });
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className="fade-element">
      {children}
    </div>
  );
};

export const App = () => (
  <ChakraProvider theme={theme}>
    <Nav />
    <Hero /> 
    <FadeInOnScroll>
      <About />
    </FadeInOnScroll>
    <FadeInOnScroll>
      <Project />
    </FadeInOnScroll>
    <FadeInOnScroll>
      <Curriculum />
    </FadeInOnScroll>
    <FadeInOnScroll>
      <Skiil />
    </FadeInOnScroll>
    <FadeInOnScroll>
      <Contact />
    </FadeInOnScroll>
    <FadeInOnScroll>
      <Footer />
    </FadeInOnScroll>
  </ChakraProvider>
);
