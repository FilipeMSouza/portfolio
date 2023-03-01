import { Box, Center, Grid, HStack, Stack, Text, VStack, useBreakpointValue} from "@chakra-ui/react"

export const AboutDetails = () => {

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
      <Box
        w="100%"
        bg='brand.bg'
        >

        <Stack
          direction={isWideVersion?'row':'column'}
          align='center'>
            

            <Grid templateColumns={isWideVersion ? 'repeat(4, 1fr)' : ''} p={6} gap={5}>

              <Stack>
                <VStack align='start'>
                <HStack>
                  <Text fontSize='5xl'fontWeight='bold' color='brand.bsb'>+</Text>
                  <Text fontSize='5xl'fontWeight='bold' color='brand.lbg'>1</Text>
                </HStack>
                  <Text fontSize='lg'fontWeight='light' color='brand.lbg'>Year working as developer</Text>
                </VStack>
              </Stack>

              <Stack>
                <VStack align='start'>
                <HStack>
                  <Text fontSize='5xl'fontWeight='bold' color='brand.bsb'>+</Text>
                  <Text fontSize='5xl'fontWeight='bold' color='brand.lbg'>3</Text>
                </HStack>
                  <Text fontSize='lg'fontWeight='light' color='brand.lbg'>Years studying React.js</Text>
                </VStack>
              </Stack>

              <Stack>
                <VStack align='start'>
                <HStack>
                  <Text fontSize='5xl'fontWeight='bold' color='brand.bsb'>+</Text>
                  <Text fontSize='5xl'fontWeight='bold' color='brand.lbg'>06</Text>
                </HStack>
                  <Text fontSize='lg'fontWeight='light' color='brand.lbg'>Personal projects</Text>
                </VStack>
              </Stack>

              <Stack >
                <VStack align='start'>
                <HStack>
                  <Text fontSize='5xl'fontWeight='bold' color='brand.bsb'>+</Text>
                  <Text fontSize='5xl'fontWeight='bold' color='brand.lbg'>1</Text>
                </HStack>
                  <Text fontSize='lg'fontWeight='light' color='brand.lbg'>Front-end courses completed</Text>
                </VStack>
              </Stack>

            </Grid>

            
        </Stack>
      </Box>
  )
}