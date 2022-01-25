import { Flex, useBreakpointValue } from "@chakra-ui/react";
import Logo from "./Logo";
import NotificationsNav from "./Notifications";
import Profile from "./Profile";
import Search from "./Search";

const Header = () => {
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
