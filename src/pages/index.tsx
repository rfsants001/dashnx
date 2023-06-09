import Head from "next/head";
import { Button, Flex, Stack } from "@chakra-ui/react";
import { Input } from "@/components/Form/Input";

export default function SignIn() {
  return (
    <>
      <Head>
        <title>Dash NX</title>
      </Head>
      <Flex w="100vw" h="100vh" align="center" justify="center">
        <Flex
          as="form"
          w="100%"
          maxWidth={360}
          bg="gray.600"
          p="8"
          borderRadius={8}
          flexDir="column"
        >
          <Stack spacing="4">
            <Input name="email" type="email" label="Email" />
            <Input name="password" type="password" label="Password" />
          </Stack>

          <Button type="submit" mt="6" colorScheme="twitter" size="lg">
            Login
          </Button>
        </Flex>
      </Flex>
    </>
  );
}
