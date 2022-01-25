import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import { NextPage } from "next";
import Link from "next/link";
import { Header, Input, Sidebar } from "../../components";

const createUser: NextPage = () => {
  return (
    <Box>
      <Header />
      <Flex w="100%" my={6} maxWidth={1480} mx="auto" px={6}>
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p={8}>
          <Heading size="lg" fontWeight="normal">
            Create User
          </Heading>
          <Divider my={6} borderColor="gray.700" />
          <VStack spacing={8}>
            <SimpleGrid minChildWidth={240} spacing={8} w="100%">
              <Input name="name" label="Full Name" />
              <Input name="email" type="email" label="Email" />
            </SimpleGrid>
            <SimpleGrid minChildWidth={240} spacing={8} w="100%">
              <Input name="password" type="password" label="Password" />
              <Input
                name="passwordConfirmation"
                type="password"
                label="Password Confirmation"
              />
            </SimpleGrid>
          </VStack>
          <Flex mt={8} justify="flex-end">
            <HStack spacing={4}>
              <Button colorScheme="whiteAlpha">Cancel</Button>
              <Link href="/users" passHref>
                <Button colorScheme="pink">Create</Button>
              </Link>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default createUser;
