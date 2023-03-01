import { qualifyData } from "@/assets/qualify";
import QualyCard from "@/components/cards/QualyCard";
import { Header } from "@/components/header/Header";
import SideBar from "@/components/sidebar/SideBar";
import { Box, Center, Flex, Grid, useBreakpointValue } from "@chakra-ui/react";
import Head from "next/head";


export default function Qualifications() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })
  return (
    <>
      <Head>
        <title>Filipe Souza | Qualifications</title>
      </Head>
      <Box>
        <Header light={true} tag='Qualifications' />
        <SideBar />
        <Center p='5'>
          <Box>
            <Grid templateColumns={isWideVersion ? 'repeat(2, 1fr)' : ''} gap={6}>
              {qualifyData.map((item) => {
                return (
                    <QualyCard
                      key={item.school}
                      school={item.school}
                      date={item.date}
                      subject={item.subject}
                      situation={item.situation}
                      description={item.description} />
                )})}
            </Grid>
          </Box>
        </Center>
      </Box>
    </>

  )
}