import { NavLink } from "./NavLink";
import { Stack, Box, useBreakpointValue, HStack } from "@chakra-ui/react";
import { RiMacbookLine, RiContactsLine, RiHomeLine,RiInboxLine} from "react-icons/ri";

interface SidebarNavProps {
  light?: boolean
}

export function SidebarNav({light}: SidebarNavProps) {

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return(
  
  !isWideVersion?(

  <Stack align='flex-start'>
    <Box>
        <NavLink mb='15px' icon={RiHomeLine} link='/'>Home</NavLink>
        <NavLink mb='15px' icon={RiContactsLine} link='/about'>About</NavLink>
        <NavLink mb='15px' icon={RiMacbookLine} link='/career'>Career</NavLink>
        <NavLink icon={RiInboxLine} link='https://github.com/FilipeMSouza'>Portfolio</NavLink>
    </Box>
  </Stack>

  ):(
  <Box>
  <HStack spacing='6' align='flex-start' >
  
      <NavLink icon={RiHomeLine} link='/' light={light}>Home</NavLink>
      <NavLink icon={RiContactsLine} link='/about' light={light}>About</NavLink>
      <NavLink icon={RiMacbookLine} link='/career' light={light}>Career</NavLink>
      <NavLink icon={RiInboxLine} link='https://github.com/FilipeMSouza' light={light}>Portfolio</NavLink>
 

  </HStack>
  </Box>
)
)
}