import { Text } from "@chakra-ui/react";

const Logo = () => {
  return (
    <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w={64}>
      Dashgo
      <Text as="span" color="pink.500" ml={1}>
        .
      </Text>
    </Text>
  );
};

export default Logo;
