import ObjetoButton from "@/components/careerButons/Objeto";
import { Header } from "@/components/header/Header";
import SideBar from "@/components/sidebar/SideBar";
import { useBreakpointValue, useDisclosure, Box, Stack, Text, Button, Center } from "@chakra-ui/react";
import { careerData } from "../../assets/data";
import { useState } from "react";
import CareerButton from "@/components/careerButons/Objeto";
import Head from "next/head";


export default function Career() {

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  const { getButtonProps, getDisclosureProps, isOpen } = useDisclosure()
  const [hidden, setHidden] = useState(!isOpen)

  return (
    <>
      <Head>
        <title>Filipe Souza | Career</title>
      </Head>
      <Box
        color='brand.bg'
      >
        <Header light={true} tag="Career" />
        <SideBar />
        <Center h={isWideVersion ? '70vh' : ''}>

          <Stack direction={isWideVersion ? 'row' : 'column'} align='center' spacing='3px' p={10}>
            <>
              {careerData.map((item) => {
                return (

                  <>
                    <CareerButton
                      title={item.title}
                      date={item.date}
                      role={item.role}
                      functions={item.functions}
                      projects={item.projects} />
                    <Box w={isWideVersion ? '150px' : '1px'} h={isWideVersion ? '1px' : '150px'} bg='brand.bsb' />
                  </>
                )
              })
              }
            </>
            <Text fontSize={isWideVersion ? '3xl' : '2xl'} fontWeight='bold'>Today</Text>
          </Stack>
        </Center>
      </Box>
    </>
  )
}