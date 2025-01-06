import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Icon,
  Image,
  Link,
  Stack,
  Text,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import { AiFillLinkedin, AiFillGithub, AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { TypeAnimation } from 'react-type-animation'; 
import Eu from "../components/img/fundo.png";
import GraphemeSplitter from 'grapheme-splitter'; 

export default function Hero() {
  const boxWidth = useBreakpointValue({ base: "100vw", md: "45vw" });
  const boxHeight = useBreakpointValue({ base: "30vh", md: "50vh" });
  const margin = useBreakpointValue({ base: "1em", md: "13em" });

  const { isOpen, onToggle } = useDisclosure();

  const splitter = new GraphemeSplitter();

  return (
    <>
      <Box
        bg={isOpen ? "yellow.300" : "gray.300"}
        borderRadius="full"
        w="10"
        h="10"
      />
      <Stack maxH={"90vh"} direction={{ base: "column", md: "row" }} id="hero">
        <Flex
          p={8}
          flex={1}
          align={"center"}
          justify={"center"}
          overflow="hidden"
        >
          <Stack spacing={6} w={"full"} maxW={"lg"}>
            <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
              <Text
                as={"span"}
                position={"relative"}
                _after={{
                  content: "''",
                  width: "full",
                  height: useBreakpointValue({ base: "20%", md: "30%" }),
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  bg: "blue.400",
                  zIndex: -1,
                }}
              >
                <TypeAnimation
                  cursor={false} 
                  repeat={Infinity} 
                  sequence={[
                    "Welcome",
                    2000, 
                    "Bienvenido",
                    1000, 
                    "Bienvenue",
                    2000, 
                    "Bem-vindo",
                    2000, 
                    "Willkommen",
                    1000, 
                    "欢迎 ",
                    1500, 
                    "ようこそ",
                    1000, 
                    "환영합니다",
                    1000, 
                  ]}
                  wrapper="span"
                  speed={50} 
                  deletionSpeed={90}
                />
              </Text>
              <br />
              <Text color={"blue.400"} as={"span"}>
              <TypeAnimation
                  cursor={false} 
                  repeat={Infinity}
                  sequence={[
                    " to my portfolio",
                    1000, 
                    " a mi portafolio",
                    1000, 
                    " sur mon portfolio",
                    1000, 
                    " ao meu portfólio",
                    1000,
                    " in meinem Portfolio",
                    1000,
                    "欢迎我的作品集",
                    1000,
                    "私のポートフォリオへ",
                    1000,
                    " 제 포트폴리오에",
                    1000, 
                  ]}
                  wrapper="span"
                  speed={50} 
                  deletionSpeed={90}
                />
              </Text>
            </Heading>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
              Hi, my name is Thiago Souza, I'm a Brazilian software developer.
              Through this portfolio I will show a little about myself and my
              experiences.
            </Text>
            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
              <Button
                as="a"
                href="#about"
                fontWeight={"medium"}
                rounded={"full"}
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                More about Thiago
              </Button>

              <Button rounded={"full"} as={Link} href="#skill" bgColor={"gray.600"} _hover={{textDecoration:"none", bg: "gray.5      00"}}>
                My skills
              </Button>
            </Stack>
            <Stack
              direction="row"
              gap="1em"
              justifyContent={{ base: "center", md: "start" }}
              display="flex"
            >
              <Link href="https://www.linkedin.com/in/thiago-soares-692a94145/">
                <Icon
                  as={AiFillLinkedin}
                  boxSize="2em"
                  _hover={{ marginTop: "-0.8em", transition: "0.8s" }}
                ></Icon>
              </Link>
              <Link href="https://github.com/DevThiagoSouza?tab=repositories">
                <Icon
                  as={AiFillGithub}
                  boxSize="2em"
                  _hover={{ marginTop: "-0.8em", transition: "0.8s" }}
                ></Icon>
              </Link>
              <Link href="https://www.facebook.com/thiaguinho.soares.37?mibextid=ZbWKwL">
                <Icon
                  as={AiFillFacebook}
                  boxSize="2em"
                  _hover={{ marginTop: "-0.8em", transition: "0.8s" }}
                ></Icon>
              </Link>
              <Link href="https://instagram.com/_thiaguinho_souza_?igshid=MzMyNGUyNmU2YQ==">
                <Icon
                  as={AiFillInstagram}
                  boxSize="2em"
                  _hover={{ marginTop: "-0.8em", transition: "0.8s" }}
                ></Icon>
              </Link>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Box
            bgColor={"blue.400"}
            width={boxWidth}
            height={boxHeight}
            borderTopLeftRadius="10em"
            borderBottomRightRadius="10em"
            marginTop={margin}
            display="flex"
            justifyContent="center"
          >
            <Image alt={""} objectFit={"cover"} src={Eu} />
          </Box>
        </Flex>
      </Stack>
      <Divider orientation="horizontal" marginTop="5em" />
    </>
  );
}
