import { Box, Link as ChakraLink, Stack, Text, Icon } from "@chakra-ui/react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";

const SIdebar = () => {
  return (
    <Box as="aside" w={64} mr={8}>
      <Stack spacing={12} align="flex-start">
        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small">
            Geral
          </Text>
          <Stack spacing={4} mt={8} align="stretch">
            <ChakraLink display="flex" align="center">
              <Icon as={RiDashboardLine} fontSize={20} />
              <Text ml={4} fontWeight="medium">
                Dashboard
              </Text>
            </ChakraLink>
            <ChakraLink display="flex" align="center">
              <Icon as={RiContactsLine} fontSize={20} />
              <Text ml={4} fontWeight="medium">
                Users
              </Text>
            </ChakraLink>
          </Stack>
        </Box>

        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small">
            Automatic
          </Text>
          <Stack spacing={4} mt={8} align="stretch">
            <ChakraLink display="flex" align="center">
              <Icon as={RiInputMethodLine} fontSize={20} />
              <Text ml={4} fontWeight="medium">
                Forms
              </Text>
            </ChakraLink>
            <ChakraLink display="flex" align="center">
              <Icon as={RiGitMergeLine} fontSize={20} />
              <Text ml={4} fontWeight="medium">
                Automatic
              </Text>
            </ChakraLink>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default SIdebar;
