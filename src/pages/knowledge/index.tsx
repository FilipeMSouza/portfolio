import Head from "next/head"
import SideBar from "@/components/sidebar/SideBar"
import { Header } from "@/components/header/Header"
import { KnowledgeCard } from "@/components/cards/Knowledgecard"
import { AboutDetails } from "@/components/aboutInfo/AboutDetails"
import { TbBrandNextjs } from "react-icons/tb"
import { 
  SiTypescript, 
  SiStyledcomponents,
  SiChakraui,
  SiMaterialui,
  SiFlutter
 } from "react-icons/si"
import { 
  FaApple, 
  FaHtml5, 
  FaJs, 
  FaReact,
  FaCss3Alt,
  FaBootstrap,
  FaFigma,
  FaPython,
  FaNodeJs
} from "react-icons/fa"

import { 
  Grid, 
  Box, 
  Text, 
  Stack, 
  useBreakpointValue,  
  Card, 
  CardBody, 
  HStack, 
  Center 
} from "@chakra-ui/react"
export default function Knowledge() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })
  return (
    <>
      <Head>
        <title>Filipe Souza | Knowledge</title>
      </Head>
      <Box
        color='brand.bg'
      >
        <Header light={true} tag='Knowledge' />
        <SideBar />

        <Stack mb={8}>
          <Center h={isWideVersion?'50vh':''}>

          <Grid templateColumns={isWideVersion ? 'repeat(4, 1fr)' : ''} gap={2}>
          
          <KnowledgeCard icon={FaReact} name='React.js'/>
          <KnowledgeCard icon={TbBrandNextjs} name='React.js'/>
          <KnowledgeCard icon={FaJs} name='JavaScript'/>
          <KnowledgeCard icon={SiTypescript} name='JavaScript'/>
          <KnowledgeCard icon={FaHtml5} name='HTML5'/>
          <KnowledgeCard icon={FaCss3Alt} name='CSS3'/>
          <KnowledgeCard icon={FaBootstrap} name='Bootstrap'/>
          <KnowledgeCard icon={SiStyledcomponents} name='Styled-Components'/>
          <KnowledgeCard icon={SiChakraui} name='Chakra UI'/>
          <KnowledgeCard icon={SiMaterialui} name='Material UI'/>
          <KnowledgeCard icon={SiMaterialui} name='Tailwind'/>
          <KnowledgeCard icon={FaFigma} name='Figma'/>
          <KnowledgeCard icon={FaApple} name='SwiftUI'/>
          <KnowledgeCard icon={SiFlutter} name='Flutter'/>
          <KnowledgeCard icon={FaPython} name='Python'/>
          <KnowledgeCard icon={FaNodeJs} name='Node.js'/>

          </Grid>
        </Center>
        </Stack>
        <AboutDetails />

      </Box>
    </>
  )
}