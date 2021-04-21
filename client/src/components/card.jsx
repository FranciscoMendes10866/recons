import { Box, Flex, Text } from '@chakra-ui/react';

import Form from './form';

const Card = () => {
  return (
    <Box
      p="5"
      maxW="320px"
      top="4"
      right="4"
      position="fixed"
      zIndex="999"
      bg="gray.700"
      borderRadius="4px"
    >
      <Flex direction="column" mt={2}>
        <Text
          textTransform="uppercase"
          fontSize="xl"
          fontWeight="bold"
          textAlign="center"
          color="white"
        >
          Welcome to Recons 🧭
        </Text>
      </Flex>
      <Text
        mt={4}
        fontSize="md"
        fontWeight="semibold"
        lineHeight="short"
        textAlign="center"
      >
        Keep track of your own location.
      </Text>
      <Flex mt={8} align="center">
        <Form />
      </Flex>
    </Box>
  );
};

export default Card;
