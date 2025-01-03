import React from 'react';
import { Box, Image, Text, Grid, GridItem, Badge, Stack, Heading, Container, Button, useColorModeValue, Link } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import dotnet from "../components/img/github_img/dotnet.png";
import gameshop from "../components/img/github_img/flutter_dart.png";
import whatsapp from "../components/img/github_img/flutter_firebase.png";
import springAws from "../components/img/github_img/spring-boot-aws.png";
import springKafka from "../components/img/github_img/spring-kafka.png";
import springMongo from "../components/img/github_img/spring-mongo.png";
import golang from "../components/img/github_img/golang.png";
import go from "../components/img/github_img/go.png";
import dotnetcore from "../components/img/github_img/dotnetcore.png";
import poseidom from "../components/img/github_img/poseidom.png";

const MotionBox = motion(Box);

const projects = [
  {
    id: 1,
    title: 'DDD.NET--Clean-Architecture',
    skills: ['.net 6', 'Identity','AutoMapper','Linq','JWT','TDD','SQL','Entity Framework Core'],
    imgSrc: dotnet,
    description: 'Descrição breve do Projeto 1. Aqui você pode adicionar um resumo do projeto.',
    link: 'https://github.com/DevThiagoSouza/API_DDD.NET--Clean-Architecture'
  },
  {
    id: 2,
    title: 'Game Shop',
    skills: ['Flutter', 'Dart'],
    imgSrc: gameshop,
    description: 'an app in a game store, using a modern design with provider and best practices.',
    link: 'https://github.com/DevThiagoSouza/Game_Shop'
  },
  {
    id: 3,
    title: 'WhatsApp',
    skills: ['Flutter', 'Dart','firebase'],
    imgSrc: whatsapp,
    description: 'Design of a WhatsApp clone using flutter dart and firebase.',
    link: 'https://github.com/DevThiagoSouza/Whatsapp-in-Flutter'
  },
  {
    id: 4,
    title: 'Email sending AWS SES',
    skills: ['java','Spring Boot', 'AWS SES'],
    imgSrc: springAws,
    description: 'Spring boot API for sending email through AWS SES.',
    link: 'https://github.com/DevThiagoSouza/api_email_sending_aws_ses'
  },
  {
    id: 5,
    title: 'SpringBoot Feign end Kafka',
    skills: ['Java', 'Spring Boot', 'Docker' , 'kafka'],
    imgSrc: springKafka,
    description: 'Api Consumption using Spring Feign with Docker and Kafka.',
    link: 'https://github.com/DevThiagoSouza/SpringBoot_Feign_end_Kafka'
  },
  {
    id: 6,
    title: 'Kafka with Mongo',
    skills: ['java', 'spring boot', 'kafka', 'mongoDB'],
    imgSrc: springMongo,
    description: 'Consuming Kafka Message and Saving it to Mongo DB.',
    link: 'https://github.com/DevThiagoSouza/Kafka_MongoDB'
  },
  {
    id: 7,
    title: 'Bank Api',
    skills: ['GO', 'Gin web framework', 'rabbitmq', 'postgres', 'docker'],
    imgSrc: golang,
    description: 'Api of a bank made in golang that uses concurrency and messaging in rabbitmq.',
    link: 'https://github.com/username/bank-api'
  },
  {
    id: 8,
    title: 'Microservices Monitoring',
    skills: ['GO', 'Gin web framework', 'websocket', 'Mongodb', 'docker', 'jwt','auth','logger'],
    imgSrc: go,
    description: 'Api that monitors multiple microservices.',
    link: 'https://github.com/DevThiagoSouza/Microservices-Monitoring'
  },
  {
    id: 9,
    title: 'Minimal Api',
    skills: ['.net 8', 'Entity Framework Core', 'Migrations', 'Sqlite', 'docker', 'Azure','Swaager','JWT'],
    imgSrc: dotnetcore,
    description: 'a minimal api of a school.',
    link: 'https://github.com/DevThiagoSouza/School_Mininal_Api'
  },
  {
    id: 10,
    title: 'Oficina Poseidon',
    skills: ['HMTL', 'css', 'javascript', 'bootstrap'],
    imgSrc: poseidom,
    description: 'website for the sale and maintenance of fishing equipment that was developed for a client.',
    link: 'https://oficinaposeidon.netlify.app/'
  },
];

export default function Project() {
  const bgColor = { light: "white", dark: "gray.900" };

  return (
    <Box p={8} display="flex" flexDirection="column" justifyContent="center" id="projects">
      <Box mb={8} display="flex" justifyContent="center" w="full" marginBottom="5em">
        <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
          <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
            Projects
          </Heading>
          <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
          Personal projects I am developing.
          </Text>
        </Stack>
      </Box>
      <Grid
        templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
        gap={8}
        autoRows="minmax(300px, auto)"
      >
        {projects.map(project => (
          <GridItem key={project.id}>
            <Link
              href={project.link}
              isExternal
              _focus={{ outline: "none" }}
              _hover={{
                textDecoration: "none", 
                outline: "none", 
              }}
            >
              <MotionBox
                border="1px"
                borderColor="gray.200"
                borderRadius="lg"
                overflow="hidden"
                bg={bgColor}
                boxShadow="md"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                height="100%"
              >
                <Image
                  src={project.imgSrc}
                  alt={project.title}
                  className="w-full h-40 object-cover"
                  style={{ transition: 'transform 0.3s ease' }}
                  _hover={{ transform: 'scale(1.1)' }}
                />
                <Box p={4}>
                  <Text fontSize="xl" fontWeight="bold" mb={2}>{project.title}</Text>
                  <Text color="gray.600" mb={2}>{project.description}</Text>
                  <Box mb={2}>
                    {project.skills.map(skill => (
                      <Badge
                        key={skill}
                        colorScheme="blue"
                        mr={2}
                        mb={2}
                        fontSize="md"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </Box>
                </Box>
              </MotionBox>
            </Link>
          </GridItem>
        ))}
      </Grid>
      <Box mt={8} textAlign="center" marginTop="5em">
  <Button
    colorScheme="blue"
    variant="outline"
    size="lg"
    onClick={() => window.open("https://github.com/DevThiagoSouza?tab=repositories", "_blank")}
  >
    More Projects
  </Button>
</Box>

    </Box>
  );
}
