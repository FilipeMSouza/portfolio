import Header from '@/components/header'
import { Box, Card, CardBody, CardFooter, CardHeader, Center, Grid, GridItem, HStack, Image, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import Link from 'next/link'


export default function Career() {




  return (
    <Box
      w='100%'
      h='100vh'
      p={4}

    >
      <Header light={true} career={true} />
      <Grid templateColumns="repeat(2, 1fr)" gap={4} pt='4rem'>
        <GridItem>
          <Link href='https://www.objeto.ca/' target="blank">
            <Card variant='elevated' size='xl' borderRadius='5px'>
              <HStack>
                <Image
                  objectFit='cover'
                  maxW={{ base: '100%', sm: '200px' }}
                  src='Objeto Extrusion.svg'
                  alt='Objeto Logo'
                  p={4}
                />

                <CardHeader>
                  <Text color="gray.900" fontWeight='bold' fontSize='xl'>Web developer Intern</Text>
                  <Text color="gray.900" fontWeight='semibold' fontSize='md'>Toronto- OT, Canada</Text>
                </CardHeader>
              </HStack>

              <CardBody>
                <UnorderedList spacing={2} p='2rem' w='80%' alignContent='center'>
                  <ListItem color="gray.900" fontWeight='normal' fontSize='md'> Objeto Inc. is a business that work on solutions using primarily AWS and if needed they use React.js as front end framework</ListItem>
                  <ListItem color="gray.900" fontWeight='normal' fontSize='md'> My principal project was OAP, Ontario Autism Program, That we developed a booking system using Cal.com and a video room based on Twilio tools</ListItem>
                </UnorderedList>
              </CardBody>
              <CardFooter>
              </CardFooter>
            </Card>
          </Link>

        </GridItem>
      </Grid>

    </Box>
  )
}
