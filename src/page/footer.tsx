import React from "react";
import { Box, Text, Link, Stack, useColorModeValue, Icon, IconButton } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <Box
    marginTop="2em"
      as="footer"
      role="contentinfo"
      mx={{ base: '4', md: 'auto' }}
      maxW='100%'
      py="12"
      px={{ base: '4', md: '8' }}
      bg={useColorModeValue('gray.300', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
      minHeight="15vh"
    >
      <Stack spacing={4} direction={{ base: 'column', md: 'row' }} align="center" justify="space-between">
        <Text fontSize={{ base: 'sm', md: 'md' }}>
          © {new Date().getFullYear()} Seu Nome. Todos os direitos reservados.
        </Text>
        <Stack direction="row" spacing="4">
          <Link as={FaFacebook} w={6} h={6} _hover={{ color: "blue.600" }} />
          <Link as={FaTwitter} w={6} h={6} _hover={{ color: "blue.400" }} />
          <Link as={FaInstagram} w={6} h={6} _hover={{ color: "red.600" }} />
          <Link as={FaLinkedin} w={6} h={6} _hover={{ color: "blue.800" }} />
        </Stack>
        <Stack direction="row" spacing="4">
          <Link as={FaEnvelope} w={6} h={6} _hover={{ color: "teal.500" }} />
          <Link as={FaPhone} w={6} h={6} _hover={{ color: "green.500" }} />
        </Stack>
      </Stack>
    </Box>
  );
}
