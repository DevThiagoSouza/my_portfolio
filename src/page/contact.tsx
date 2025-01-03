import React, { useState } from "react";
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
  Flex,
  useToast,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaPhone, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import emailjs from "emailjs-com";

const MotionBox = motion(Box);
const Button = motion(ChakraButton);

export default function Contact() {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode } = useColorMode();
  const borderColor = { light: "blue.500", dark: "teal.300" };
  const bgColor = { light: "white", dark: "gray.800" };
  const [formSubmitted, setFormSubmitted] = useState(false);
  const toast = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);

    emailjs
      .sendForm("service_ffylyey", "template_5fbaljj", e.target as HTMLFormElement, "n1ITuQSwgmrfVuzUg")
      .then(
        (result) => {
          toast({
            title: "Mensagem Enviada!",
            description: "Obrigado por entrar em contato. Responderemos em breve.",
            status: "success",
            duration: 5000,
            isClosable: true,
          });

          // Limpar os campos do formulário após o envio bem-sucedido
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
        },
        (error) => {
          toast({
            title: "Erro ao enviar a mensagem.",
            description: "Houve um erro ao enviar a mensagem. Tente novamente mais tarde.",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        }
      )
      .finally(() => {
        setFormSubmitted(false);
      });
  };

  return (
    <>
      <Flex
        id="contact"
        direction={{ base: "column", md: "row" }}
        justify="center"
        align="center"
        bg={bgColor[colorMode]}
        py={{ base: "5", md: "10" }}
        px={{ base: "4", md: "8" }}
      >
        <MotionBox
          marginTop="5em"
          maxW={{ base: "90%", sm: "80%", md: "60%", lg: "50%" }}
          w="full"
          mx="auto"
          p={8}
          borderWidth={2}
          borderRadius="lg"
          bg={bgColor[colorMode]}
          borderColor={borderColor[colorMode]}
          boxShadow={"lg"}
          rounded={"lg"}
          _hover={{ boxShadow: "xl", transition: "box-shadow 0.3s ease" }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <form onSubmit={handleSubmit}>
            <Stack spacing={5}>
              <FormControl id="name">
                <FormLabel fontWeight="bold" color={colorMode === "dark" ? "white" : "gray.700"}>
                  Name
                </FormLabel>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  borderColor={borderColor[colorMode]}
                  _focus={{ borderColor: "blue.500" }}
                  placeholder="Seu nome"
                  required
                />
              </FormControl>

              <FormControl id="email">
                <FormLabel fontWeight="bold" color={colorMode === "dark" ? "white" : "gray.700"}>
                  Email
                </FormLabel>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  borderColor={borderColor[colorMode]}
                  _focus={{ borderColor: "blue.500" }}
                  placeholder="Seu e-mail"
                  required
                />
              </FormControl>

              <FormControl id="phone">
                <FormLabel fontWeight="bold" color={colorMode === "dark" ? "white" : "gray.700"}>
                  Phone
                </FormLabel>
                <Input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  borderColor={borderColor[colorMode]}
                  _focus={{ borderColor: "blue.500" }}
                  placeholder="Seu número"
                  required
                />
              </FormControl>

              <Button
                onClick={onToggle}
                size="sm"
                variant="outline"
                colorScheme="blue"
                borderColor={borderColor[colorMode]}
                _hover={{
                  bg: "blue.500",
                  color: "white",
                  borderColor: "blue.500",
                  transition: "all 0.3s ease",
                }}
              >
                Add Message
              </Button>

              <Collapse in={isOpen}>
                <FormControl id="extra">
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write something..."
                    borderColor={borderColor[colorMode]}
                    _focus={{ borderColor: "blue.500" }}
                  />
                </FormControl>
              </Collapse>

              <Button
                colorScheme="blue"
                size="lg"
                width="full"
                _hover={{
                  bg: "blue.500",
                  transition: "all 0.3s ease",
                }}
                type="submit"
                isLoading={formSubmitted}
              >
                {formSubmitted ? "Enviado!" : "Enviar"}
              </Button>

              <Stack
                spacing={4}
                direction={{ base: "column", md: "row" }}
                justifyContent="center"
                align="center"
              >
                <Icon
                  as={FaPhone}
                  boxSize={8}
                  color={colorMode === "dark" ? "gray.300" : "blue.600"}
                  _hover={{
                    transform: "scale(1.2)",
                    color: "green.500",
                    transition: "all 0.3s ease",
                  }}
                />
                <Icon
                  as={FaWhatsapp}
                  boxSize={8}
                  color={colorMode === "dark" ? "gray.300" : "green.500"}
                  _hover={{
                    transform: "scale(1.2)",
                    color: "teal.400",
                    transition: "all 0.3s ease",
                  }}
                />
                <Icon
                  as={FaEnvelope}
                  boxSize={8}
                  color={colorMode === "dark" ? "gray.300" : "red.600"}
                  _hover={{
                    transform: "scale(1.2)",
                    color: "purple.400",
                    transition: "all 0.3s ease",
                  }}
                />
              </Stack>
            </Stack>
          </form>
        </MotionBox>
      </Flex>

      <Divider orientation="horizontal" marginTop="5em" />

      <Box
        textAlign="center"
        p={6}
        bg={colorMode === "dark" ? "gray.900" : "gray.100"}
        color={colorMode === "dark" ? "white" : "gray.700"}
      ></Box>
    </>
  );
}
