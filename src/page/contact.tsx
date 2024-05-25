import React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button as ChakraButton,
  Stack,
  Textarea,
  useDisclosure,
  Collapse,
  useColorMode,
  Divider,
  Icon,
  VStack,
  Flex,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaPhone, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const MotionBox = motion(Box);
const Button = motion(ChakraButton);

export default function Contact() {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode } = useColorMode();
  const borderColor = { light: "blue.500", dark: "teal.300" };
  const bgColor = { light: "white", dark: "gray.900" };

  return (
    <>
    <Flex direction={{ base: "column", md: "row" }} justify="center" align="center">
      <MotionBox
        marginTop="5em"
        maxW={{ base: "90%", md: "30%"}}
        mx="auto"
        p={5}
        borderWidth={2}
        borderRadius="md"
        bg={bgColor[colorMode]}
        borderColor={borderColor[colorMode]}
        boxShadow={"2xl"}
        rounded={"lg"}
      >
        <Stack spacing={4}>
          <FormControl id="name">
            <FormLabel>Name</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl id="email">
            <FormLabel>Email</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Phone</FormLabel>
            <Input type="password" />
          </FormControl>
          <Button onClick={onToggle} size="sm">
            Add Message
          </Button>
          <Collapse in={isOpen}>
            <FormControl id="extra">
              <Textarea placeholder="Escreva algo..." />
            </FormControl>
          </Collapse>
          <Button colorScheme="blue" type="submit">
            Submit
          </Button>
          <Stack spacing={5}
           direction={{ base: "column", md: "row" }} 
           display="flex" 
           justifyContent="center">
          
        <Icon as={FaPhone} boxSize={6} />
        <Icon as={FaWhatsapp} boxSize={6} />
        <Icon as={FaEnvelope} boxSize={6} />
      </Stack>
        </Stack>
      </MotionBox>
    </Flex>
    <Divider orientation="horizontal" marginTop="5em" />
  </>
  );
}
