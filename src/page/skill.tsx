'use client'

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { ReactElement } from 'react'
import {
  FcAbout,
  FcAssistant,
  FcCollaboration,
  FcDonate,
  FcManager,
} from 'react-icons/fc'

import { DiHtml5 , DiCss3, DiJsBadge ,DiBootstrap } from "react-icons/di";

interface CardProps {
  heading: string
  icon: ReactElement
  href: string
}

const Card = ({ heading, icon, href }: CardProps) => {
  return (
    <Box
      maxW={{ base: 'full', md: '275px' }}
      w={'full'}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="10px 5px 5px black"
      justifyContent="center" display="flex"
      p={5}>
      <Stack align={'start'} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={'center'}
          justify={'center'}
          color={'white'}
          rounded={'full'}
          bg={useColorModeValue('gray.700', 'gray.700')}>
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={'sm'}>
            
          </Text>
        </Box>
      
      </Stack>
    </Box>
  )
}

export default function Skiil() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
          Slills
        </Heading>
        <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
        programming libguem, library and frameworks that I have worked and studied
        </Text>
      </Stack>

      <Container maxW={'5xl'} mt={12} >
        <Flex flexWrap="wrap" gridGap={6} justify="center" >
        <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
          Front-end
        </Heading>
          <Card 
            heading={'HTML'}
            icon={<Icon as={DiHtml5} w={10} h={10} />}
            href={'#'}
          />
          <Card
            heading={'CSS'}
            icon={<Icon as={DiCss3 } w={10} h={10} />}
          //  description={'Lorem ipsum dolor sit amet catetur, adipisicing elit.'}
            href={'#'}
          />
          <Card
            heading={'JavaScript'}
            icon={<Icon as={DiJsBadge } w={10} h={10} />}
           // description={'Lorem ipsum dolor sit amet catetur, adipisicing elit.'}
            href={'#'}
          />
          <Card
            heading={'Bootstrap'}
            icon={<Icon as={DiBootstrap} w={10} h={10} />}
           // description={'Lorem ipsum dolor sit amet catetur, adipisicing elit.'}
            href={'#'}
          />
          <Card
            heading={'Heading'}
            icon={<Icon as={FcAbout} w={10} h={10} />}
           // description={'Lorem ipsum dolor sit amet catetur, adipisicing elit.'}
            href={'#'}
          />
        </Flex>
      </Container>
    </Box>
  )
}