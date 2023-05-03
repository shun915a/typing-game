import React from 'react';
import { Box, Text, Heading } from '@chakra-ui/react';

const WordDisplay = ({ currentWord }) => {
  return (
    <Box>
      <Heading mb={4}>Current Word:</Heading>
      <Text fontSize="2xl">{currentWord}</Text>
    </Box>
  );
};

export default WordDisplay;
