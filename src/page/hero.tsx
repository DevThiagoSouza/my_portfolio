
import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Heading,
  Icon,
  Image,
  Link,
  Stack,
  Text,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";
import Eu from "../components/img/fundo.png";
import React, { useEffect } from "react";
import About from "./about";



export default function Hero() {
  const boxWidth = useBreakpointValue({ base: "100vw", md: "45vw" });
  const boxHeight = useBreakpointValue({ base: "30vh", md: "50vh" });
  const margin = useBreakpointValue({ base: "1em", md: "13em" });

  
  const { isOpen, onToggle } = useDisclosure();

  useEffect(() => {
    const timer = setInterval(onToggle, 1000); // Ajuste o intervalo para controlar a velocidade do piscar
    return () => clearInterval(timer);
  }, [onToggle]);



  return (
    <>
        <Box
      bg={isOpen ? "yellow.300" : "gray.300"} // Alterne entre as cores para simular o piscar
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
              Welcome
            </Text>
            <br />{" "}
            <Text color={"blue.400"} as={"span"}>
              to my portfolio
            </Text>{" "}
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            Hi, my name is Thiago Souza, I'm a Brazilian software developer.
            Through this portfolio I will show a little about myself and my
            experiences
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button
               as="a"
              href="#about"
           //   padding={".5rem 1rem"}
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
            
            <Button rounded={"full"} as={Link} href="#skill">
              My skills
            </Button>
          </Stack>
          <Stack direction="row" gap="1em" justifyContent={{base:"center" , md:"start"}} display="flex">
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
      <Flex flex={1} >
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
