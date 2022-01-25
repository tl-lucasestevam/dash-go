import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { useSidebarDrawer } from "../../hooks";
import Logo from "./Logo";
import NotificationsNav from "./Notifications";
import Profile from "./Profile";
import Search from "./Search";

const Header = () => {
  const { onOpen } = useSidebarDrawer();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Flex
      as="header"
      w="100%"
      maxW={1480}
      mx="auto"
      h={20}
      mt={4}
      align="center"
      px={6}
    >
      {!isWideVersion && (
        <IconButton
          icon={<Icon as={RiMenuLine} />}
          fontSize={24}
          onClick={onOpen}
          variant="unstyled"
          aria-label="Open navigation"
          mr={2}
        ></IconButton>
      )}
      <Logo />
      {isWideVersion && <Search />}
      <Flex align="center" ml="auto">
        <NotificationsNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
};

export default Header;
