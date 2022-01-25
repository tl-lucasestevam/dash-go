import { Flex } from "@chakra-ui/react";
import Logo from "./Logo";
import NotificationsNav from "./Notifications";
import Profile from "./Profile";
import Search from "./Search";

const Header = () => {
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
      <Search />
      <Flex align="center" ml="auto">
        <NotificationsNav />
        <Profile />
      </Flex>
    </Flex>
  );
};

export default Header;
