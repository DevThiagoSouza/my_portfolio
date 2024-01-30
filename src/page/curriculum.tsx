
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
  Divider,
} from "@chakra-ui/react";
import { MdLocalShipping } from "react-icons/md";
import Eu from "../components/img/eu-eu-fundo.png";

export default function Curriculum() {
  return (
    <>
    <Container maxW={"7xl"} id="curriculum" marginTop="5em">
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Image
            rounded={"md"}
            alt={""}
            src={Eu}
            fit={"cover"}
            align={"center"}
            w={"70%"}
            h={{ base: "100%", sm: "500px", lg: "500px" }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              Thiago Soares de Souza
            </Heading>
            <Text
              color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={300}
              fontSize={"2xl"}
            >
              Software Developer
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >

            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Information
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={2}>
                  <ListItem>Address : Av. Santa Eliza</ListItem>
                  <ListItem>District : Corupirra Jundiai-SP</ListItem>{" "}
                  <ListItem>Zip code : 13214-821</ListItem>
                </List>
                <List spacing={2}>
                  <ListItem>contact : +55(11)973603554</ListItem>
                  <ListItem>
                    E-mail : thiago.soares.de.souza@hotmail.com
                  </ListItem>
                </List>
              </SimpleGrid>
            </Box>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Education
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Graduation :
                  </Text>{" "}
                  Análise e Desenvolvimento de Sistemas - Universidade Paulista
                  - UNIP
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Complementary course :
                  </Text>{" "}
                  AWS Discovery Day - Instituição KA Solution
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Complementary course :
                  </Text>{" "}
                  C# Curso Completo do Básico ao Avançado - Instituição Udemy
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Complementary course :
                  </Text>{" "}
                  Apache Kafka - Instituição Udemy
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Complementary course :
                  </Text>{" "}
                  Desenvolvimeto Android e ios com Flutter 2021 - Instituição
                  Udemy
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Complementary course :
                  </Text>{" "}
                  Desenvolvendo a Blockchain - Instituição Senai São Paulo
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Complementary course :
                  </Text>{" "}
                  Produtividade com VSCode - Instituição Cod3r
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Complementary course :
                  </Text>{" "}
                  Python 3 - Curso Rápido [2020] - Instituição Cod3r
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Complementary course :
                  </Text>{" "}
                  Fundamentos de Javascript Funcional - Instituição Cod3r
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Complementary course :
                  </Text>{" "}
                  Linguagem de Programação C# - Avançado - Instituição Fundação Bradesco
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Complementary course :
                  </Text>{" "}
                  Bootcamp: IA Generativa com AWS - Instituição Trybe
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Complementary course :
                  </Text>{" "}
                  Cybersecurity - Instituição Fiap
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Complementary course :
                  </Text>{" "}
                  Cloud Fudamentals, Administration and Solution Architect - Instituição Fiap
                </ListItem>
              </List>
            </Box>

            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Work Experience
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Empresa :
                  </Text>{" "}
                  LMSE Soluções Educacionais corporativas sob medida
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Cargo :
                  </Text>{" "}
                  Desenvolvedor Full Stack
                </ListItem>
                <Divider orientation="horizontal" />
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Empresa :
                  </Text>{" "}
                  Summit-Bra LTDA
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Cargo :
                  </Text>{" "}
                  Desenvolvedor de Software jr
                </ListItem>
                <Divider orientation="horizontal" />
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Empresa :
                  </Text>{" "}
                  Seibu Alimentos LTDA
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Cargo :
                  </Text>{" "}
                  Atendente
                </ListItem>
                <Divider orientation="horizontal" />
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Empresa :
                  </Text>{" "}
                  NTM Comercio e Serviços LTDA
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Cargo :
                  </Text>{" "}
                  Atendente de Loja
                </ListItem>
                <Divider orientation="horizontal" />
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Empresa :
                  </Text>{" "}
                  Cinepólis Operadora de Cinema no Brasil LTDA
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Cargo :
                  </Text>{" "}
                  Atendente
                </ListItem>
                <Divider orientation="horizontal" />
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Empresa :
                  </Text>{" "}
                  Lumani Artefatos de Metais ME
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Cargo :
                  </Text>{" "}
                  Ajudante Geral
                </ListItem>
                <Divider orientation="horizontal" />
              </List>
              <Box marginTop={7}>
                <Text
                  fontSize={{ base: "16px", lg: "18px" }}
                  color={useColorModeValue("yellow.500", "yellow.300")}
                  fontWeight={"500"}
                  textTransform={"uppercase"}
                  mb={"4"}
                >
                  Technical Expertise
                </Text>
                <Text>
                  I have been working as a software developer for 4 years, and I
                  am always looking for new knowledge and improvement in this
                  area. I worked on projects with C# and Java languages with
                  Spring Boot to back-end and React for front-end. I have
                  knowledge in agile methods, MYSQL and SQL databases. I am open
                  to new opportunities and projects.
                </Text>
              </Box>
            </Box>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
    <Divider orientation="horizontal" marginTop="5em" />
    </>
  );
}
