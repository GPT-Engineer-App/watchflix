import { Box, Container, VStack, Text, Input, Button } from "@chakra-ui/react";

const SignIn = () => {
  return (
    <Container maxW="container.sm" p={4}>
      <VStack spacing={4} align="stretch">
        <Text fontSize="2xl" fontWeight="bold">
          Sign In
        </Text>
        <Input placeholder="Email" type="email" />
        <Input placeholder="Password" type="password" />
        <Button colorScheme="blue">Sign In</Button>
      </VStack>
    </Container>
  );
};

export default SignIn;
