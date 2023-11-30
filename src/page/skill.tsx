"use client";

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  color,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import {
  SiSpring,
  SiCsharp,
  SiDotNet,
  SiMysql,
  SiMicrosoftsqlserver,
  SiMongodb,
  SiDocker,
  SiJenkins,
  SiAmazonaws,
  SiSonarqube,
  SiApachekafka,
  SiGit,
  SiGithub,
  SiBitbucket,
  SiLinux,
  SiWindows,
} from "react-icons/si";

import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiBootstrap,
  DiReact,
  DiJava,
} from "react-icons/di";

interface CardProps {
  heading: string;
  icon: ReactElement;
  href: string;
}

const Card = ({ heading, icon, href }: CardProps) => {
  return (
    <Box
      id="skill"
      maxW={{ base: "full", md: "275px" }}
      w={"full"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="dark-lg"
      rounded="md"
      bg="white"
      justifyContent="center"
      display="flex"
      alignItems="center"
      textAlign="center"
      p={5}
      color={"gray.600"}
    >
      <Stack
        justifyContent="center"
        display="flex"
        alignItems="center"
        spacing={2}
      >
        <Flex
          w={16}
          h={16}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          bg={useColorModeValue("gray.300", "gray.700")}
        >
          {icon}
        </Flex>
        <Heading size="md">{heading}</Heading>
      </Stack>
    </Box>
  );
};

export default function Skiil() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
          Slills
        </Heading>
        <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
          programming libguem, library and frameworks that I have worked and
          studied
        </Text>
      </Stack>
      <Heading
        fontSize={{ base: "2xl", sm: "4xl" }}
        fontWeight={"bold"}
        textAlign="center"
        marginTop="2em"
      >
        Front-end
      </Heading>

      <Container maxW={"5xl"} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card
            heading={"HTML"}
            icon={
              <Icon as={DiHtml5} w={10} h={10} _hover={{ color: "#e54c21" }} />
            }
            href={"#"}
          />
          <Card
            heading={"CSS"}
            icon={
              <Icon as={DiCss3} w={10} h={10} _hover={{ color: "#379ad6" }} />
            }
            href={"#"}
          />
          <Card
            heading={"JavaScript"}
            icon={
              <Icon
                as={DiJsBadge}
                w={10}
                h={10}
                _hover={{ color: "#f7e018" }}
              />
            }
            href={"#"}
          />
          <Card
            heading={"Bootstrap"}
            icon={
              <Icon
                as={DiBootstrap}
                w={10}
                h={10}
                _hover={{ color: "#830afa" }}
              />
            }
            href={"#"}
          />
          <Card
            heading={"React "}
            icon={
              <Icon as={DiReact} w={10} h={10} _hover={{ color: "#61dafc" }} />
            }
            href={"#"}
          />
        </Flex>
      </Container>

      <Heading
        fontSize={{ base: "2xl", sm: "4xl" }}
        fontWeight={"bold"}
        textAlign="center"
        marginTop="2em"
      >
        Back-end
      </Heading>

      <Container maxW={"5xl"} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card
            heading={"Java"}
            icon={
              <Icon as={DiJava} w={10} h={10} _hover={{ color: "#0971b4" }} />
            }
            href={"#"}
          />
          <Card
            heading={"SpringBoot"}
            icon={
              <Icon as={SiSpring} w={10} h={10} _hover={{ color: "#61ae29" }} />
            }
            href={"#"}
          />
          <Card
            heading={"C#"}
            icon={
              <Icon as={SiCsharp} w={10} h={10} _hover={{ color: "#9a4993" }} />
            }
            href={"#"}
          />
          <Card
            heading={".NET"}
            icon={
              <Icon as={SiDotNet} w={10} h={10} _hover={{ color: "#084d90" }} />
            }
            href={"#"}
          />
        </Flex>
      </Container>
      <Heading
        fontSize={{ base: "2xl", sm: "4xl" }}
        fontWeight={"bold"}
        textAlign="center"
        marginTop="2em"
      >
        Data Base
      </Heading>

      <Container maxW={"5xl"} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card
            heading={"MySql"}
            icon={
              <Icon as={SiMysql} w={10} h={10} _hover={{ color: "#e69208" }} />
            }
            href={"#"}
          />
          <Card
            heading={"Sql Server"}
            icon={
              <Icon
                as={SiMicrosoftsqlserver}
                w={10}
                h={10}
                _hover={{ color: "#087dd7" }}
              />
            }
            href={"#"}
          />
          <Card
            heading={"Mongo DB"}
            icon={
              <Icon
                as={SiMongodb}
                w={10}
                h={10}
                _hover={{ color: "#55ad47" }}
              />
            }
            href={"#"}
          />
        </Flex>
      </Container>

      <Heading
        fontSize={{ base: "2xl", sm: "4xl" }}
        fontWeight={"bold"}
        textAlign="center"
        marginTop="2em"
      >
        Cloud + Containerization + CI/CD + Messaging
      </Heading>

      <Container maxW={"5xl"} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card
            heading={"Docker"}
            icon={
              <Icon as={SiDocker} w={10} h={10} _hover={{ color: "#2497ed" }} />
            }
            href={"#"}
          />
          <Card
            heading={"Jenkins"}
            icon={
              <Icon
                as={SiJenkins}
                w={10}
                h={10}
                _hover={{ color: "#e32a38" }}
              />
            }
            href={"#"}
          />
          <Card
            heading={"AWS"}
            icon={
              <Icon
                as={SiAmazonaws}
                w={10}
                h={10}
                _hover={{ color: "#000000" }}
              />
            }
            href={"#"}
          />
          <Card
            heading={"Sonarqube"}
            icon={
              <Icon
                as={SiSonarqube}
                w={10}
                h={10}
                _hover={{ color: "#000000" }}
              />
            }
            href={"#"}
          />
          <Card
            heading={"Kafka"}
            icon={
              <Icon
                as={SiApachekafka}
                w={10}
                h={10}
                _hover={{ color: "#000000" }}
              />
            }
            href={"#"}
          />
        </Flex>
      </Container>

      <Heading
        fontSize={{ base: "2xl", sm: "4xl" }}
        fontWeight={"bold"}
        textAlign="center"
        marginTop="2em"
      >
        Repository
      </Heading>

      <Container maxW={"5xl"} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card
            heading={"Git"}
            icon={
              <Icon as={SiGit} w={10} h={10} _hover={{ color: "#f05539" }} />
            }
            href={"#"}
          />
          <Card
            heading={"GitHub"}
            icon={
              <Icon as={SiGithub} w={10} h={10} _hover={{ color: "#000000" }} />
            }
            href={"#"}
          />
          <Card
            heading={"Bitbucket"}
            icon={
              <Icon
                as={SiBitbucket}
                w={10}
                h={10}
                _hover={{ color: "#2d88ff" }}
              />
            }
            href={"#"}
          />
        </Flex>
      </Container>
      <Heading
        fontSize={{ base: "2xl", sm: "4xl" }}
        fontWeight={"bold"}
        textAlign="center"
        marginTop="2em"
      >
        Operational System
      </Heading>

      <Container maxW={"5xl"} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card
            heading={"Linux"}
            icon={
              <Icon as={SiLinux} w={10} h={10} _hover={{ color: "#000000" }} />
            }
            href={"#"}
          />
          <Card
            heading={"Windows"}
            icon={
              <Icon
                as={SiWindows}
                w={10}
                h={10}
                _hover={{ color: "#0078d7" }}
              />
            }
            href={"#"}
          />
        </Flex>
      </Container>
    </Box>
  );
}
