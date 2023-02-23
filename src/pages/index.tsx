
import { Header } from '@/components/header/Header'
import { PinIcon } from '@/components/pin'
import SideBar from '@/components/sidebar/SideBar'
import { ArrowDownIcon } from '@chakra-ui/icons'
import { Box, Button, Center, Flex, HStack, Icon, IconButton, Text, useBreakpointValue, VStack } from '@chakra-ui/react'
import Head from 'next/head'
import { AiOutlineArrowDown } from 'react-icons/ai'


export default function Home() {

  const aux: string = '"WebDev"'
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  const downloadTxtFile = () => {
    // using Java Script method to get PDF file
    fetch('CurriculumVitaeFilipeSouza.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'SamplePDF.pdf';
            alink.click();
        })
    })
}


  return (
    <Box
      bg='brand.bg'
    >
      <Head>
        <title>Filipe Souza | Home</title>
      </Head>
      <Flex direction='column' h='100vh'>
        <Header light={false} tag='Filipe' />
        <SideBar />
        <Center h='80vh' mt='80px'>
          <Flex direction='row'>
            <PinIcon />
              <VStack align='start'>
              <HStack spacing='0'>
                <Text fontSize={isWideVersion? '5xl':'2xl'} >FilipeSouza</Text>
                <Text fontSize={isWideVersion? '5xl':'2xl'} color='brand.bsb'>.is(</Text>
                <Text fontSize={isWideVersion? '5xl':'2xl'} color='orange.400'>{aux}</Text>
                <Text fontSize={isWideVersion? '5xl':'2xl'}color='brand.bsb'>)</Text>
              </HStack>
            
            <Button
              aria-label='Open Navigation'
              fontSize='lg'
              variant='outline'
              gap={2}
              ml='20px'
              w='220px'
              onClick={downloadTxtFile}

              ><Icon as={AiOutlineArrowDown} /> Download CV</Button>
            </VStack>
          </Flex>
        </Center>

      </Flex>
    </Box>
  )
}
