import About from '@/pages/about'
import { 
  HStack, 
  Box, 
  Text, 
  Wrap, 
  VStack, 
  Divider 
} from '@chakra-ui/react'
import Link from 'next/link'

interface HeaderProps {
  light?: boolean
  about?: boolean
  career?: boolean
  projects?: boolean
}


export default function Header({ light, about, career, projects }: HeaderProps) {

  return (
    <Box
      w='100%'
      h='4vh'
      p={1}
      color={light ? 'black' : 'white'}
    >
      <HStack
        justify="space-between"
      >
        {
          about ? (
            <Wrap>
              <VStack align='start'>
                <Text as='b' mb='-10px'>About Me</Text>
                <Divider orientation="horizontal" borderColor='brand.bsb' borderWidth='2px' />
                <Text fontWeight='light' fontSize="xs" mt='-10px'>Information About me</Text>
              </VStack>
            </Wrap>
          ) : career ? (
          <Wrap>
            <VStack align='start'>
              <Text as='b' mb='-10px'>Career</Text>
              <Divider orientation="horizontal" borderColor='brand.bsb' borderWidth='2px' />
              <Text fontWeight='light' fontSize="xs" mt='-10px'>My career so far</Text>
            </VStack>
          </Wrap>
          ) : projects ? (
          <Wrap>
            <VStack align='start'>
              <Text as='b' mb='-10px'>Projects</Text>
              <Divider orientation="horizontal" borderColor='brand.bsb' borderWidth='2px' />
              <Text fontWeight='light' fontSize="xs" mt='-10px'>What I`m Worked</Text>
            </VStack>
          </Wrap>
          ) : (
          <Wrap spacing="0">
            <Text as='b'>Filipe</Text>
            <Text color="brand.bsb" as='b'>.is</Text>
          </Wrap>
          )
        }

        <HStack
          spacing={10}
        >
          <Link href='/'>
            <Text as='b'>
              Home
            </Text>
          </Link>
          <Link href='/about'>
            <Text as='b'>
              About
            </Text>
          </Link>
          <Link href='/career'>
            <Text as='b'>
              Career
            </Text>
          </Link>
          <Link href='/projects'>
            <Text as='b'>
              Git Hub
            </Text>
          </Link>

        </HStack>

      </HStack>

    </Box>
  )
}