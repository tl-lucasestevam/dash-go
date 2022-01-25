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
} from "@chakra-ui/react";
import { NextPage } from "next";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header, Pagination, Sidebar } from "../../components";

const userList: NextPage = () => {
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
            <Button
              as="a"
              size="sm"
              fontSize="sm"
              colorScheme="pink"
              leftIcon={<Icon fontSize={20} as={RiAddLine} />}
            >
              Create user
            </Button>
          </Flex>
          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={6} color="gray.300" width={8}>
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>User</Th>
                <Th>Date of registration</Th>
                <Th width={8} />
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Th px={6}>
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
                <Th>04 de Abril, 2021</Th>
                <Th>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="purple"
                    leftIcon={<Icon fontSize={16} as={RiPencilLine} />}
                  >
                    Edit
                  </Button>
                </Th>
              </Tr>
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
};

export default userList;
