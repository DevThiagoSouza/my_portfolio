"use client";

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
} from "@chakra-ui/react";
import Eu from "../components/img/eu-eu-fundo.png";

export default function About() {
  return (
    <Center py={6}>
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
        {/* <Text fontWeight={600} color={'gray.500'} mb={4}>
          @lindsey_jam3s
        </Text> */}
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

        <Heading fontSize={"2xl"} fontFamily={"body"}>
          About
        </Heading>
        {/* <Text fontWeight={600} color={'gray.500'} mb={4}>
          @lindsey_jam3s
        </Text> */}
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

        <Heading fontSize={"2xl"} fontFamily={"body"}>
          Activities and Interests
        </Heading>
        {/* <Text fontWeight={600} color={'gray.500'} mb={4}>
          @lindsey_jam3s
        </Text> */}
        <Text
          textAlign={"center"}
          color={useColorModeValue("gray.700", "gray.400")}
          px={3}
        >
          I love playing video games, playing football, skateboarding, reading
          good books, studying new technologies, listening to music{" "}
        </Text>
      </Box>
    </Center>
  );
}
