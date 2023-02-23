import {
  Flex,
  HStack,
  Icon,
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
  Text
} from "@chakra-ui/react";

import { ElementType } from "react";
import { ActiveLink } from "./ActiveLink";



interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType;
  children: String;
  link: string;
  light?: boolean
}

export function NavLink({ children, icon,link, light, ...rest }: NavLinkProps) {
  return (
    <ActiveLink href={link} passHref>
      <ChakraLink display='flex' align='center'{...rest}>
        <HStack>
          <Icon as={icon} fontSize='lg' color={light?'brand.bg':'brand.lbg'} />
          <Text ml='4px' fontWeight='medium' fontSize='lg' color={light?'brand.bg':'brand.lbg'}>{children}</Text>
        </HStack>
      </ChakraLink>
    </ActiveLink>
  );
}