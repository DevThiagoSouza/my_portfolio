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
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Curriculum from "./curriculum";
import { link } from "fs";
import { ColorModeSwitcher } from "../ColorModeSwitcher";

interface Props {
  children: React.ReactNode;
}

const Links = ["Home"]; //'Projects', 'Contact'

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

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4} >
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
                    h="4.5vh"
                    w="2vw"
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

                  // src={
                  //   'https://www.linkedin.com/in/thiago-soares-692a94145/'

                  // }
                />
              </MenuButton>
              <MenuList>
                <MenuItem as={Link} href="#curriculum">My curriculum</MenuItem>
                <MenuItem
                  as={Link}
                  href="https://drive.google.com/file/d/15vGK_DYOaSWeLR6iWkZdrrW4VumiL_h1/view?usp=sharing" 
                  download
                >
                  My curriculum in PDF
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
