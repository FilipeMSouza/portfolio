import { Header } from "@/components/header/Header";
import SideBar from "@/components/sidebar/SideBar";
import { useBreakpointValue, useDisclosure, Box, Stack, Text, Center, Card, CardHeader, CardBody, StackDivider, Heading, Grid } from "@chakra-ui/react";
import { careerData } from "../../assets/data";
import { useState } from "react";
import Head from "next/head";
import CareerCard from "@/components/cards/CareerCard";


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
        <Center p='5'>
          <Box>
            <Grid templateColumns={isWideVersion ? 'repeat(2, 1fr)' : ''} gap={6}>
              {careerData.map((item) => {
                return (
                  <CareerCard
                    date={item.date}
                    role={item.role}
                    title={item.title}
                    functions={item.functions}
                    projects={item.projects} />
                )})}
            </Grid>
          </Box>
        </Center>
      </Box>
    </>
  )
}