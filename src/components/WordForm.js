import React, { useState } from 'react';
import { Box, Input, Button, FormControl } from '@chakra-ui/react';

const WordForm = ({ currentWord, nextWord, incrementCount }) => {
  const [userInput, setUserInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput === currentWord) {
      nextWord();
      incrementCount(currentWord.length);
    }
    setUserInput('');
  };

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <Box as="form" onSubmit={handleSubmit}>
      <FormControl>
        <Input
          type="text"
          value={userInput}
          onChange={handleChange}
          mb={4}
          placeholder="Type the word here"
        />
        <Button type="submit" colorScheme="blue">
          Submit
        </Button>
      </FormControl>
    </Box>
  );
};

export default WordForm;
