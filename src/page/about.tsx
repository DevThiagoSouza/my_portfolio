
import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
  Icon,
  useDisclosure,
  Divider,
} from "@chakra-ui/react";
import Eu from "../components/img/eu-eu-fundo.png";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

import { SiPlaystation } from "react-icons/si";
import { DiCode } from "react-icons/di";
import { CgCoffee } from "react-icons/cg";
import { FaLaptopCode } from "react-icons/fa";
import { FaGamepad } from "react-icons/fa";
import React from "react";

export default function About() {

  return (
    <>
    <Center py={6} id="about" >
      <Box
        maxW={"620px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"lg"}
        p={6}
        textAlign={"center"}
      >
        <Avatar
          size={"xl"}
          src={Eu}
          mb={4}
          pos={"relative"}
          _after={{
            content: '""',
            w: 4,
            h: 4,
            rounded: "full",
            pos: "absolute",
            bottom: 0,
            right: 3,
          }}
        />
        <Heading fontSize={"2xl"} fontFamily={"body"}>
          Thiago Soares de Souza
        </Heading>
        <Text
          textAlign={"center"}
          color={useColorModeValue("gray.700", "gray.400")}
          px={3}
        >
          age: 29,
          <br />
          Address: Av. Santa Elisa,
          <br />
          City: Jundiai-SP,
          <br />
          Country: Brazil{" "}
        </Text>

        <Heading fontSize={"2xl"} fontFamily={"body"} marginTop={7}>
          About
        </Heading>
        <Text
          textAlign={"center"}
          color={useColorModeValue("gray.700", "gray.400")}
          px={3}
        >
          Passionate about technology, I always seek more knowledge in the area,
          studying and participating in workshops. Although I have never worked
          directly in the area, in my professional experiences, my knowledge has
          always helped in situations that required more technical knowledge. I
          also add experience with customer service.{" "}
        </Text>

        <Heading fontSize={"2xl"} fontFamily={"body"} marginTop={7}>
          Activities and Interests
        </Heading>
        <Text
          textAlign={"center"}
          color={useColorModeValue("gray.700", "gray.400")}
          px={3}
        >
          I love playing video games, playing football, skateboarding, reading
          good books, studying new technologies, listening to music{" "}
        </Text>
        <Stack direction={{base:"column" ,md:"row"}} padding="2em 2em" gap="1em">
          <Box justifyContent="center" display="flex" gap="1em">
          <Icon as={HiOutlineMail} w={7} h={7} />
          <Text>thiago.soares.de.souza@hotmail.com</Text>
          </Box>
          <Box justifyContent="center" display="flex" gap="1em">
          <Icon as={HiOutlinePhone} w={7} h={7} />
          <Text>+55 (11)973603554 </Text>
          </Box>
        </Stack>
        <Stack
          direction="row"
          padding="2em 2em"
          gap="1em"
          display="flex"
          justifyContent="center"
        >
          <Icon as={FaGamepad} w={10} h={10} />
          <Icon as={SiPlaystation} w={10} h={10} />
          <Icon as={DiCode} w={10} h={10} />
          <Icon as={CgCoffee} w={10} h={10} />
          <Icon as={FaLaptopCode} w={10} h={10} />
        </Stack>
      </Box>
    </Center>
    <Divider orientation="horizontal" marginTop="5em" />
    </>
  );
}
