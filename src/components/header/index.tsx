import { HStack, Box, Text, Wrap } from '@chakra-ui/react'
import Link from 'next/link'

interface HeaderProps {
  light: boolean
}


export default function Header({ light }: HeaderProps) {

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
        <Wrap
          spacing="0"
        >
          <Text
            as='b'
          >Filipe</Text>

          <Text
            color="cyan.500"
            as='b'
          >.is</Text>
        </Wrap>

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