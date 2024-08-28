// src/components/Project.js
import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const projects = [
  {
    id: 1,
    title: 'Projeto 1',
    skills: ['React', 'Tailwind CSS'],
    imgSrc: 'path/to/image1.jpg',
    description: 'Descrição breve do Projeto 1. Aqui você pode adicionar um resumo do projeto.'
  },
  {
    id: 2,
    title: 'Projeto 2',
    skills: ['JavaScript', 'CSS'],
    imgSrc: 'path/to/image2.jpg',
    description: 'Descrição breve do Projeto 2. Aqui você pode adicionar um resumo do projeto.'
  },
  {
    id: 3,
    title: 'Projeto 3',
    skills: ['Node.js', 'Express'],
    imgSrc: 'path/to/image3.jpg',
    description: 'Descrição breve do Projeto 3. Aqui você pode adicionar um resumo do projeto.'
  },
  {
    id: 4,
    title: 'Projeto 4',
    skills: ['Python', 'Django'],
    imgSrc: 'path/to/image4.jpg',
    description: 'Descrição breve do Projeto 4. Aqui você pode adicionar um resumo do projeto.'
  },
  {
    id: 5,
    title: 'Projeto 5',
    skills: ['Java', 'Spring Boot'],
    imgSrc: 'path/to/image5.jpg',
    description: 'Descrição breve do Projeto 5. Aqui você pode adicionar um resumo do projeto.'
  },
  {
    id: 6,
    title: 'Projeto 6',
    skills: ['PHP', 'Laravel'],
    imgSrc: 'path/to/image6.jpg',
    description: 'Descrição breve do Projeto 6. Aqui você pode adicionar um resumo do projeto.'
  },
];

export default function Project() {
  return (
    <center>
    <div className="p-8 flex justify-center ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map(project => (
          <MotionBox
            key={project.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
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
              <Text color="gray.600">{project.skills.join(', ')}</Text>
            </Box>
          </MotionBox>
          
        ))}
      </div>
    </div>
    </center>
  );
}
