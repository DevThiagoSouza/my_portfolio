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

export const App = () => (
  <ChakraProvider theme={theme}>
    <Nav />
    {/* <Hero /> */}
    <About/>
    {/* <Curriculum/> */}
    {/* <Skiil/> */}
  </ChakraProvider>
);
