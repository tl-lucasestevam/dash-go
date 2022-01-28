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
import { Header, Input, Sidebar } from "../../components";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";
import { useMutation } from "react-query";
import { api, queryClient } from "../../services";
import { useRouter } from "next/router";

interface CreateUerFormData {
  [x: string]: any;
}

const createUserFormSchema = yup.object().shape({
  name: yup.string().required("Name is a required field"),
  email: yup
    .string()
    .required("Email is a required field")
    .email("Email must be a valid email"),
  password: yup
    .string()
    .required("Password is a required field")
    .min(6, "The password need to have at least 6 characters"),
  passwordConfirmation: yup
    .string()
    .required("Password Confirmation is a required field")
    .oneOf([null, yup.ref("password")], "Passwords must be the same"),
});

const CreateUser: NextPage = () => {
  const router = useRouter();
  const createUser = useMutation(
    async (user: CreateUerFormData) => {
      const response = await api.post("users", {
        user: {
          ...user,
          created_at: new Date(),
        },
      });

      return response.data.user;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("users");
        router.push("/users");
      },
    }
  );
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUserFormSchema),
  });
  const { errors } = formState;

  const handleCreateUser: SubmitHandler<CreateUerFormData> = async (values) => {
    await createUser.mutateAsync(values);
  };

  return (
    <Box>
      <Header />
      <Flex w="100%" my={6} maxWidth={1480} mx="auto" px={6}>
        <Sidebar />
        <Box
          as="form"
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p={8}
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <Heading size="lg" fontWeight="normal">
            Create User
          </Heading>
          <Divider my={6} borderColor="gray.700" />
          <VStack spacing={8}>
            <SimpleGrid minChildWidth={240} spacing={8} w="100%">
              <Input
                error={errors.name}
                label="Full Name"
                {...register("name")}
              />
              <Input
                error={errors.email}
                type="email"
                label="Email"
                {...register("email")}
              />
            </SimpleGrid>
            <SimpleGrid minChildWidth={240} spacing={8} w="100%">
              <Input
                error={errors.password}
                type="password"
                label="Password"
                {...register("password")}
              />
              <Input
                error={errors.passwordConfirmation}
                type="password"
                label="Password Confirmation"
                {...register("passwordConfirmation")}
              />
            </SimpleGrid>
          </VStack>
          <Flex mt={8} justify="flex-end">
            <HStack spacing={4}>
              <Link href="/users" passHref>
                <Button colorScheme="whiteAlpha">Cancel</Button>
              </Link>
              <Button
                isLoading={formState.isSubmitting}
                colorScheme="pink"
                type="submit"
              >
                Create
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default CreateUser;
