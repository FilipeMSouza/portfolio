import { Text } from "@chakra-ui/react";

interface LogoProps {
  light?: boolean
  tag: string
}


export function Logo({ light, tag}: LogoProps) {
  return (
    <Text
      fontSize={['xl', '2xl']}
      as="b"
      color={light? 'brand.bg':'brand.lbg'}
    >
      {tag}
      <Text as='span' ml='1' color='brand.bsb'>.</Text>
    </Text>
  )
}