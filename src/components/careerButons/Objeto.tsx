import { CloseIcon } from "@chakra-ui/icons";
import { Box, Button, Divider, HStack, Text, useBreakpointValue, useDisclosure, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Z_ASCII } from "zlib";

interface CareerButtonProps {
  title: string;
  date: string;
  role: string;
  functions?: string[];
  projects?: string[];
}


export default function CareerButton({title, date, role, functions,projects}:CareerButtonProps) {
  
  const { getButtonProps, getDisclosureProps, isOpen } = useDisclosure()
  const [hidden, setHidden] = useState(!isOpen)

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })
  
  return (
    <>
     <Button {...getButtonProps()} variant='unstyled'>
          <Text fontSize={isWideVersion ? '3xl' : '2xl'} fontWeight='bold'>{title}</Text>
        </Button> 


        <Box zIndex={1}>
          <motion.div
            {...getDisclosureProps()}
            hidden={hidden}
            initial={false}
            onAnimationStart={() => setHidden(false)}
            onAnimationComplete={() => setHidden(!isOpen)}
            animate={{ width: isOpen ? 500 : 0 }}
            style={{
              background: '#fff',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              position: 'absolute',
              right: '0',
              height: '35vh',
              top: '100px',
              padding: '20px',
              zindex: '100px',
            }}
            >
            <HStack justify='space-between' align='start'>
              <VStack align='start'>
                <Text>{role}</Text>
                <Text>{date}</Text>
              </VStack>
              <Button {...getButtonProps()} variant='unstyled'><CloseIcon/></Button>
            </HStack>
            
            <Divider mt='10px' />
            <Text mt='10px'>Functions</Text>
            <>
              {functions?.map((item) => {
                return (
                  <Box key={item}  mt='10px' maxWidth='350px'>
                    <Text >{item}</Text>
                  </Box>
                )
              })}
            </>
            <Divider mt='10px' />
            <Text mt='10px'>Projects</Text>
            <>
              {projects?.map((item) => {
                return (
                  <Box key={item} mt='10px' maxWidth='350px'>
                    <Text >{item}</Text>
                  </Box>
                )
              })}
            </>
          </motion.div>
              </Box>
       
    </>
  )
}