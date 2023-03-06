import { Box, Center, Grid, HStack, Stack, Text, VStack, useBreakpointValue, Card } from "@chakra-ui/react"

export const AboutDetails = () => {

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Center>
      <Box
        w="70%"
      >

        <Stack
          direction={isWideVersion ? 'row' : 'column'}
        >

          <Grid templateColumns={isWideVersion ? 'repeat(4, 1fr)' : ''} p={6} gap={5}>

            <Card bg='brand.bg' px={2} py={1}>
              <VStack align='center' px={2}>
                <HStack>
                  <Text fontSize='5xl' fontWeight='bold' color='brand.bsb'>+</Text>
                  <Text fontSize='5xl' fontWeight='bold' color='brand.lbg'>1y</Text>
                </HStack>
                <Text fontSize='md' fontWeight='light' color='brand.lbg'>As developer</Text>
              </VStack>
            </Card>

            <Card bg='brand.bg' px={2} py={1}>
              <VStack align='center' px={2}>
                <HStack>
                  <Text fontSize='5xl' fontWeight='bold' color='brand.bsb'>+</Text>
                  <Text fontSize='5xl' fontWeight='bold' color='brand.lbg'>3y</Text>
                </HStack>
                <Text fontSize='md' fontWeight='light' color='brand.lbg'>Studying React.js</Text>
              </VStack>
            </Card>

            <Card bg='brand.bg' px={2} py={1}>
              <VStack align='center' px={2}>
                <HStack>
                  <Text fontSize='5xl' fontWeight='bold' color='brand.bsb'>+</Text>
                  <Text fontSize='5xl' fontWeight='bold' color='brand.lbg'>06</Text>
                </HStack>
                <Text fontSize='md' fontWeight='light' color='brand.lbg'>Personal projects</Text>
              </VStack>
            </Card>

            <Card bg='brand.bg' px={2} py={1}>
              <VStack align='center' px={2}>
                <HStack>
                  <Text fontSize='5xl' fontWeight='bold' color='brand.bsb'>+</Text>
                  <Text fontSize='5xl' fontWeight='bold' color='brand.lbg'>1</Text>
                </HStack>
                <Text fontSize='md' fontWeight='light' color='brand.lbg' align='center'>Front-end courses completed</Text>
              </VStack>
            </Card>

          </Grid>

        </Stack>
      </Box>
    </Center>
  )
}