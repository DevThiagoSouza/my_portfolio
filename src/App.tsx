import * as React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Logo } from "./Logo";
import Nav from "./page/navbar";
import Hero from "./page/hero";
import About from "./page/about";
import Curriculum from "./page/curriculum";
import Skiil from "./page/skill";
import Project from "./page/projects";
import Contact from "./page/contact";
import Footer from "./page/footer";





export const App = () => (
  <ChakraProvider theme={theme}>
    <Nav />
    <Hero />
    <About/>
    <Project/>
    <Curriculum/>
    <Skiil/> 
    <Contact/>
    <Footer/>
  </ChakraProvider>
);
