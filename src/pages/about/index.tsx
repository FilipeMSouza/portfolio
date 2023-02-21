import Header from '@/components/header'
import { IconContext } from "react-icons";
import { AiFillLinkedin, AiOutlineInstagram, AiFillGithub } from 'react-icons/ai'
import { Box, Center, Divider, HStack, Icon, Text, VStack, Image } from '@chakra-ui/react'
import Link from 'next/link';

export default function About() {




  return (
    <Box
      bg='white'
      w='100%'
      h='100vh'
      p={4}
    >
      <Header light={true} about={true} />

      <Center w='100%' h='90vh'>
        <HStack align='start' spacing={16}>
          <Image src='filipe.png' w='400px' h='400px' alt='Filipe Souza Placeholder' />
          <VStack align='start'>
            <Text color='gray.900' fontWeight='medium' fontSize='xl'>I`m Filipe Souza</Text>
            <HStack>
              <Text color='gray.900' fontWeight='medium' fontSize='2xl'>A </Text>
              <Text color='brand.bsb' fontWeight='medium' fontSize='2xl'> Web </Text>
              <Text color='gray.900' fontWeight='medium' fontSize='2xl'> Developer Based In </Text>
              <Text color='brand.bsb' fontWeight='medium' fontSize='2xl'> Brazil </Text>
            </HStack>
            <HStack>
              <Text color='gray.900' fontWeight='normal' fontSize='md'>Using </Text>
              <Text color='brand.bsb' fontWeight='normal' fontSize='md'> React.Js  </Text>
              <Text color='gray.900' fontWeight='normal' fontSize='md'>since I started working with web development.</Text>
            </HStack>
            <Text color='gray.900' fontWeight='normal' fontSize='md'> Now I`m looking to be a React.js Expert doing every thing I can</Text>
            <HStack pt='32px' spacing='20rem'>
              <VStack align='start' color='gray.900' justify="space-between">
                <HStack>
                  <Text fontWeight='bold'>Birthday:</Text>
                  <Text> 19nd June 1998</Text>
                </HStack>
                <Divider />
                <HStack pt='3rem'>
                  <Text fontWeight='bold'>Residence:</Text>
                  <Text> Palmas - TO, Brazil</Text>
                </HStack>
                <Divider />
                <HStack pt='3rem'>
                  <Text fontWeight='bold'>Email:</Text>
                  <Text> filipe.souza1906@gmail.com</Text>
                </HStack>
                <Divider />
              </VStack>
              <VStack spacing='3.5rem'>
                <IconContext.Provider value={{ size: '2rem', color: '#242423' }}>

                  <Link href='https://github.com/FilipeMSouza' target='blank'>
                    <AiFillGithub />
                  </Link>

                  <Link href='https://www.linkedin.com/in/filipe-souza-693ab216a/' target='blank'>
                    <AiFillLinkedin />
                  </Link>

                  <Link href='https://www.instagram.com/filipesouza.is/' target='blank'>
                    <AiOutlineInstagram />
                  </Link>

                </IconContext.Provider>
              </VStack>
            </HStack>
          </VStack>
        </HStack>

      </Center>
    </Box>
  )
}
