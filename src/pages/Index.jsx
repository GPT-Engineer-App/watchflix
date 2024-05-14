import { Box, Container, VStack, HStack, Text, Image, Button, IconButton, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { FaSearch, FaPlay, FaInfoCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const handlePlayClick = () => {
    alert("Play button clicked!");
  };

  const handleMoreInfoClick = () => {
    alert("More Info button clicked!");
  };
  return (
    <Container maxW="container.xl" p={0}>
      {/* Header */}
      <Box bg="black" color="white" py={4} px={8}>
        <HStack justifyContent="space-between">
          <Text fontSize="2xl" fontWeight="bold">
            Netflix
          </Text>
          <HStack spacing={4}>
            <Text>Home</Text>
            <Text>TV Shows</Text>
            <Text>Movies</Text>
            <Text>New & Popular</Text>
            <Text>My List</Text>
          </HStack>
          <InputGroup maxW="200px">
            <Input placeholder="Search" />
            <InputRightElement>
              <IconButton aria-label="Search" icon={<FaSearch />} size="sm" />
            </InputRightElement>
          </InputGroup>
        </HStack>
      </Box>

      {/* Hero Section */}
      <Box position="relative" height="70vh" bg="black">
        <Image src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMHBvc3RlcnxlbnwwfHx8fDE3MTU2NTg1MTd8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Hero Image" objectFit="cover" width="100%" height="100%" opacity={0.5} />
        <VStack position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" color="white" spacing={4} textAlign="center">
          <Text fontSize="4xl" fontWeight="bold">
            Movie Title
          </Text>
          <Text maxW="600px">This is a brief description of the movie. It gives an overview of the plot and entices viewers to watch it.</Text>
          <HStack spacing={4}>
            <Button leftIcon={<FaPlay />} colorScheme="red" onClick={handlePlayClick}>
              Play
            </Button>
            <Button leftIcon={<FaInfoCircle />} colorScheme="gray" onClick={handleMoreInfoClick}>
              More Info
            </Button>
          </HStack>
        </VStack>
      </Box>

      {/* Movie List */}
      <Box py={8} px={8}>
        <Text fontSize="2xl" fontWeight="bold" mb={4}>
          Trending Now
        </Text>
        <HStack spacing={4} overflowX="scroll">
          {Array(10)
            .fill("")
            .map((_, index) => (
              <Box key={index} minW="200px" bg="gray.800" borderRadius="md" overflow="hidden">
                <Image src="https://images.unsplash.com/photo-1510282271343-fdc3dea55439?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMHRodW1ibmFpbHxlbnwwfHx8fDE3MTU2NTg1MTh8MA&ixlib=rb-4.0.3&q=80&w=1080" alt={`Movie ${index + 1}`} />
                <Box p={2}>
                  <Text fontSize="md" fontWeight="bold">
                    Movie {index + 1}
                  </Text>
                </Box>
              </Box>
            ))}
        </HStack>
      </Box>
    </Container>
  );
};

export default Index;
