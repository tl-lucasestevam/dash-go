import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Thead,
  Th,
  Tr,
  Tbody,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { NextPage } from "next";
import Link from "next/link";
import { useEffect } from "react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header, Pagination, Sidebar } from "../../components";

const UserList: NextPage = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box>
      <Header />
      <Flex w="100%" my={6} maxWidth={1480} mx="auto" px={6}>
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p={8}>
          <Flex mb={8} justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Users
            </Heading>
            <Link passHref href="/users/create">
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon fontSize={20} as={RiAddLine} />}
              >
                Create user
              </Button>
            </Link>
          </Flex>
          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={["4", "4", "6"]} color="gray.300" width={8}>
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>User</Th>
                {isWideVersion && <Th>Date of registration</Th>}
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Th px={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>
                  <Box>
                    <Text fontWeight="bold">Lucas Estevam</Text>
                    <Text fontSize="sm" color="gray.300">
                      dev.lucasestevam@gmail.com
                    </Text>
                  </Box>
                </Th>
                {isWideVersion && <Th>04 de Abril, 2021</Th>}
              </Tr>
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
};

export default UserList;
