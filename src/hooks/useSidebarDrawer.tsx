import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

interface SidebarDrawerProviderProps {
  children: ReactNode;
}

const SidebarDrawerContext = createContext({} as UseDisclosureReturn);

export function SidebarDrawerProvider({
  children,
}: SidebarDrawerProviderProps) {
  const router = useRouter();
  const disclosure = useDisclosure();

  useEffect(() => disclosure.onClose(), [router.asPath]);

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  );
}

export function useSidebarDrawer() {
  return useContext(SidebarDrawerContext);
}
