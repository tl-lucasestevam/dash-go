import { Flex, Input, Text, Icon, HStack, Box, Avatar } from "@chakra-ui/react";
import {
  RiSearchLine,
  RiNotificationLine,
  RiUserAddLine,
} from "react-icons/ri";

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
      <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w={64}>
        Dashgo
        <Text as="span" color="pink.500" ml={1}>
          .
        </Text>
      </Text>
      <Flex
        as="label"
        flex={1}
        py="4"
        px={8}
        ml={6}
        maxWidth={400}
        alignSelf="center"
        color="gray.200"
        position="relative"
        bg="gray.800"
        borderRadius="full"
      >
        <Input
          color="gray.50"
          variant="unstyled"
          placeholder="Search"
          px={4}
          mr={4}
          _placeholder={{ color: "gray.450" }}
        />
        <Icon as={RiSearchLine} fontSize={20} />
      </Flex>
      <Flex align="center" ml="auto">
        <HStack
          spacing={8}
          mx={8}
          pr={8}
          py={1}
          color="gray.300"
          borderRightWidth={1}
          borderColor="gray.700"
        >
          <Icon as={RiNotificationLine} fontSize={20} />
          <Icon as={RiUserAddLine} fontSize={20} />
        </HStack>
        <Flex align="center">
          <Box mr={4} textAlign="right">
            <Text>Lucas Estevam</Text>
            <Text color="gray.300" fontSize="small">
              dev.lucasestevam@gmail.com
            </Text>
          </Box>
          <Avatar
            size="md"
            name="Lucas Estevam"
            src="https://github.com/tl-lucasestevam.png"
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
