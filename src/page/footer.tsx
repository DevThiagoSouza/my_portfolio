import React from "react";
import { Box, Text, Link, Stack, useColorModeValue, Icon, IconButton, Divider } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <Box
      as="footer"
      role="contentinfo"
      mx={{ base: '4', md: 'auto' }}
      maxW="100%"
      py={{ base: "8", md: "12" }}
      px={{ base: "4", md: "8" }}
      bg={useColorModeValue("gray.100", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      minHeight="20vh"
      borderTop="1px"
      borderColor={useColorModeValue("gray.200", "gray.700")}
    >
      <Stack spacing={6} direction={{ base: "column", md: "row" }} align="center" justify="space-between">
        {/* Direitos autorais */}
        <Text fontSize={{ base: "sm", md: "md" }} textAlign="center">
          © {new Date().getFullYear()} Thiago Souza. Todos os direitos reservados.
        </Text>

        {/* Redes sociais */}
        <Stack direction="row" spacing={6} align="center" justify="center">
          <Link 
            href="https://facebook.com"
            isExternal
            _hover={{ color: "blue.600", transform: "scale(1.2)", transition: "transform 0.3s ease" }}
          >
            <Icon as={FaFacebook} w={8} h={8} />
          </Link>
          <Link 
            href="https://twitter.com"
            isExternal
            _hover={{ color: "blue.400", transform: "scale(1.2)", transition: "transform 0.3s ease" }}
          >
            <Icon as={FaTwitter} w={8} h={8} />
          </Link>
          <Link 
            href="https://instagram.com"
            isExternal
            _hover={{ color: "red.600", transform: "scale(1.2)", transition: "transform 0.3s ease" }}
          >
            <Icon as={FaInstagram} w={8} h={8} />
          </Link>
          <Link 
            href="https://linkedin.com"
            isExternal
            _hover={{ color: "blue.800", transform: "scale(1.2)", transition: "transform 0.3s ease" }}
          >
            <Icon as={FaLinkedin} w={8} h={8} />
          </Link>
        </Stack>
      </Stack>

      <Divider my={6} borderColor={useColorModeValue("gray.200", "gray.700")} />

      {/* Contatos */}
      <Stack direction={{ base: "column", md: "row" }} spacing={8} align="center" justify="center">
        <Box display="flex" alignItems="center" gap={3}>
          <Icon as={FaEnvelope} w={6} h={6} />
          <Text fontSize="sm">thiago.soares.de.souza@hotmail.com</Text>
        </Box>
        <Box display="flex" alignItems="center" gap={3}>
          <Icon as={FaPhone} w={6} h={6} />
          <Text fontSize="sm">+55 (11) 97360-3554</Text>
        </Box>
      </Stack>
    </Box>
  );
}
