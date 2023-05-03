// src/data/fetchWords.js
const fetchWords = async (count = 10) => {
  const response = await fetch(`https://random-word-api.herokuapp.com/word?number=${count}`);
  const words = await response.json();
  return words;
};

export default fetchWords;
