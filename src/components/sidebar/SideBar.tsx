
import { useSidebarDrawer } from '@/contexts/SideBarContexts'
import {
  Box,
  useBreakpointValue,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay
} from '@chakra-ui/react'
import { SidebarNav } from './Navigation'


export default function SideBar() {


  const { isOpen, onClose } = useSidebarDrawer()




    return (
      <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent bg="gray.900" p={4} >
            <DrawerCloseButton mt='6' />
            <DrawerHeader>Navigation</DrawerHeader>
            <DrawerBody>
              <SidebarNav />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    )

}