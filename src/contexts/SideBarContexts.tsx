import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";


interface SidebarProps {
  children: ReactNode
}

type SidebarDrawerContextData = UseDisclosureReturn

const sidebarDrawerContext = createContext({} as SidebarDrawerContextData)

export const SidebarDrawerProvider = ({ children }: SidebarProps) => {
  
  const discLosure = useDisclosure()
  const router = useRouter()

  useEffect(() => {
    discLosure.onClose()
  },[router.asPath])
  
  return (
    <sidebarDrawerContext.Provider value={discLosure}>
      {children}
    </sidebarDrawerContext.Provider>
  )

}

export const useSidebarDrawer = () => useContext(sidebarDrawerContext)
