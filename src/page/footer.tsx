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
          © {new Date().getFullYear()} Thiago Souza. Todos os direitos reservados.
        </Text>
        <Stack direction="row" spacing="4">
          <Link as={FaFacebook} w={6} h={6} _hover={{ color: "blue.600" }} />
          <Link as={FaTwitter} w={6} h={6} _hover={{ color: "blue.400" }} />
          <Link as={FaInstagram} w={6} h={6} _hover={{ color: "red.600" }} />
          <Link as={FaLinkedin} w={6} h={6} _hover={{ color: "blue.800" }} />
        </Stack>
        <Stack direction={{base:"column" ,md:"row"}} padding="2em 2em" gap="1em">
          <Box justifyContent="center" display="flex" gap="1em">
          <Icon as={FaEnvelope} w={7} h={7} />
          <Text>thiago.soares.de.souza@hotmail.com</Text>
          </Box>
          <Box justifyContent="center" display="flex" gap="1em">
          <Icon as={FaPhone} w={7} h={7} />
          <Text>+55 (11)973603554 </Text>
          </Box>
        </Stack>
        {/* <Stack direction="column" spacing="4" marginRight="20em">
          <Link as={FaEnvelope} w={6} h={6} _hover={{ color: "teal.500" }} /> <a>thiago.soares.de.souza@hotmail.com</a>
          <Link as={FaPhone} w={6} h={6} _hover={{ color: "green.500" }} /> <a>+55(11)97360-3554</a>
        </Stack> */}
      </Stack>
    </Box>
  );
}
