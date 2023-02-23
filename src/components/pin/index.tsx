import { Box, Icon, useBreakpointValue, VStack } from "@chakra-ui/react"

export const PinIcon = () => {

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <VStack pr={4} pt={['5', '8']}>
      <CircleIcon mb='-10px' color='brand.bsb' w={['3', '4']} h={['3', '4']} />
      <Box h={isWideVersion?'350px': '250px'} w='2px' bgGradient="linear(to-b, brand.bsb, #242423)" />
    </VStack>
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