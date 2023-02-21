import Header from '@/components/header'
import { ArrowDownIcon } from '@chakra-ui/icons'
import { Box, Button, Center, HStack, Icon, Text, VStack } from '@chakra-ui/react'


export default function Home() {




  return (
    <>
      <Box bg='brand.bg'w='100%' h='100vh' p={4} color='white'>
        <Header light={false} />
        <Center w="100%" h="90vh">
          <HStack>
            <VStack mt='400px'>

              <CircleIcon mb='-20px' boxSize={4} color='brand.bsb'/>
              <Box w='2px' h='40vh' bgGradient="linear(to-b,brand.bsb,#242423)" />
            </VStack>
            <VStack align={'start'}>
              <Text fontWeight="light" fontSize='lg' >Hello my name is</Text>

              <HStack spacing={0}>
                <Text fontWeight="semibold" fontSize='7xl'>Filipe Souza</Text>
                <Text fontWeight="semibold" fontSize='7xl' color='brand.bsb'>.is()</Text>
              </HStack>

              <Text fontWeight="normal" fontSize='lg' mb='20px'>I`m a Web developer</Text>

              <Button variant='outline' mt='20px'>
                <ArrowDownIcon mr={4} />
                <Text fontWeight="thin" fontSize='xl'>Download CV</Text>
              </Button>
            </VStack>
          </HStack>
        </Center>
      </Box>
    </>
  )
}

const CircleIcon = (props: any) => (
  <Icon viewBox="0 0 200 200" {...props}>
    <path
      fill="currentColor"
      d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
    />
  </Icon>
)
