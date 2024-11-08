// solution to problem 3

function countWordOccurrences(sentenceInput: string, wordInput: string): number { 
  const sentenceToLowerCase = sentenceInput.toLowerCase();
  const wordToLowerCase = wordInput.toLowerCase();

  const newSentenceArray = sentenceToLowerCase.split(/\W+/);
  const matchedWordCount = newSentenceArray.filter(word => word === wordToLowerCase).length;

  return matchedWordCount;
}