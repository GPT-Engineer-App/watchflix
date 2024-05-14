import { HStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <HStack spacing={4}>
      <Link to="/">
        <Text>Home</Text>
      </Link>
      <Link to="/signin">
        <Text>Sign In</Text>
      </Link>
    </HStack>
  );
};

export default Navigation;
