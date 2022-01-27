import { Button, Flex, Stack } from "@chakra-ui/react";
import type { NextPage } from "next";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../components";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface SignInFormData {
  [x: string]: any;
}

const signInFormSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email is a required field")
    .email("Email must be a valid email"),
  password: yup.string().required("Password is a required field"),
});

const SignIn: NextPage = () => {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema),
  });
  const { errors } = formState;

  const handleSignIn: SubmitHandler<SignInFormData> = async ({
    email,
    password,
  }) => {
    console.log(email, password);
  };

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p={8}
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input
            error={errors.email}
            label="Email"
            type="email"
            {...register("email")}
          />
          <Input
            error={errors.password}
            label="Password"
            type="password"
            {...register("password")}
          />
        </Stack>
        <Button
          isLoading={formState.isSubmitting}
          type="submit"
          mt="6"
          colorScheme="pink"
          size="lg"
        >
          Login
        </Button>
      </Flex>
    </Flex>
  );
};

export default SignIn;
