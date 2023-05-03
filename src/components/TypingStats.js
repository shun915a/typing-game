import React from 'react';
import { Box, Text, Heading } from '@chakra-ui/react';

const TypingStats = ({ typedChars }) => {
  return (
    <Box>
      <Heading mb={4}>Typed Characters:</Heading>
      <Text fontSize="2xl">{typedChars}</Text>
    </Box>
  );
};

export default TypingStats;
