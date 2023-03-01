import { NavLink } from "./NavLink";
import { SlBadge } from "react-icons/sl";
import { SiKnowledgebase } from "react-icons/si";
import {
  Stack,
  Box,
  useBreakpointValue,
  HStack
} from "@chakra-ui/react";
import {
  RiMacbookLine,
  RiContactsLine,
  RiHomeLine,
  RiInboxLine
} from "react-icons/ri";

interface SidebarNavProps {
  light?: boolean
}

export function SidebarNav({ light }: SidebarNavProps) {

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (


    <Stack align='flex-start'>
      <Box>
        <NavLink mb='15px' icon={RiHomeLine} link='/'>Home</NavLink>
        <NavLink mb='15px' icon={RiContactsLine} link='/about'>About</NavLink>
        <NavLink mb='15px' icon={RiMacbookLine} link='/career'>Career</NavLink>
        <NavLink mb='15px' icon={SlBadge} link='/qualifications'>Qualifications</NavLink>
        <NavLink mb='15px' icon={SiKnowledgebase} link='/knowledge'>Knowledge</NavLink>
        <NavLink icon={RiInboxLine} link='https://github.com/FilipeMSouza'>Portfolio</NavLink>
      </Box>
    </Stack>
  )
}