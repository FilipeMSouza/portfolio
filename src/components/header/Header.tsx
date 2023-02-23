import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react"
import { useSidebarDrawer } from "@/contexts/SideBarContexts"
import { RiMenuLine } from "react-icons/ri"
import { Logo } from "./Logo"
import { SidebarNav } from "../sidebar/Navigation"

interface HeaderProps {
  light?: boolean
  tag: string
}

export const Header = ({ light, tag }: HeaderProps) => {

  const { onOpen } = useSidebarDrawer()

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Flex
      as='header'
      w='100%'
      maxWidth={1920}
      h='20'/*80px*/
      mx='auto'
      mt='4'
      px='6'
      align='center'
      justify='space-between'
    >

      <Logo light={light} tag={tag}/>
      {!isWideVersion && (
      <IconButton
        aria-label='Open Navigation'
        icon={<Icon color={light? 'brand.bg':'brand.lbg'} as={RiMenuLine} />}
        fontSize='24'
        variant='unstyled'
        onClick={onOpen}
        ml='20'
      />
      )}

      {isWideVersion && (<SidebarNav light={light}/>)}

    </Flex>

  )

}