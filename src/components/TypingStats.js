import React from 'react';
import { Box, Text, Heading, VStack } from '@chakra-ui/react';

const TypingStats = ({ typedChars, wpm }) => {
  const displayWpm = !isNaN(wpm) ? wpm.toFixed(2) : '---';

  return (
    <VStack alignItems="stretch" spacing={4}>
      <Box>
        <Heading mb={2}>Typed Characters:</Heading>
        <Text fontSize="2xl">{typedChars}</Text>
      </Box>
      <Box>
        <Heading mb={2}>Words Per Minute:</Heading>
        <Text fontSize="2xl">{displayWpm}</Text>
      </Box>
    </VStack>
  );
};

export default TypingStats;
