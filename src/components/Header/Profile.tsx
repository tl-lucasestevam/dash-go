import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

const Profile = () => {
  return (
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
  );
};

export default Profile;
