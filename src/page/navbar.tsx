import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  color,
  keyframes,
  scaleFadeConfig,
  Link,
  useToast,
  Alert,
  AlertIcon,
  Badge,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Curriculum from "./curriculum";
import { link } from "fs";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import { useEffect } from "react";

interface Props {
  children: React.ReactNode;
}

const Links = ["Home" ,'Projects', 'Contact'];

const NavLink = (props: Props) => {
  const { children } = props;

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      href={"#hero"}
    >
      {children}
    </Box>
  );
};

export default function Nav() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const color = "teal";
  const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`
const toast = useToast();

useEffect(() => {
  const interval = setInterval(() => {
    toast({
      title: "Currículo",
      render: () => (
        <Box color="white" p={3} borderRadius={15} bg="blue.500">
          Download my CV <Link color="teal.300" href="https://drive.google.com/file/d/1evMy69hTLzMLXxZ2kxIEn6g7pawANAeF/view?usp=sharing">Here</Link> or on Profile
        </Box>
      ),
      status: "info",
      duration: 5000,
      isClosable: true,
    });
  }, 30000);

  return () => {
    clearInterval(interval);
  };
}, []);


  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} 
       px={4} 
       position="fixed"
       width="100%"
       zIndex="100">
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}  >
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>Thiago Souza</Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>

          <Flex alignItems={"center"}>
          <ColorModeSwitcher />
            <Menu>
              <MenuButton
                 bgImage="radial-gradient(#2169c4 50%, rgba(84, 164, 230, 0.4) 52%)"
                 backgroundSize="200% 200%"
                 animation={`${gradientAnimation} 3s linear infinite`}
                 h={{base:"4.5vh", md:"4.5vh", lg:"4vh",xl:"4vh"}}
                 w={{base:"11.5vw", sm:"5.5vw", md:"4.5vw", lg:"3.4vw", xl:"2vw"}}
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
                overflow="hidden"
                _before={{
                  content: "''",
                  position: "relative",
                  display: "block",
                  boxSizing: "border-box",
                  bgColor: color,
            
                }}
              >
   
                <Avatar
                
                  size={"sm"}

                />
              </MenuButton>
              <MenuList>
              
                <MenuItem as={Link} href="#curriculum">My CV</MenuItem>
                <MenuItem
                  as={Link}
                  href="https://drive.google.com/file/d/1evMy69hTLzMLXxZ2kxIEn6g7pawANAeF/view?usp=sharing" 
                  download
                >
                 Download my CV
                </MenuItem>
                {/* <MenuDivider />
                <MenuItem>Link 3</MenuItem> */}
              </MenuList>
            </Menu>
          </Flex>
          
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
