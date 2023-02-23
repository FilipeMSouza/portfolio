import { Header } from "@/components/header/Header";
import SideBar from "@/components/sidebar/SideBar";
import { Text, Box, Center, Image, Stack, useBreakpointValue, VStack, HStack, Divider } from "@chakra-ui/react";
import Link from "next/link";
import { IconContext } from "react-icons";
import { AiFillGithub, AiFillLinkedin, AiOutlineInstagram } from "react-icons/ai";

export default function About() {

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Box
      color='brand.bg'
    >
      <Header light={true} tag="About" />
      <SideBar />
      <Center h='70vh'>
        <Stack direction={isWideVersion ? 'row' : 'column'} align={isWideVersion ? 'start' : 'center'}>
          <Image src='filipe.svg' w={isWideVersion?'400px':'200px'} h={isWideVersion?'400px':'200px'} alt='Filipe Souza Placeholder' />
          <Stack align={isWideVersion?'start':'center'}>

          <VStack align={isWideVersion?'start':'center'}>
            <Text fontSize={isWideVersion ? '3xl' : '2xl'}> I`m Filipe Souza</Text>
            <Text fontSize={isWideVersion ? '3xl' : '2xl'} w={isWideVersion?'':'350px'}>A Web Developer Based In Brazil</Text>
            <Text fontSize={isWideVersion ? 'xl' : 'lg'} w={isWideVersion?'450px':'350px'}>Using React.Js since I started working with web development. Now I’m looking to be a React.js Expert doing every thing I can</Text>
          </VStack>

          <VStack pt={4} align={isWideVersion?'start':'center'} color='gray.900' justify="space-between">
                <HStack>
                  <Text fontWeight='bold'>Birthday:</Text>
                  <Text> 19nd June 1998</Text>
                </HStack>
                <Divider />
                <HStack pt='1rem'>
                  <Text fontWeight='bold'>Residence:</Text>
                  <Text> Palmas - TO, Brazil</Text>
                </HStack>
                <Divider />
                <HStack pt='1rem'>
                  <Text fontWeight='bold'>Email:</Text>
                  <Text> filipe.souza1906@gmail.com</Text>
                </HStack>
                <Divider />
              </VStack>

          </Stack>

        </Stack>
      </Center>
    </Box>
  )

}