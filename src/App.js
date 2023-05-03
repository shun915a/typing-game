import React, { useState, useEffect } from 'react';
import { Box, VStack, Spinner } from '@chakra-ui/react';
import WordDisplay from './components/WordDisplay';
import WordForm from './components/WordForm';
import TypingStats from './components/TypingStats';
import fetchWords from './data/fetchWords';

function App() {
  const [words, setWords] = useState([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [typedChars, setTypedChars] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedWords = await fetchWords(10);
      setWords(fetchedWords);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      setStartTime(Date.now());
    }
  }, [isLoading]);

  const updateElapsedTime = () => {
    const currentTime = Date.now();
    const elapsedTimeSeconds = (currentTime - startTime) / 1000;
    setElapsedTime(elapsedTimeSeconds);
  };

  const nextWord = () => {
    updateElapsedTime();
    setCurrentWordIndex((prevIndex) => prevIndex + 1);
  };

  const incrementCount = (count) => {
    setTypedChars((prevCount) => prevCount + count);
  };

  const wpm = (typedChars / 5) * (60 / elapsedTime);

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minH="100vh">
        <Spinner size="xl" />
      </Box>
    );
  }

  return (
    <Box className="App" p={8}>
      <VStack spacing={8} alignItems="stretch">
        <WordDisplay currentWord={words[currentWordIndex]} />
        <WordForm
          currentWord={words[currentWordIndex]}
          nextWord={nextWord}
          incrementCount={incrementCount}
        />
        <TypingStats typedChars={typedChars} wpm={wpm} />
      </VStack>
    </Box>
  );
}

export default App;
